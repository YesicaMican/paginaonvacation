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
import Promo from "./hoteles/Promo";


function Home() {
  const [showAd, setShowAd] = useState(true);

  const handleClose = () => setShowAd(false);
  return (
    
    
  <>
  <AdModal show={showAd} handleClose={handleClose} />
  <App />
  <br></br>
  <h2 className="container-fluid text-center AB3">Conoce mas de nuestras promociones</h2>
  <Promo />
  <br></br>
  <h1 className="container-fluid text-center AB4" >San Andres</h1>
  <MapADZ  className="enviar-fondo"/>
  <h1 className="container-fluid text-center AB4">Guajira</h1>
  <MapRCH />
  <h1 className="container-fluid text-center AB4">Cartagena</h1>
  <MapCTG />
  <h1 className="container-fluid text-center AB4">Amazonas</h1>
  <MapLET />
  <h1 className="container-fluid text-center AB4">Eje Cafetero</h1>
  <MAPArm />
  <h1 className="container-fluid text-center AB4">Girardot</h1>
  <MAPGir />
  <h1 className="container-fluid text-center AB4">Cancún</h1>
  <MAPCUN />
  <h1 className="container-fluid text-center AB4">Panamá</h1>
  <MAPpan />
  <h1 className="container-fluid text-center AB4">Punta Cana</h1>
  <MAPcana />
  </>
  
  )
}

export default Home