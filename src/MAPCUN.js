import React from 'react'
import destinos from "./destinos.json"
import { useNavigate } from "react-router-dom";
function MAPCUN() {
  const navigate = useNavigate();
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
            <button variant="contained" className="btn btn-outline-light"  onClick={() => navigate(`${cancun.masinformacion}`)} >Más Información</button>
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

