import React from 'react'
import destinos from "./destinos.json"
import { useNavigate } from "react-router-dom";
function MapLET() {
  const navigate = useNavigate();
  return (
    <div className="container">
    <div className="row">
      {destinos.destinoamazonas.map((amazonas) => {
        return (
          <div className="col-sm-4 mt-2" key={amazonas.hotel}>
          <div className="card text-bg-dark">
          <img src={amazonas.imagen} className="" alt="..."/>
          <div className="card-img-overlay">
            <h5 className="card-title">{amazonas.hotel}</h5>
            <button variant="contained" className="btn btn-outline-light"  onClick={() => navigate(`${amazonas.masinformacion}`)} >Más Información</button>
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