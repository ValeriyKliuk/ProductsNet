import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Product } from './models/Product';
import NavBar from './layout/NavBar';
import { ProductDashboard } from '../features/products/dashboard/ProductDashboard';
import { v4 as uuid } from 'uuid';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined
  );
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (products.length === 0) {
      axios
        .get<Product[]>('http://localhost:5000/api/Products')
        .then((response) => {
          setProducts(response.data);
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
    product.id
      ? setProducts([...products.filter((p) => p.id !== product.id), product])
      : setProducts([...products, { ...product, id: uuid() }]);
    setEditMode(false);
    setSelectedProduct(product);
  };

  const handleDeleteProduct = (id: string) => {
    setProducts([...products.filter((product) => product.id !== id)]);
  };
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
      />
    </>
  );
}

export default App;
