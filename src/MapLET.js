import React from 'react'
import destinos from "./destinos.json"
function MapLET() {
  return (
    <div className="container">
    <div className="row">
      {destinos.destinoamazonas.map((amazonas) => {
        return (
          <div className="col-sm-4 m-2" key={amazonas.hotel}>
          <div className="card text-bg-dark">
          <img src={amazonas.imagen} className="" alt="..."/>
          <div className="card-img-overlay">
            <h5 className="card-title">{amazonas.hotel}</h5>
            <button variant="contained" className="btn btn-outline-light"><small>Más información</small></button>
            <p className="card-text">{amazonas.descripcion}</p>
          </div>
        </div>
        </div>  
        );
      })}
      
    </div>
   
</div>
  )
}

export default MapLET