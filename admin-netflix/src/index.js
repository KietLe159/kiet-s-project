import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ThemeContextProvider from "./darkTheme/themeContextProvider";
import './index.css';
import { Provider } from 'react-redux';
import { loginStore } from './Redux/storeLoginRedux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={loginStore}>
    <ThemeContextProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ThemeContextProvider>
    </Provider>
  </React.StrictMode>
);


