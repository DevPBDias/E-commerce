import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailProduct from './pages/DetailProduct';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<DetailProduct />} />
    </Routes>
  );
}

export default App;
