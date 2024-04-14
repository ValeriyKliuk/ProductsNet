import { useEffect, useState } from 'react';
import './App.css';
import { Product } from './models/Product';
import NavBar from './layout/NavBar';
import { ProductDashboard } from '../features/products/dashboard/ProductDashboard';
import { v4 as uuid } from 'uuid';
import agent from './api/agent';
import { LoadingView } from './layout/LoadingView';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined
  );
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (products.length === 0) {
      agent.Products.list().then((response) => {
        const products: Product[] = [];
        response.forEach((product) => {
          product.date = product.date.split('T')[0];
          products.push(product);
        });
        setProducts(products);
        setLoading(false);
      });
    }
  }, [products]);

  const handleSelectProduct = (id: string) => {
    setSelectedProduct(
      products.find((product) => product.id === id) || undefined
    );
  };

  const handleCancelSelectProduct = () => {
    setSelectedProduct(undefined);
  };

  const handleFormOpen = (id?: string) => {
    id ? handleSelectProduct(id) : handleCancelSelectProduct();
    setEditMode(true);
  };

  const handleFormClose = () => {
    setEditMode(false);
  };

  const handleCreateOrEditProduct = (product: Product) => {
    setSubmitting(true);
    if (product.id) {
      agent.Products.update(product).then(() => {
        setProducts([...products.filter((p) => p.id !== product.id), product]);
        setSelectedProduct(product);
        setEditMode(false);
        setSubmitting(false);
      });
    } else {
      product.id = uuid();
      agent.Products.create(product).then(() => {
        setProducts([...products, product]);
        setSelectedProduct(product);
        setEditMode(false);
        setSubmitting(false);
      });
    }
  };

  const handleDeleteProduct = (id: string) => {
    setSubmitting(true);
    setEditMode(false);
    setSelectedProduct(undefined);
    agent.Products.delete(id).then(() => {
      setProducts([...products.filter((product) => product.id !== id)]);
      setSubmitting(false);
    });
  };

  if (loading) {
    return <LoadingView />;
  }
  return (
    <>
      <NavBar openForm={handleFormOpen} />
      <ProductDashboard
        products={products}
        selectedProduct={selectedProduct}
        selectProduct={handleSelectProduct}
        cancelSelectProduct={handleCancelSelectProduct}
        editMode={editMode}
        openForm={handleFormOpen}
        closeForm={handleFormClose}
        createOrEdit={handleCreateOrEditProduct}
        deleteProduct={handleDeleteProduct}
        submitting={submitting}
      />
    </>
  );
}

export default App;
