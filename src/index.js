import React, { StrictMode } from 'react';
import router from './routes/Routes.jsx';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './scss/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <RouterProvider router={router()} />
  </StrictMode>
);
