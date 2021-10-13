import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Login from '../pages/Login';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route component={Home} path="/" exact />
      <Route component={Login} path="/login" />
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
