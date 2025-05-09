import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '../components/app';
import { BrowserRouter } from 'react-router-dom';
import 'bootswatch/dist/solar/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);