import {React} from "react";
import destinos from "./destinos.json";
//import { useNavigate } from "react-router-dom";
  
function MapADZ() {
  //const navigate=useNavigate();
  return (
    <div className="container">
      <div className="row">
        {destinos.destinossanandres.map((sanandres) => {
          return (
            <div className="col-sm-4 m-2" key={sanandres.hotel}>
            <div className="card text-bg-dark">
            <img src={sanandres.imagen} className="" alt="..."/>
            <div className="card-img-overlay">
              <h5 className="card-title">{sanandres.hotel}</h5>
          <button variant="contained" className="btn btn-outline-light" ></button>
              <p className="card-text">{sanandres.descripcion}</p>
            </div>
          </div>
          </div>
          );
        })}
        
      </div>
     
  </div>
  );
}

export default MapADZ;
