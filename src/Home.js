import React from 'react'
import MapADZ from "./MapADZ";
import MapRCH from "./MapRCH";
import MapCTG from "./MapCTG";
import MAPCUN from "./MAPCUN";
import MapLET from "./MapLET";
import MAPArm from "./MAPArm";
import MAPGir from "./MAPGir";
import App from "./App";
import "./App.css"

function Home() {
  return (
  <>
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
  </>
  )
}

export default Home