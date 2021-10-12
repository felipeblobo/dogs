import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;