import React from 'react'
import destinos from "./destinos.json"
import Destino from './Hooks/Destino'

function MAPArm() {
  return (
    <div className="container">
      <div className="row">
        {destinos.destinoeje.map((Des) => {
          return <Destino hoteles={Des} efectoderecha={true} />;
        })}
      </div>
    </div>
  );
}

export default MAPArm