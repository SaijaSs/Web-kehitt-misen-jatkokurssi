import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18
import './App.css'; // Yleiset tyylit
import App from './App'; // Pääkomponentti

// Renderöi App-komponentin id="root" sisältöön
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
