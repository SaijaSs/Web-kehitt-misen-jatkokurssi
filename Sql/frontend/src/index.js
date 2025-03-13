import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrapin tyylit
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Tämä on omat tyylisi, jos haluat lisätä lisää
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
