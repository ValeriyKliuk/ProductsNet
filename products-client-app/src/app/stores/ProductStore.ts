import { makeAutoObservable, runInAction } from 'mobx';
import { Product } from '../models/Product';
import agent from '../api/agent';
import { v4 as uuid } from 'uuid';

export class ProductStore {
  productRegistry = new Map<string, Product>();
  selectedProduct: Product | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  get productsByDate() {
    return Array.from(this.productRegistry.values()).sort(
      (a, b) => Date.parse(a.date) - Date.parse(b.date)
    );
  }

  private getProduct = (id: string) => {
    return this.productRegistry.get(id);
  };

  setProduct = (product: Product) => {
    product.date = product.date.split('T')[0];
    this.productRegistry.set(product.id, product);
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  private setSelectedProduct = (product: Product) => {
    this.selectedProduct = product;
  };

  loadProducts = async () => {
    this.setLoadingInitial(true);
    try {
      const products = await agent.Products.list();
      products.forEach((product) => {
        this.setProduct(product);
        this.setLoadingInitial(false);
      });
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  loadProduct = async (id: string) => {
    let product = this.getProduct(id);
    if (product) {
      this.selectedProduct = product;
      return product;
    } else {
      this.loadingInitial = true;
      try {
        product = await agent.Products.details(id);
        this.setProduct(product);
        this.setSelectedProduct(product);
        this.setLoadingInitial(false);
        return product;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };

  createProduct = async (product: Product) => {
    this.loading = true;
    product.id = uuid();
    try {
      await agent.Products.create(product);
      runInAction(() => {
        this.productRegistry.set(product.id, product);
        this.selectedProduct = product;
        this.editMode = false;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      this.loading = false;
    }
  };

  updateProduct = async (product: Product) => {
    this.loading = true;
    try {
      await agent.Products.update(product);
      runInAction(() => {
        this.productRegistry.set(product.id, product);
        this.selectedProduct = product;
        this.editMode = false;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      this.loading = false;
    }
  };

  deleteProduct = async (id: string) => {
    this.loading = true;
    try {
      await agent.Products.delete(id);
      runInAction(() => {
        this.productRegistry.delete(id);
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      this.loading = false;
    }
  };
}
