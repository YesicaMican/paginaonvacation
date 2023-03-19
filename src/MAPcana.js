import React from 'react'
import destinos from './destinos.json'
import Destino from './Hooks/Destino'

function MAPcana() {
    return (
      <div className="container">
        <div className="row">
          {destinos.destinopuntacana.map((Des) => {
            return <Destino hoteles={Des} efectoderecha={true} />;
          })}
        </div>
      </div>
    );
  
}

export default MAPcana