import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App';
import './index.scss';
import CategoryProvider from './context/category.context';
import CartsProvider from './context/cart.context';
import { store } from './store/store';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <CategoryProvider>
            <CartsProvider>
              <App />
            </CartsProvider>
          </CategoryProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

