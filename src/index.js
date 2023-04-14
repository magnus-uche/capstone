import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App';
import './index.scss';
import UserProvider from './context/user.context';
import CategoryProvider from './context/category.context';
import CartsProvider from './context/cart.context';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <UserProvider>
  <CategoryProvider>
  <CartsProvider>
  <App/>
  </CartsProvider>
  </CategoryProvider>
  </UserProvider>
  </BrowserRouter>
  </React.StrictMode>
);

