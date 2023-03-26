import React from "react";
import BotonWS from "../BotonWS";
function Playablanca() {
  return (
    <div className="container">
    <BotonWS/>
      <h1>Hotel Playa Blanca</h1>
      <div className="container">
        <p>
          Playa Blanca Beach Resort. Ubicado en Coclé, provincia considerada
          actualmente el segundo destino turístico y de retiro más importante
          del país, nuestro resort está estratégicamente ubicado en la mejor
          playa del Pacíﬁco Panameño. Tiene la piscina de agua salada más grande
          de Centro América para ofrecerle una experiencia inolvidable en sus
          vacaciones en Panamá{" "}
        </p>
        <div className="row" style={{ display: "flex", alignItems: "center" }}>
          <div className="col-md-7">
            <div id="carouselExample" className="carousel slide ">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1xgJPylRkLmBl1Z92J9HcE_JHSl_JsGeZ"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1Rzg1vRDTrxhh0coH1njZ30bjxTZ8XI60"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1Zbn2GeaZfDv-owtX6azpK9drph1jgZ4V"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1ehgbcWdMnRmhcXVLpfDrzq3WmG0fCGHh"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1ojQDL4wzv79QDjLxoiU8Rn7AoC1dFwMu"
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
            <p>✅Tiquete aéreo ida y regreso hacia Panamá</p>
            <p>✅Traslado Aeropuerto - hotel - Aeropuerto </p>
            <p>✅Alojamiento 4 noches</p>
            <p>✅Alimentación (desayuno, almuerzo y cena buffet) </p>
            <p>✅Bebidas y cócteles Ilimitados habilitados en el bar </p>
            <p>✅Snacks</p>
            <p>✅Equipaje de 20 kg </p>
            <p>✅Asistencia médica. </p>
            <p>✅Seguro hotelero. </p>
            <p>
              ✅Tour Panorámico: Panamá la Vieja, Avenida Balboa y el Casco
              Antiguo{" "}
            </p>
            <p>
              {" "}
              <b>🔺 No incluye</b> <br />
              ❌Entrada a los sitios turísticos <br />❌ Transporte y
              alimentación no relacionada, Servicios receptivos{" "}
            </p>
          </div>
        </div>
      </div>

      <br />
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          src="https://www.youtube.com/embed/2IDfVUjYK4A"
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
        <p> Toboganes Gigantes</p>
        <p> Piscina de agua salada</p>
        <p> Gimnasio</p>
        <p> 2 Piscinas</p>
        <p> 8 restaurantes</p>
        <p> 6 bares y discos </p>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-6 reco">
          <h1 className="title">¿Dónde queda?</h1>
          <p>
            Se encuentra en el Panamá, Panamá. 115 Km Via Interamericana,
            Farallón (Playa Blanca), Rio Hato 8437 Panamá
          </p>

          <h1 className="title">¿Qué servicios tiene mi habitación?</h1>
          <p>
            Aire Acondicionado tipo Split, TV de 32” con cable, Teléfono de
            Marcación directa, Cafetera (HOV), Caja de Seguridad, Balcón o
            Terraza, Compartimiento para equipaje.
          </p>
          <h1 className="title">
            ¿Qué horarios tiene el check-in y check-out?
          </h1>
          <p> El check-in es a las 3:00 pm y check-out: 12:00 m. </p>
          <h1 className="title">¿Qué hay para hacer en el hotel?</h1>
          <p>
            Aeróbicos, clases de danza y estiramiento, kayak y botes de pedal,
            canchas de tenis, voleyball y futbol, trencito, paseo de la laguna,
            Kid's club, show nocturno para adultos y niños, salón de belleza
          </p>
        </div>
        <div className="col-lg-6 reco">
          <h1 className="title">
            Servicios extras y atracciones con costo adicional
          </h1>
          <p>
            Entrada Canal de Panamá, Tour Casco Viejo, Valle de Antón, Calzada
            de Amador, Ferrocarril de Panamá, Cinta Costera de la Ciudad de
            Panamá, Isla Tabora, Isla San Blas, Tour Comunidad Indígena Embera,
            Biomuseo, Cena con show folclórico, Bar Hooping en el casco viejo.
          </p>
          <h1 className="title">¿De qué categoría es el hotel?</h1>
          <p> Categoría turista superior</p>
          <h1 className="title">¿Cuál es el horario del Bar?</h1>
          <p>
            {" "}
            El horario del bar hasta las 02:00 am(Lobby Bar, Bar Piscina
            Familiar, Pool Bar, Sport Bar, Snack Bar, Plaza Bar)
          </p>
          <h1 className="title">¿Cuál es la gastronómia del hotel?</h1>
          <p>
            Canal Buffet - Comida internacional. Desayuno: 7:30 a 10:30 ·
            Almuerzo: 12:30 a 15:00 · Cena: 18:30 a 22:00. <br />
            <br /> <b>Restaurantes:</b> Al alquilar su apartamento en Playa
            Blanca Vacations, nuestros clientes tendrán diferentes opciones de
            Restaurantes (con pago) ubicados tanto en la Plaza Town Center, como
            en Playa Blanca Hotel y en la playa.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Playablanca;
