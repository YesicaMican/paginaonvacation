import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navegador from './Navegador.js';
import Footer from './Footer';
import MapADZ from './MapADZ';
import MapRCH from './MapRCH';
import MapCTG from './MapCTG';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navegador />
    <App />
    <h1 className='container-fluid text-center'>San Andres</h1>
    <MapADZ />
    <h1 className='container-fluid text-center'>Guajira</h1>
    <MapRCH />
    <h1 className='container-fluid text-center'>Cartagena</h1>
    <MapCTG />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
