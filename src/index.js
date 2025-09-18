import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

const firebaseConfig = {
  apiKey: "AIzaSyALcpFDY6eU8yayepBIAxPMXipbjB-D6b4",
  authDomain: "lanchoneteburguer-589d9.firebaseapp.com",
  projectId: "lanchoneteburguer-589d9",
  storageBucket: "lanchoneteburguer-589d9.firebasestorage.app",
  messagingSenderId: "308963886763",
  appId: "1:308963886763:web:6a2d55390094b00a9fd9ee",
  measurementId: "G-EGJTZ78LD5"
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
