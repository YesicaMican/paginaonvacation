import React from "react";
import destinos from "./destinos.json";

function MapADZ() {
  return (
    <div className="container">
      <div className="row">
        {destinos.destinossanandres.map((sanandres) => {
          return (
            <div className="col-sm-4" key={sanandres.hotel}>
            <div className="card text-center mt-4">
              
            <img src={sanandres.imagen} className="" alt="..."/>
            <h5 className="card-title">{sanandres.hotel}</h5>
            <p className="card-text ">{sanandres.descripcion}</p>
            <button variant="contained" className="btn btn-primary">
              <link rel="" type="" href="./hoteles/bluereef.js"/>
              Mas información hotel {sanandres.hotel}
            </button>
        </div> 
          </div>
          );
        })}
        
      </div>
     
  </div>
  );
}

export default MapADZ;
