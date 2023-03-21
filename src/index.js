import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App';
import './index.scss';
import UserProvider from './context/user.context';
import ProductsProvider from './context/product.context';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <UserProvider>
  <ProductsProvider>
  <App/>
  </ProductsProvider>
  </UserProvider>
  </BrowserRouter>
  </React.StrictMode>
);

