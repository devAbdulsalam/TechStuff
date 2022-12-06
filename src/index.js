import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoadingProvider from './context/LoadingContext';
import AuthContextProvider from './context/AuthContext';
import NavbarContext from './context/NavbarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NavbarContext>
  <LoadingProvider>
    <AuthContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthContextProvider>
  </LoadingProvider>
  </NavbarContext>
);