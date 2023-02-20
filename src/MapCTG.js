import React from 'react'
import destinos from "./destinos.json"
import { useNavigate } from "react-router-dom";
function MapCTG() {
  const navigate = useNavigate();
  return (
    <div className="container">
    <div className="row">
      {destinos.destinoctg.map((Cartagena) => {
        return (
          <div className="col-sm-4 mt-2" key={Cartagena.hotel}>
          <div className="card text-bg-dark">
          <img src={Cartagena.imagen} className="" alt="..."/>
          <div className="card-img-overlay">
            <h5 className="card-title">{Cartagena.hotel}</h5>
            <button variant="contained" className="btn btn-outline-light"  onClick={() => navigate(`${Cartagena.masinformacion}`)} >Más Información</button>
            <p className="card-text">{Cartagena.descripcion}</p>
          </div>
        </div>
        </div>
        );
      })}
      
    </div>
   
</div>
  )
}

export default MapCTG

