import React from "react";

function Bluecove() {
  return (
    <div className="container">
      <br />
      <br />
      <h1>Blue Cove</h1>
      <div className="container">
        <p>
          {" "}
          Hotel tipo turista ubicado en la Ensenada del Cove, en la zona rocosa
          de la isla, lugar óptimo para caretear y bucear donde se encuentran
          las piscinas naturales
        </p>

        <div className="row" style={{ display: "flex", alignItems: "center" }}>
          <div className="col-md-7">
            <div id="carouselExample" className="carousel slide ">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1qLe9DG3w1KLZEaqbOEisEl3dUel_HIIQ"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1JqnFHQPOMsvy0JOhEjiTOcWpgfguV5fo"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1HYw9ZFI01zQO5fp77JPdKtAA6rjz4zqi"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=11t-J367NDN9xJ8ptdn-e3yfbOxOn5nXT"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1-QpLcXSf6mNtX3xbzLrJuc0gnxennR0a"
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
            <p>✅Alimentación (desayuno, almuerzo y cena buffet) </p>
            <p>✅Bebidas y cócteles Ilimitados habilitados en el bar </p>
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
          src="https://www.youtube.com/embed/YojMLga6oJY"
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
        <p> Recepción 24 horas</p>
        <p> Bar</p>
        <p> Restaurante</p>
        <p> Piscina</p>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-6 reco">
          <h1 className="title">¿Dónde queda?</h1>
          <p>
            Desde el aeropuerto Gustavo Rojas Pinilla a 5 minutos en vehículo
            aproximadamente y desde el centro de San Andrés a 3 a 5 minutos en
            vehículo aproximadamente.
          </p>

          <h1 className="title">¿Qué servicios tiene mi habitación?</h1>
          <p>
            {" "}
            Tu habitación contará con televisión con señal por cable, aire
            acondicionado, caja de seguridad, baño privado con ducha, algunas
            habitaciones tienen vista parcial al mar.
          </p>
          <h1 className="title">¿Cuál es el horario del restaurante?</h1>
          <p>
            Desayuno 7:00 am -10:00 am. Almuerzo 12:00 pm - 02:45 pm. Cena 6:00
            pm a 9:00 pm.
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
      </div>
    </div>
  );
}

export default Bluecove;
