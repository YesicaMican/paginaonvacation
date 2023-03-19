import React from 'react'
import destinos from "./destinos.json"
import Destino from './Hooks/Destino'

function MapLET() {
  return (
    <div className="container">
      <div className="row">
        {destinos.destinoamazonas.map((Des) => {
          return <Destino hoteles={Des} efectoderecha={false} />;
        })}
      </div>
    </div>
  );
}

export default MapLET