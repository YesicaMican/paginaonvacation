import MapADZ from "./MapADZ";
import MapRCH from "./MapRCH";
import MapCTG from "./MapCTG";
import MAPCUN from "./MAPCUN";
import MapLET from "./MapLET";
import MAPArm from "./MAPArm";
import MAPGir from "./MAPGir";
import App from "./App";
import "./App.css"
import MAPpan from './MAPpan';
import MAPcana from './MAPcana';
import AdModal from "./Admodal";
import React, { useState } from 'react';


function Home() {
  const [showAd, setShowAd] = useState(true);

  const handleClose = () => setShowAd(false);
  return (
    
    
  <>
  <AdModal show={showAd} handleClose={handleClose} />
  <App />
  <h1 className="container-fluid text-center">San Andres</h1>
  <MapADZ  className="enviar-fondo"/>
  <h1 className="container-fluid text-center">Guajira</h1>
  <MapRCH />
  <h1 className="container-fluid text-center">Cartagena</h1>
  <MapCTG />
  <h1 className="container-fluid text-center">Amazonas</h1>
  <MapLET />
  <h1 className="container-fluid text-center">Eje Cafetero</h1>
  <MAPArm />
  <h1 className="container-fluid text-center">Girardot</h1>
  <MAPGir />
  <h1 className="container-fluid text-center">Cancún</h1>
  <MAPCUN />
  <h1 className="container-fluid text-center">Panamá</h1>
  <MAPpan />
  <h1 className="container-fluid text-center">Punta Cana</h1>
  <MAPcana />
  </>
  
  )
}

export default Home