import React from 'react';
import { Item, Segment } from 'semantic-ui-react';
import ProductView from './ProductView';
import { useStore } from '../../../app/stores/Store';
import { observer } from 'mobx-react-lite';

const ProductList: React.FC = () => {
  const {
    productStore: { productsByDate },
  } = useStore();

  return (
    <Segment>
      <Item.Group divided>
        {productsByDate.map((product) => (
          <ProductView key={product.id} product={product} />
        ))}
      </Item.Group>
    </Segment>
  );
};

export default observer(ProductList);
