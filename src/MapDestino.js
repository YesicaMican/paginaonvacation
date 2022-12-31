import React from "react";
import destinos from "./destinos.json";

function MapDestino() {
  return (
    <div>
      {destinos.destinossanandres.map((sanandres) => {
        return (
          <div className="container">
            <div className="col-sm-4 text-center">
                <div className="card mt-4 bg-dark b border-white" style={{ width: "18rem"}}>
                  <img
                    src={sanandres.imagen}
                    className="card-img-top"
                    width="450"
                  />
                  <div className="card-body">
                    <h5 className="card-title  text-light ">{sanandres.hotel}</h5>
                    <p className="card-text text-light">{sanandres.descripcion}</p>
                    <button variant="contained" className="btn btn-primary">
                      {" "}
                      Mas información
                    </button>
                  </div>
                </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MapDestino;
