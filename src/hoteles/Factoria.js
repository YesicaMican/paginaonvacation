import React from "react";

function Factoria() {
  return (
    <div className="container">
      <br />
      <br />
      <h1>Hotel Casa la Factoria</h1>
      <div className="container">
        <p>
          Vive una estadía inolvidable en el corazón de Cartagena en Hotel Casa
          La Factoria by Faranda Boutique, miembro de Radisson Individuals. Un
          hito restaurado del siglo XVI ubicado a dos cuadras de la Plaza de
          Santo Domingo, nuestro hotel lo ubica a pasos de la Iglesia de Santo
          Domingo y a solo 10 minutos a pie del Museo del Oro Zenú.
        </p>
        <div className="row" style={{ display: "flex", alignItems: "center" }}>
          <div className="col-md-7">
            <div id="carouselExample" className="carousel slide ">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="http://drive.google.com/uc?export=view&id=17r3ro6IBHGLw5TGrvpUsyxb-j4JVQlmD"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1EySZFmp7pUkk9lbA0Biz9NjBPDbWBVtz"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1Z01nmsBiWCG2aWzos-_s_dnpYm0NLv4g"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=15Pz9j_m_Y8GOiaO7ZCBAMyxyddqWefQN"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1x5vTqP2xU7KGPiiXk1vwWtMK_WMXIcCi"
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
          src="https://www.youtube.com/embed/gKO8Y1nHlE4"
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
        <p> Jacuzzi subterraneo</p>
        <p> Bar</p>
        <p> Restaurante</p>
        <p> Piscina</p>
        <p> Jardines</p>
        <p> Terraza</p>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-6 reco">
          <h1 className="title">¿Dónde queda?</h1>
          <p>
            Centro, Carrera 3a #36–13 Calle de la Factoría, Cartagena, Colombia.
          </p>

          <h1 className="title">¿Qué servicios tiene mi habitación?</h1>
          <p>
            {" "}
            Internet WiFi, TV satelital, minibar, aire acondicionado, baño
            privado, closet, cajilla de seguridad.
          </p>
          <h1 className="title">
            ¿Qué horarios tiene el check-in y check-out?
          </h1>
          <p> El check-in es a las 3:00 pm y check-out: 1:00 pm. </p>
          <h1 className="title">¿Qué hay para hacer en el hotel?</h1>
          <p>
            {" "}
            Puedes disfrutar de los jardines del hotel, la pisicina, el jacuzzi
            subterráneo y la terraza.{" "}
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
          <p>
            {" "}
            PinkDolphin Cocktail Bar Abre todos los días de 7:00 am a 11:00 pm.
          </p>
          <h1 className="title">¿Cuál es el horario del restaurante?</h1>
          <p>
            El restaurante Calendaria está abierto para desayuno de 7:00 a 10:00
            am y desde las 12:00 m a 11:00 pm para almuerzo y cena.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Factoria;
