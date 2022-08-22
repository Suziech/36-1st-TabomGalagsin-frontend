import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import ProductsList from './pages/ProductsList/ProductsList';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
