import { React, useState, useRef, useEffect } from "react";
import destinos from "./destinos.json";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function MapRCH() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : -50,
  });
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "-50px" }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        {destinos.destinoguajira.map((guajira) => {
          return (
            <div className="col-sm-4 mt-2" key={guajira.hotel}>
              <div className="miClase" ref={ref}>
                <animated.div style={props}>
                  <div className="card text-bg-dark">
                    <img src={guajira.imagen} className="" alt="..." />
                    <div className="card-img-overlay">
                      <h5 className="card-title">{guajira.hotel}</h5>
                      <button
                        variant="contained"
                        className="btn btn-outline-light"
                        onClick={() => navigate(`${guajira.masinformacion}`)}
                      >
                        Más Información
                      </button>
                      <p className="card-text">{guajira.descripcion}</p>
                    </div>
                  </div>
                </animated.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MapRCH;
