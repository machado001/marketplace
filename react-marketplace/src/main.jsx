import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './context/authContext'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import AddProduct from './routes/AddProduct'
import { Login } from './routes/Login'
import { Register } from './routes/Register'

import ErrorPage from './error-page'
import './index.css'
import Root from './routes/root'
import Produtos from './components/Produtos'
import Profile from './components/Profile'
import ProductPage from './routes/ProductPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: '/product/:id',
    element: <ProductPage />,
  },
  {
    path: '/add-product',
    element: (
      <ProtectedRoute>
        <AddProduct />
      </ProtectedRoute>
    ),
  },
  {
    path: '/produtos',
    element: <Produtos />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
