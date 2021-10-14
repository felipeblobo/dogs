import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Login from '../pages/Login';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Login />} path="/login/*" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
