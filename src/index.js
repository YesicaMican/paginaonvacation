  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom'
  import './index.css';
  import App from './App';
  import reportWebVitals from './reportWebVitals';
  import Navegador from './Navegador.js';
  import Footer from './Footer';
  import MapADZ from './MapADZ';
  import MapRCH from './MapRCH';
  import MapCTG from './MapCTG';
  import MAPCUN from './MAPCUN';
  import MapLET from './MapLET';
  import MAPArm from './MAPArm';
  import MAPGir from './MAPGir';
  import bluereef from './hoteles/bluereef';
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
    <React.StrictMode>
      <Navegador />
      <App />
      <h1 className='container-fluid text-center'>San Andres</h1>
      <MapADZ />
      <h1 className='container-fluid text-center'>Guajira</h1>
      <MapRCH />
      <h1 className='container-fluid text-center'>Cartagena</h1>
      <MapCTG />
      <h1 className='container-fluid text-center'>Amazonas</h1>
      <MapLET />
      <h1 className='container-fluid text-center'>Eje Cafetero</h1>
      <MAPArm />
      <h1 className='container-fluid text-center'>Girardot</h1>
      <MAPGir  />
      <h1 className='container-fluid text-center'>Cancún</h1>
      <MAPCUN />
      <Footer />
      <Router>
      <Route path="/blueReef" element= {<bluereef/>} />
    </Router>
    </React.StrictMode>
    </BrowserRouter>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
