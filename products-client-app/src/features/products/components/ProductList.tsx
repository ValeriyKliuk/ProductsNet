import React from 'react';
import { Product } from '../../../app/models/Product';
import { Item, Segment } from 'semantic-ui-react';
import ProductView from './ProductView';

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Segment>
      <Item.Group divided>
        {products.map((product) => (
          <ProductView key={product.id} product={product} />
        ))}
      </Item.Group>
    </Segment>
  );
};
