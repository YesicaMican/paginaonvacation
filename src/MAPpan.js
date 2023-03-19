import React from 'react'
import destinos from "./destinos.json"
import Destino from './Hooks/Destino'

function MAPpan() {
  return (
    <div className="container">
      <div className="row">
        {destinos.destinopanama.map((Des) => {
          return <Destino hoteles={Des} efectoderecha={false} />;
        })}
      </div>
    </div>
  );
}

export default MAPpan