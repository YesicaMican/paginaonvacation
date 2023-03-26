import React from "react";
import BotonWS from "../BotonWS";
function Girardot() {
  return (
    <div className="container">
       <BotonWS/>
      <h1>Hotel Girardot Resort</h1>
      <div className="container">
        <p>
          Hotel rodeado de naturaleza y muchas posibilidades de diversión y
          descanso.Nuestro hotel cuenta con servicio Pet Friendly*
        </p>
        <div className="row" style={{ display: "flex", alignItems: "center" }}>
          <div className="col-md-7">
            <div id="carouselExample" className="carousel slide ">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1kll0spc4OIeXt-1wnk6wYOcAnv_4gXPT"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1GTcvHhTk1AIXdPbbBpRxQ9SeyrGBMdqs"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1n_P4HzP0dDH0QZ0oAcyy_oUKp414oYv6"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1iNuwvrbPTK613k-YBtQx_ATQvMLTPVk8"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1NvmrXWuQWhFAKxfO-PJydIjx1fXF7UdL"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-md-5">
            <h2 align="center">Qué Incluye?</h2>
            <p>✅Alojamiento por noche por persona</p>
            <p>✅Desayuno, almuerzo y cena buffet</p>
            <p>✅Asistencia médica. </p>
            <p>✅Seguro hotelero. </p>
            <br />
            <p>
              <b>
                En cuanto a las bebidas ilimitadas o no en el bar, se gestiona
                con el asesor
              </b>
            </p>
            <p>
              {" "}
              <b>🔺 No incluye</b> <br />
              ❌Traslados
              <br />
            </p>
          </div>
        </div>
      </div>

      <br />
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          src="https://www.youtube.com/embed/pOjPX3cEx6o"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
      <br />
      <br />
      <div className="servicios">
        <h2 className="title">Que servicios ofrece el hotel?</h2>
        <br />
        <br />
        <p> Simulador de surf</p>
        <p> Sauna</p>
        <p> Restaurante</p>
        <p> Piscinas</p>
        <p> Zona de juegos</p>
        <p> Bar</p>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-6 reco">
          <h1 className="title">¿Dónde queda?</h1>
          <p>
            El hotel Girardot Resort queda 1,7 km del centro de la ciudad de
            Girardot Via Ricaurte, Cundinamarca.
          </p>

          <h1 className="title">¿Qué servicios tiene mi habitación?</h1>
          <p>
            Tu habitación contará con televisor, aire acondicionado, baño
            privado, cajilla de seguridad.
          </p>
          <h1 className="title">
            ¿Qué horarios tiene el check-in y check-out?
          </h1>
          <p> El check-in es a las 3:00 pm y check-out: 01:00 pm. </p>
          <h1 className="title">¿Qué hay para hacer en el hotel?</h1>
          <p>
            Dos piscinas, sauna, zona de juegos. Servicio de Pet Friendly con
            costo adicional.{" "}
          </p>
        </div>
        <div className="col-lg-6 reco">
          <h1 className="title">
            Servicios extras y atracciones con costo adicional
          </h1>
          <p> Simulador de surf</p>
          <h1 className="title">¿De qué categoría es el hotel?</h1>
          <p> Categoría turista </p>
          <h1 className="title">¿Cuál es el horario del Bar?</h1>
          <p> De 11:00 a 23:00 Ofrece licores nacionales.</p>
          <h1 className="title">¿Cuál es el horario del restaurante?</h1>
          <p>
            Desayuno de 7:00 am - 9:45 am, Almuerzo de 12:00 m a 02:30 pm, Cena
            de 07:00 pm a 09:45 pm.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Girardot;
