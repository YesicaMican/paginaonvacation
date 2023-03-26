import React from "react";
import BotonWS from "../BotonWS";
export default function Coral() {
  return (
    <div className="container">
     <BotonWS/>
      <h1>Hotel Coral Flower</h1>
      <div className="container">
        <p>
          {" "}
          Hotel tipo turista, ubicado en pleno centro de la Isla, cerca de las
          playas principales de San Andrés.
        </p>
        <div className="row" style={{ display: "flex", alignItems: "center" }}>
          <div className="col-md-7">
            <div id="carouselExample" className="carousel slide ">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1ROU1KCOz3_od_mK91eWdFrm2Fd3Qb88a"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1i0RFp0DQZW695hT2ng6rOySVNKU437DK"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1wh9lqBnUdgxnAng_D7ffB0AFZrhdjMnY"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1m1zO2iV4kx6s7QChIVLd48sBdI22mquR"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1VgfzymM3CnWkDR_xJUc-9MLK5n0hVy2c"
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
          src="https://www.youtube.com/embed/Jc62U6X509o"
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
        <p> Restaurantes</p>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-6 reco">
          <h1 className="title">¿Dónde queda?</h1>
          <p>
            Desde el aeropuerto Gustavo Rojas Pinilla a 6 minutos en vehículo
            aproximadamente en la dirección AV. Costa Rica Centro Comercial
            Tropicana - Centro.
          </p>

          <h1 className="title">¿Qué servicios tiene mi habitación?</h1>
          <p>
            {" "}
            Tu habitación contará con Aire acondicionado, Televisor,Baño
            privado.
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
          <h1 className="title">Servicios extras y atracciones</h1>
          <p>
            {" "}
            Visita al Acuario, Cueva de Morgan, Hoyo Soplador, primera Iglesia
            Bautista, minicurso de buceo, vuelo sobre el mar de los siete
            colores en el Parasil, cabalgata en la playa o en la montaña, vuelta
            a la isla.
          </p>
          <h1 className="title">¿De qué categoría es el hotel?</h1>
          <p> Categoría turista.</p>
          <h1 className="title">¿Cuál es el horario del restaurante?</h1>
          <p> Desayuno 7:00 am - 09:45 am.</p>
        </div>
      </div>
    </div>
  );
}
