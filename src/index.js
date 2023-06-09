import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import rootReducer from './reducers'

import { configureStore } from '@reduxjs/toolkit'
const store = configureStore({ reducer: rootReducer })


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App className="container" />
    </Provider>
  </React.StrictMode>
);
