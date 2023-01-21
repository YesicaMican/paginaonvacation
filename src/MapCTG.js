import React from 'react'
import destinos from "./destinos.json"
function MapCTG() {
  return (
    <div className="container">
    <div className="row">
      {destinos.destinoctg.map((Cartagena) => {
        return (
          <div className="col-sm-4" key={Cartagena.hotel}>
          <div className="card text-center mt-4">
            
          <img src={Cartagena.imagen} className="" alt="..."/>
          <h5 className="card-title">{Cartagena.hotel}</h5>
          <p className="card-text ">{Cartagena.descripcion}</p>
          <button variant="contained" className="btn btn-primary">
            <link rel="" type="" href="./hoteles/bluereef.js"/>
            Mas información hotel {Cartagena.hotel}
          </button>
      </div> 
        </div>
        );
      })}
      
    </div>
   
</div>
  )
}

export default MapCTG
