import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // This is where your global CSS will go
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
