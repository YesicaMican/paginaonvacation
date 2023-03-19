import Destino from "./Hooks/Destino";
import destinos from "./destinos.json";

function MapADZ() {
  return (
    <div className="container">
      <div className="row">
        {destinos.destinossanandres.map((sanandres) => {
          return <Destino hoteles={sanandres} efectoderecha={true} />;
        })}
      </div>
    </div>
  );
}

export default MapADZ;