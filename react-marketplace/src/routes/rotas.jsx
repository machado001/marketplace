import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { Header } from '../components/Header';

export function Routess() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}