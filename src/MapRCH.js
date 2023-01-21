import React from 'react'
import destinos from "./destinos.json"
function MapRCH() {
    return (
        <div className="container">
            <div className="row">
                {destinos.destinoguajira.map((guajira) => {
                    return (
                        <div className="col-sm-4" key={guajira.hotel}>
                            <div className="card text-center mt-4">

                                <img src={guajira.imagen} className="" alt="..." />
                                <h5 className="card-title">{guajira.hotel}</h5>
                                <p className="card-text ">{guajira.descripcion}</p>
                                <button variant="contained" className="btn btn-primary">
                                    <link rel="" type="" href="./hoteles/bluereef.js" />
                                    Mas información hotel {guajira.hotel}
                                </button>
                            </div>
                        </div>
                    );
                })}

            </div>

        </div>
    )
}

export default MapRCH
