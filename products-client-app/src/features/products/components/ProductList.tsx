import React from 'react';
import { Product } from '../../../app/models/Product';
import { Item, Segment } from 'semantic-ui-react';
import ProductView from './ProductView';

interface ProductListProps {
  products: Product[];
  selectProduct: (id: string) => void;
  deleteProduct: (id: string) => void;
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  selectProduct,
  deleteProduct,
}) => {
  return (
    <Segment>
      <Item.Group divided>
        {products.map((product) => (
          <ProductView
            key={product.id}
            product={product}
            selectProduct={selectProduct}
            deleteProduct={deleteProduct}
          />
        ))}
      </Item.Group>
    </Segment>
  );
};
