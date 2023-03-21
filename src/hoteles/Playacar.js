import React from "react";

function Playacar() {
  return (
    <div className="container">
      <br />
      <br />
      <h1>Hotel Playacar</h1>
      <div className="container">
        <p>
          Situado en la península Yucatán, a 3 km de Playa del Carmen, En la
          urbanización "Playacar" donde además se encuentran los hoteles Riu
          Palace México, Riu Palace Riviera Maya, Riu Yucatán y Riu Tequila.
          Ediﬁcio principal y ediﬁcios anexos de 2 plantas. El hotel se
          encuentra al borde de la playa.
        </p>
        <div className="row" style={{ display: "flex", alignItems: "center" }}>
          <div className="col-md-7">
            <div id="carouselExample" className="carousel slide ">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1A8X_ZVT1aBMf8BRiYMuXucmElzr9XEUw"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=14Nb5MrpRt5sG4HJwlVdnNkOZoxboNsiC"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1AP4zSCcqUEB58wMdk_kFauwctCuIWIQx"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1MO5DCCOgS5eLP62KKnbh_3ItHQWb-OrB"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1qAzWL4rjoXHGoJLz4HrM8KMUW1uhBo4h"
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
            <p>✅Tiquete aéreo ida y regreso hacia Cancún </p>
            <p>✅Traslado Aeropuerto - hotel - Aeropuerto </p>
            <p>✅Alojamiento 5 noches y 6 días </p>
            <p>✅Alimentación (desayuno, almuerzo y cena buffet) </p>
            <p>✅Bebidas y cócteles Ilimitados habilitados en el bar </p>
            <p>✅Snacks</p>
            <p>✅Equipaje de 20 kg </p>
            <p>✅Asistencia médica. </p>
            <p>✅Seguro hotelero. </p>
            <p>
              ✅Tour: visita mirador de playa delfines, Hacienda del tequila y
              al mercado 28{" "}
            </p>
            <p>
              {" "}
              <b>🔺 No incluye</b> <br />
              ❌Para Cancún impuesto de saneamiento ambiental en Cancún valor
              $1.36USD por noche por habitación. (pago en destino).Derecho de
              Aprovechamiento de Bienes de Dominio Público valor $10USD por
              persona. <br />❌ Entrada a los sitios turísticos, servicios,
              receptivos y alimentación no relacionados
            </p>
          </div>
        </div>
      </div>

      <br />
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          src="https://www.youtube.com/embed/gqzsMSeGwtU"
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
        <p> Piscina infantil con toboganes</p>
        <p> Restaurantes</p>
        <p> Gimnasio</p>
        <p> 3 Piscinas</p>
        <p> Club para niños “Riu Land”</p>
        <p> Bar</p>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-6 reco">
          <h1 className="title">¿Dónde queda?</h1>
          <p>
            Situado en la península Yucatán, a 3 km de Playa del Carmen, En la
            urbanización "Playacar". El hotel se encuentra al borde de la playa.
          </p>

          <h1 className="title">¿Qué servicios tiene mi habitación?</h1>
          <p>
            Las habitaciones disponen de: Baño con ducha y lavabo doble, Secador
            de pelo, WiFi gratuito, Aire acondicionado central, Ventilador de
            techo, Caja fuerte electrónica, TV de pantalla plana, Balcón o
            terraza.
          </p>
          <h1 className="title">
            ¿Qué horarios tiene el check-in y check-out?
          </h1>
          <p> El check-in es a las 4:00 pm y check-out: 11:00 am. </p>
          <h1 className="title">¿Qué hay para hacer en el hotel?</h1>
          <p>
            Amplio programa de entretenimiento para niños y adultos, Club para
            niños "RiuLand", Parque acuático "Splash Water World" con toboganes.
            (Acceso a partir de una altura mínima de 1,20m). Gimnasio, baño de
            vapor y jacuzzi (cortesía). El acceso al baño de vapor, al gimnasio
            y al jacuzzi está permitido a mayores de 18 años. Las prendas
            deportivas son obligatorias para utilizar el gimnasio.
          </p>
        </div>
        <div className="col-lg-6 reco">
          <h1 className="title">
            Servicios extras y atracciones con costo adicional
          </h1>
          <p>
            Campo de golf (5 km), escuela de buceo, "Renova" Spa con diferentes
            tratamientos, salón de belleza, peluquería y masaje, Visita al
            Parque Xcaret, Coco Bongo, Xoximilco. Los servicios adicionales que
            informe el hotel.{" "}
          </p>
          <h1 className="title">¿De qué categoría es el hotel?</h1>
          <p> Categoría Primera</p>
          <h1 className="title">¿Cuál es el horario del Bar?</h1>
          <p>
            {" "}
            Bebidas nacionales e internacionales las 24 horas.(En los lugares o
            bares informados por el hotel).
          </p>
          <h1 className="title">¿Cuál es la gastronómia del hotel?</h1>
          <p>
            •Desayuno: Buffets variados, cocina en vivo. Desayuno
            continental/snack <br /> • Almuerzo: Buffet con platos calientes y
            fríos y cocina en vivo Pizzas, pastas, ensaladas y postres variados.
            Grill en la piscina.
            <br />• Cena: Buffets y platos preparados "al momento". <br />{" "}
            <br /> •Noches especiales: Buffet temático, 3 veces por semana.Cenas
            opcionales: Restaurante "Kulinarium", a la carta. <br />
            •Restaurante asiático, buffet. •Steakhouse, a la carta. •Restaurante
            italiano, a la carta, buffet de entrantes y de postres. Para la cena
            se requiere vestimenta apropiada. Snacks las 24 horas.Los
            restaurantes tienen un horario especíﬁco para cada opción de comida
            y sujetos a la operación de cada restaurante
          </p>
        </div>
      </div>
    </div>
  );
}

export default Playacar;
