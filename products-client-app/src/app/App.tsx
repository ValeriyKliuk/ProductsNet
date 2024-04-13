import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Product } from './models/Product';
import NavBar from './layout/NavBar';
import { ProductDashboard } from '../features/products/dashboard/ProductDashboard';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (products.length === 0) {
      axios
        .get<Product[]>('http://localhost:5000/api/Products')
        .then((response) => {
          setProducts(response.data);
        });
    }
  }, [products]);

  return (
    <>
      <NavBar />
      <ProductDashboard products={products} />
    </>
  );
}

export default App;
