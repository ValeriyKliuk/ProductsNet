import { createBrowserRouter, RouteObject } from 'react-router-dom';
import App from '../App';
import { HomePage } from '../../features/home/HomePage';
import ProductDashboard from '../../features/products/dashboard/ProductDashboard';
import ProductForm from '../../features/products/components/ProductForm';
import ProductDetails from '../../features/products/components/ProductDetails';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'products', element: <ProductDashboard /> },
      { path: 'products/:id', element: <ProductDetails /> },
      { path: 'createProduct', element: <ProductForm /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
