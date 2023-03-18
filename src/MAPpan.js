import React from 'react'
import destinos from "./destinos.json"
import { useNavigate } from "react-router-dom";
function MAPpan() {
  const navigate = useNavigate();
  return (
    <div className="container">
    <div className="row">
      {destinos.destinopanama.map((panama) => {
        return (
          <div className="col-sm-4 mt-2" key={panama.hotel}>
          <div className="card text-bg-dark">
          <img src={panama.imagen} className="" alt="..."/>
          <div className="card-img-overlay">
            <h5 className="card-title">{panama.hotel}</h5>
            <button variant="contained" className="btn btn-outline-light"  onClick={() => navigate(`${panama.masinformacion}`)} >Más Información</button>
            <p className="card-text">{panama.descripcion}</p>
          </div>
        </div>
        </div>  
        );
      })}
      
    </div>
   
</div>
  )
}

export default MAPpan