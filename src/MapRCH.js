import React from 'react'
import destinos from "./destinos.json"
function MapRCH() {
    return (
        <div className="container">
            <div className="row">
                {destinos.destinoguajira.map((guajira) => {
                    return (
                        <div className="col-sm-4 mt-2" key={guajira.hotel}>
                        <div className="card text-bg-dark">
                        <img src={guajira.imagen} className="" alt="..."/>
                        <div className="card-img-overlay">
                          <h5 className="card-title">{guajira.hotel}</h5>
                          <button variant="contained" className="btn btn-outline-light"><small>Más información</small></button>
                          <p className="card-text">{guajira.descripcion}</p>
                        </div>
                      </div>
                      </div>
                    );
                })}

            </div>

        </div>
    )
}

export default MapRCH
