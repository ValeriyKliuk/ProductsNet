import React, { useEffect } from 'react';
import './App.css';
import NavBar from './layout/NavBar';
import ProductDashboard from '../features/products/dashboard/ProductDashboard';
import { LoadingView } from './layout/LoadingView';
import { useStore } from './stores/Store';
import { observer } from 'mobx-react-lite';

const App: React.FC = () => {
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
    <>
      <NavBar />
      <ProductDashboard />
    </>
  );
};

export default observer(App);
