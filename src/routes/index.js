import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Login from '../pages/Login';
import { UserProvider } from '../context/UserContext';

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <UserProvider>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Login />} path="/login/*" />
      </Routes>
      <Footer />
    </UserProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
