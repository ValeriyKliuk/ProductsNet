import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import ProductList from '../components/ProductList';
import { useStore } from '../../../app/stores/Store';
import { observer } from 'mobx-react-lite';
import { LoadingView } from '../../../app/layout/LoadingView';

const ProductDashboard: React.FC = () => {
  const {
    productStore: { loadProducts, loadingInitial },
  } = useStore();

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  if (loadingInitial) {
    return <LoadingView />;
  }

  return (
    <Grid>
      <Grid.Column width={'16'}>
        <ProductList />
      </Grid.Column>
    </Grid>
  );
};

export default observer(ProductDashboard);
