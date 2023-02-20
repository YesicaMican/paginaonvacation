import React from 'react'
import destinos from "./destinos.json"
import { useNavigate } from "react-router-dom";
function MAPArm() {
  const navigate = useNavigate();
  return (
    <div className="container">
            <div className="row">
                {destinos.destinoeje.map((eje) => {
                    return (
                        <div className="col-sm-4 mt-2" key={eje.hotel}>
                        <div className="card text-bg-dark">
                        <img src={eje.imagen} className="" alt="..."/>
                        <div className="card-img-overlay">
                          <h5 className="card-title">{eje.hotel}</h5>
                          <button variant="contained" className="btn btn-outline-light"  onClick={() => navigate(`${eje.masinformacion}`)} >Más Información</button>
                          <p className="card-text">{eje.descripcion}</p>
                        </div>
                      </div>
                      </div>
                    );
                })}

            </div>

        </div>
    )
}

export default MAPArm