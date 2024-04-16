import React, { useEffect } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/Store';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { LoadingView } from '../../../app/layout/LoadingView';

const ProductDetails: React.FC = () => {
  const {
    productStore: { selectedProduct, loadProduct, loadingInitial },
  } = useStore();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) loadProduct(id);
  }, [id, loadProduct]);

  if (loadingInitial || !selectedProduct) return <LoadingView />;

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
          <Button basic color='blue' content='Edit' />
          <Button basic color='grey' content='Cancel' />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default observer(ProductDetails);
