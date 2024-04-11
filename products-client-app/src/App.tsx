import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Product } from './models/Product';
import { Header, List } from 'semantic-ui-react';
import ProductView from './components/ProductView';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (products.length === 0) {
      axios.get('http://localhost:5000/api/Products').then((response) => {
        setProducts(response.data);
      });
    }
  }, [products]);

  return (
    <div>
      <Header as='h2' icon='shopping bag' content='Products' />
      <List divided relaxed>
        {products.map((product: Product) => (
          <ProductView key={product.id} product={product} />
        ))}
      </List>
    </div>
  );
}

export default App;
