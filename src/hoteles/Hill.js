import React from "react";

export default function Hill() {
  return (
    <div className="container">
      <br />
      <br />
      <h1>Coral Flower</h1>
      <div className="container">
        <p> Hotel tipo turista, ubicado a 20 minutos del aeropuerto.</p>
        <div className="row" style={{ display: "flex", alignItems: "center" }}>
          <div className="col-md-7">
            <div id="carouselExample" className="carousel slide ">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1HF9iB-HwX8hVp55bsDtnylvm05A2Pkla"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1tVFtV6-T-pcjBLvJI3dzsROTYUJcjuMj"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1FcGZTWZANOx90U83vCSlHxthHyzL98UF"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1tlRfg0LG0JbP5WCMM6O3itZoVsYa676H"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1DWGn4GdRtkF8TXSSPUw_wMwD58vapu2D"
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
            <p>✅Alojamiento 4 días completos </p>
            <p>✅Desayuno </p>
            <p>✅Equipaje de mano de 6kg (mochila) </p>
            <p>✅Asistencia médica. </p>
            <p>✅Seguro hotelero. </p>
            <p>
              {" "}
              <b>🔺 No incluye</b> <br />❌ Tarjeta de turismo de ingreso a la
              isla
              <br />
              ❌Traslado Aeropuerto - hotel - Aeropuerto
              <br />❌ Tours dentro de la tarifa ( tiene costo adicional){" "}
            </p>
          </div>
        </div>
      </div>

      <br />
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          src="https://www.youtube.com/embed/axAwxgwgn2s"
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
          <p>
            Ubicado en el sector de la loma frente a la primera iglesia
            Bautista, a tan solo 20 minutos del aeropuerto y a 10 minutos del
            centro.
          </p>

          <h1 className="title">¿Qué servicios tiene mi habitación?</h1>
          <p>
            {" "}
            Tu habitación contará con Aire acondicionado, Televisor,Baño privado
            con ducha
          </p>
          <h1 className="title">
            ¿Qué horarios tiene el check-in y check-out?
          </h1>
          <p>
            {" "}
            El check-in es a las 5:00 pm y check-out: 1:00 pm. Si viajas en
            vuelo nocturno la habitación se te entregará en el momento de la
            llegada al hotel.
          </p>
        </div>
        <div className="col-lg-6 reco">
          <h1 className="title">Servicios adicionales</h1>
          <p>
            {" "}
            El hotel cuenta con dos circuitos de transporte del Hotel Magic Hill
            al Hotel Tower (bajo reserva) 8:30 am (Magic - Tower), 7:00 pm
            (Tower - Magic), 7:30 pm (Magic - Tower).
          </p>
          <h1 className="title">¿De qué categoría es el hotel?</h1>
          <p> Categoría turista.</p>
          <h1 className="title">¿Cuál es el horario del restaurante?</h1>
          <p> Desayuno 7:00 am - 9:30 am // Cena ligera 6:30 pm - 9:00 pm</p>
        </div>
      </div>
    </div>
  );
}
