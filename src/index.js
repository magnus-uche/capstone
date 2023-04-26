import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.scss';
import CartsProvider from './context/cart.context';
import { store } from './store/store';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
            <CartsProvider>
              <App />
            </CartsProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

