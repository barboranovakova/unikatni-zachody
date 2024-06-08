import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import { App } from './components/App/App';
import { Quiz } from './components/Quiz/Quiz';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/map',
        element: <Map />,
      },
      {
        path: '/quiz',
        element: <Quiz />,
      },
      // {
      //   path: '/toilett-detail',
      //   element: <ToilettDetail />,
      // },
    ],
  },
]);
createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);