import React from "react";
import BotonWS from "../BotonWS";
function Inn() {
  return (
    <div className="container">
      <BotonWS/>
      <h1>Hotel Holiday Inn Express</h1>
      <div className="container">
        <p>
          El hotel se encuentra ubicado a 7.6 kilómetros del Aeropuerto
          Internacional Rafael Núñez, sobre la avenida San Martín en la entrada
          tradicional sector turístico Bocagrande. Muy cerca de la ciudad
          amurallada y el centro histórico, ofreciendo además fácil acceso a la
          zona industrial y ﬁnanciera.
        </p>
        <div className="row" style={{ display: "flex", alignItems: "center" }}>
          <div className="col-md-7">
            <div id="carouselExample" className="carousel slide ">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1-nPwfCAH0O6aAXzy-caaPcHy90WM_-JE"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1lENwpS_k8KuIR3sUpQBLVZIXbg7ek2mC"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1C4_ZYUbc11Z-sAXNi9BJrdfRcCsvLAA4"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1olyOaCKq00GG8fzlH78PNHgnAdTxpfnc"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1gRgta3SoQ4UpXOAOF_Bb8TPs8Y-VqOsO"
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
            <p>✅Vuelo ida y regreso </p>
            <p>✅Alojamiento 3 noches y 4 días </p>
            <p>✅Desayunos</p>
            <p>✅Equipaje de mano de 6kg (mochila) </p>
            <p>✅Asistencia médica. </p>
            <p>✅Seguro hotelero. </p>
            <p>
              {" "}
              <b>🔺 No incluye</b> <br />❌ Almuerzos y cenas
              <br />
              ❌Traslado Aeropuerto - hotel - Aeropuerto
              <br />❌ Bebidas alcoholicas en el bar
            </p>
          </div>
        </div>
      </div>

      <br />
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          src="https://www.youtube.com/embed/PuDIdokx78Y"
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
        <p> Bar</p>
        <p> Restaurante</p>
        <p> Piscina</p>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-6 reco">
          <h1 className="title">¿Dónde queda?</h1>
          <p>Cra. 2 # 4-87, Bocagrande, Cartagena, Colombia.</p>

          <h1 className="title">¿Qué servicios tiene mi habitación?</h1>
          <p>
            {" "}
            Internet WiFi, TV satelital, minibar, aire acondicionado, baño
            privado, closet, cajilla de seguridad.
          </p>
          <h1 className="title">
            ¿Qué horarios tiene el check-in y check-out?
          </h1>
          <p> El check-in es a las 3:00 pm y check-out: 12:00 m. </p>
          <h1 className="title">¿Qué hay para hacer en el hotel?</h1>
          <p>
            {" "}
            Puedes disfrutar la piscina, el bar, o servicios de spa con costo
            adicional.{" "}
          </p>
        </div>
        <div className="col-lg-6 reco">
          <h1 className="title">
            Servicios extras y atracciones con costo adicional
          </h1>
          <p>
            {" "}
            Servicios extras y atracciones con pago adicional Castillo de San
            Felipe de Barajas, Museo Histórico de Cartagena Casa de la
            Inquisición, Torre del Reloj, Las Bóvedas de Cartagena, Islas del
            Rosario, Tierra Bomba, Playa Blanca.
          </p>
          <h1 className="title">¿De qué categoría es el hotel?</h1>
          <p> Categoría turista</p>
          <h1 className="title">¿Cuál es el horario del Bar?</h1>
          <p> Abre todos los días de 11:00 am a 8:30 pm.</p>
          <h1 className="title">¿Cuál es el horario del restaurante?</h1>
          <p>Está abierto para desayuno de 7:00 a 10:00 am.</p>
        </div>
      </div>
    </div>
  );
}

export default Inn;
