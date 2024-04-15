import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/Store';

export const ProductDetails: React.FC = () => {
  const {
    productStore: { cancelSelectedProduct, selectedProduct, openForm },
  } = useStore();
  return (
    <Card fluid>
      <Image
        src={`/assets/productImages/${selectedProduct?.image}`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{selectedProduct?.name}</Card.Header>
        <Card.Meta>
          <span>{selectedProduct?.price}</span>
        </Card.Meta>
        <Card.Description>{selectedProduct?.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths='2'>
          <Button
            basic
            color='blue'
            content='Edit'
            onClick={() => openForm(selectedProduct?.id)}
          />
          <Button
            basic
            color='grey'
            content='Cancel'
            onClick={() => cancelSelectedProduct()}
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};
