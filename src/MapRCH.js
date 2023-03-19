import destinos from "./destinos.json";
import Destino from "./Hooks/Destino";

function MapRCH() {
  return (
    <div className="container">
      <div className="row">
        {destinos.destinoeje.map((Des) => {
          return <Destino hoteles={Des} efectoderecha={false} />;
        })}
      </div>
    </div>
  );
}

export default MapRCH;
