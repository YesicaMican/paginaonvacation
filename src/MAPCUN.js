import React from 'react'
import destinos from "./destinos.json"
function MAPCUN() {
  return (
    <div className="container">
    <div className="row">
      {destinos.destinocun.map((cancun) => {
        return (
          <div className="col-sm-4 mt-2" key={cancun.hotel}>
          <div className="card text-bg-dark">
          <img src={cancun.imagen} className="" alt="..."/>
          <div className="card-img-overlay">
            <h5 className="card-title">{cancun.hotel}</h5>
            <button variant="contained" className="btn btn-outline-light"><small>Más información</small></button>
            <p className="card-text">{cancun.descripcion}</p>
          </div>
        </div>
        </div>
        );
      })}
      
    </div>
   
</div>
  )

}

export default MAPCUN

