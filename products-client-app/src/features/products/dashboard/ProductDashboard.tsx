import React from 'react';
import { Grid } from 'semantic-ui-react';
import ProductList from '../components/ProductList';
import { ProductDetails } from '../components/ProductDetails';
import ProductForm from '../components/ProductForm';
import { useStore } from '../../../app/stores/Store';
import { observer } from 'mobx-react-lite';

const ProductDashboard: React.FC = () => {
  const {
    productStore: { selectedProduct, editMode },
  } = useStore();
  return (
    <Grid>
      <Grid.Column width={10}>
        <ProductList />
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedProduct && !editMode && <ProductDetails />}
        {editMode && <ProductForm />}
      </Grid.Column>
    </Grid>
  );
};

export default observer(ProductDashboard);
