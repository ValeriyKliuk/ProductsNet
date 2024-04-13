import React from 'react';
import { List } from 'semantic-ui-react';

interface Product {
  id: string;
  name: string;
  description: string;
}

interface ProductViewProps {
  product: Product;
}

const ProductView: React.FC<ProductViewProps> = ({ product }) => {
  return (
    <List.Item>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </List.Item>
  );
};

export default ProductView;
