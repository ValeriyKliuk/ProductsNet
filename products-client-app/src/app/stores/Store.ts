import { createContext, useContext } from 'react';
import { ProductStore } from './ProductStore';

interface Store {
  productStore: ProductStore;
}

export const store: Store = {
  productStore: new ProductStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
