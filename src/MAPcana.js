import React from 'react'
import destinos from './destinos.json'
import { useNavigate } from "react-router-dom";
function MAPcana() {
    const navigate = useNavigate();
  return (
    <div className="container">
    <div className="row">
      {destinos.destinopuntacana.map((puntacana) => {
        return (
          <div className="col-sm-4 mt-2" key={puntacana.hotel}>
          <div className="card text-bg-dark">
          <img src={puntacana.imagen} className="" alt="..."/>
          <div className="card-img-overlay">
            <h5 className="card-title">{puntacana.hotel}</h5>
            <button variant="contained" className="btn btn-outline-light"  onClick={() => navigate(`${puntacana.masinformacion}`)} >Más Información</button>
            <p className="card-text">{puntacana.descripcion}</p>
          </div>
        </div>
        </div>  
        );
      })}
      
    </div>
   
</div>
  )
  
}

export default MAPcana