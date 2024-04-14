import React, { SyntheticEvent } from 'react';
import { Product } from '../../../app/models/Product';
import { Button, Item, Label } from 'semantic-ui-react';

interface ProductViewProps {
  product: Product;
  selectProduct: (id: string) => void;
  deleteProduct: (id: string) => void;
  submitting: boolean;
}

const ProductView: React.FC<ProductViewProps> = ({
  product,
  selectProduct,
  deleteProduct,
  submitting,
}) => {
  const [target, setTarget] = React.useState('');

  const handleProductDelete = (
    event: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) => {
    setTarget(event.currentTarget.name);
    deleteProduct(id);
  };

  return (
    <Item>
      <Item.Image size='tiny' src={`/assets/productImages/${product.image}`} />
      <Item.Content>
        <Item.Header as='a'>{product.name}</Item.Header>
        <Item.Meta>${product.price}</Item.Meta>
        <Item.Description>
          <div>{product.description}</div>
        </Item.Description>
        <Item.Extra>
          <Button
            floated='right'
            content='View'
            color='blue'
            onClick={() => selectProduct(product.id)}
          />
          <Button
            name={product.id}
            floated='right'
            content='Delete'
            color='red'
            loading={submitting && target === product.id}
            onClick={(e) => handleProductDelete(e, product.id)}
          />
          <Label basic content={product.category} />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default ProductView;
