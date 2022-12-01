import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Login } from '../components/Login'
import { Register } from '../components/Register'
import Header from '../components/Header'
import AddProduct from '../components/AddProduct'

export function Routess() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  )
}
