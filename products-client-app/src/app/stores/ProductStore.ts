import { makeAutoObservable, runInAction } from 'mobx';
import { Product } from '../models/Product';
import agent from '../api/agent';
import { v4 as uuid } from 'uuid';

export class ProductStore {
  productRegistry = new Map<string, Product>();
  selectedProduct: Product | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = true;

  constructor() {
    makeAutoObservable(this);
  }

  get productsByDate() {
    return Array.from(this.productRegistry.values()).sort(
      (a, b) => Date.parse(a.date) - Date.parse(b.date)
    );
  }

  selectProduct = (id: string) => {
    this.selectedProduct = this.productRegistry.get(id);
  };

  cancelSelectedProduct = () => {
    this.selectedProduct = undefined;
  };

  openForm = (id?: string) => {
    id ? this.selectProduct(id) : this.cancelSelectedProduct();
    this.editMode = true;
  };

  closeForm = () => {
    this.editMode = false;
  };

  loadProducts = async () => {
    try {
      const products = await agent.Products.list();
      products.forEach((product) => {
        product.date = product.date.split('T')[0];
        runInAction(() => {
          this.productRegistry.set(product.id, product);
          this.loadingInitial = false;
        });
      });
    } catch (error) {
      console.log(error);
      this.loadingInitial = false;
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
      if (this.selectedProduct?.id === id) this.cancelSelectedProduct();
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
