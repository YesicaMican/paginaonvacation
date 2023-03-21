import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { React, useState, useRef, useEffect } from "react";

function Destino({hoteles,efectoderecha}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    x: isVisible ?  0 : efectoderecha ? -100 :100,
  });
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "-50px" }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }

    const curr = ref.current;
    return () => {
      if (curr) {
        observer.unobserve(curr);
      }
    };
  }, []);

  const navigate = useNavigate();

  return (
    <div className="col-sm-6 mt-2" key={hoteles.hotel}>
      <div className="miClase" ref={ref}>
        <animated.div style={props}>
          <div className="card text-bg-dark">
            <img src={hoteles.imagen} className="" alt="..." />
            <div className="card-img-overlay">
              <h5 className="card-title">{hoteles.hotel}</h5>
              <button
                variant="contained"
                className="btn btn-outline-light"
                onClick={() => navigate(`${hoteles.masinformacion}`)}
              >
                Más Información
              </button>
              <p className="card-text">{hoteles.descripcion}</p>
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
}

export default Destino;