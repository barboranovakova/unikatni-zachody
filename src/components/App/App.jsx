import { Outlet } from 'react-router-dom';
import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const App = () => {
  <>
    <Header />
    <Outlet />
    <Footer />
  </>;
};
