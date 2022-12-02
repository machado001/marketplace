import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import AddProduct from './components/AddProduct';
import { Login } from './components/Login';
import { Register } from './components/Register';

import ErrorPage from './error-page';
import './index.css';
import Root from './routes/root';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root />,
    errorElement:<ErrorPage />
  },
  {
    path:"login",
    element:<Login />,
  },
  {
    path:"/register",
    element:<Register />,
  },
  {
    path:"/add-product",
    element:<AddProduct />,
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
