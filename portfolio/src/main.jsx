import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../components/app';
import { BrowserRouter } from 'react-router-dom';
import 'bootswatch/dist/solar/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <App />
    </BrowserRouter>

);