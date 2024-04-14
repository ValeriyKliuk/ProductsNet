import React from 'react';
import { Product } from '../../../app/models/Product';
import { Button, Card, Image } from 'semantic-ui-react';

interface ProductDetailsProps {
  product: Product;
  cancelSelectProduct: () => void;
  openForm: (id: string) => void;
}
export const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  cancelSelectProduct,
  openForm,
}) => {
  return (
    <Card fluid>
      <Image
        src={`/assets/productImages/${product.image}`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{product.name}</Card.Header>
        <Card.Meta>
          <span>{product.price}</span>
        </Card.Meta>
        <Card.Description>{product.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths='2'>
          <Button
            basic
            color='blue'
            content='Edit'
            onClick={() => openForm(product.id)}
          />
          <Button
            basic
            color='grey'
            content='Cancel'
            onClick={cancelSelectProduct}
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};
