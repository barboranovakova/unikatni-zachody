import { Outlet } from 'react-router-dom';
import React from 'react';

export const App = () => {
  <>
    <Header />
    <Outlet />
    <Footer />
  </>;
};
