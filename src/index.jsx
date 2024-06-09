import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import { App } from './components/App/App';
import { Quiz } from './pages/Quiz/Quiz';
import { Map } from './pages/Map/Map';
import { MapDetail } from './pages/MapDetail/MapDetail';

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
        path: '/map/:id',
        element: <MapDetail />,
      },
    ],
  },
  {
    path: '/quiz',
    element: <Quiz />,
  },
]);
createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
