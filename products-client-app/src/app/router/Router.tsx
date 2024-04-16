import { createBrowserRouter, RouteObject } from 'react-router-dom';
import App from '../App';
import { HomePage } from '../../features/home/HomePage';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [{ path: '', element: <HomePage /> }],
  },
];

export const router = createBrowserRouter(routes);
