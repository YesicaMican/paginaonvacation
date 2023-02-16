import React from 'react'
import destinos from "./destinos.json"
function MAPGir() {
  return (
    <div className="container">
            <div className="row">
                {destinos.destinogirardot.map((girardot) => {
                    return (
                        <div className="col-sm-4 mt-2" key={girardot.hotel}>
                        <div className="card text-bg-dark">
                        <img src={girardot.imagen} className="" alt="..."/>
                        <div className="card-img-overlay">
                          <h5 className="card-title">{girardot.hotel}</h5>
                          <button variant="contained" className="btn btn-outline-light"><small>Más información</small></button>
                          <p className="card-text">{girardot.descripcion}</p>
                        </div>
                      </div>
                      </div>
                    );
                })}

            </div>

        </div>
    )
}

export default MAPGir

