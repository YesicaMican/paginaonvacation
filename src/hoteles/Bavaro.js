import React from 'react'

function Bavaro() {
    const [showMessage, setShowMessage] = useState(false);
  return (
    <div className="container">
      <br />
      <br />
      <h1>Hotel Grand Bavaro Princess</h1>
      <div className="container">
        <p>
          Siendo un hotel en Punta Cana de 5 estrellas con calidad e
          instalaciones de primer nivel, cuenta con 186 Tropical Deluxe, 124
          Family Room. Todas completamente equipadas, perfectas para familias
          con niños gracias al completo servicio y amplitud de las habitaciones.
          Además, podrás disfrutar de Wi-Fi gratuito básico en todas las áreas
          del hotel{" "}
        </p>
        <div className="row" style={{ display: "flex", alignItems: "center" }}>
          <div className="col-md-7">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1cqORRDvRfMiUqhaYDaGVvVQtw29MC29w"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=173ipG8BGNaqdCsKIRDf9DxQzHKKaaVir"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1T9AV2GigyrGCU17_6mg6F0aGLWPj07ET"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1N13zemfoM14i3Ov2LCMvB1AwfTtD9yE6"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://drive.google.com/uc?export=view&id=1QH5uUvd_jmHZhwpPCi9Gwoz-6sV8R5iy"
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
            <p>✅Tiquete aéreo ida y regreso</p>
            <p>✅Traslado Aeropuerto - hotel - Aeropuerto </p>
            <p>✅Alojamiento 4 días y 4 noches</p>
            <p>✅Alimentación (desayuno, almuerzo y cena buffet) </p>
            <p>✅Bebidas y cócteles Ilimitados habilitados en el bar </p>
            <p>✅Snacks</p>
            <p>✅Equipaje de 20 kg </p>
            <p>✅Asistencia médica. </p>
            <p>✅Seguro hotelero. </p>
            <p>✅Tour de compras, degustación de Ron y Chocolate </p>
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
          src="https://www.youtube.com/embed/xMRuO4XUiXs"
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
        <p> Bar Húmedo</p>
        <p> Sport bar </p>
        <p> Club para niños</p>
        <p> Gimnasio</p>
        <p> 2 Piscinas</p>
        <p> 10 restaurantes</p>
        <p>Deportes Acuáticos No Motorizados</p>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-6 reco">
          <h1 className="title">¿Dónde queda?</h1>
          <p>
            Playas de Bavaro, Bávaro, 23000 Punta Cana, República Dominicana
          </p>

          <h1 className="title">¿Qué servicios tiene mi habitación?</h1>
          <p>
            Internet WiFi, TV por cable, minibar, aire acondicionado, baño
            privado, closet, cajilla de seguridad
          </p>
          <h1 className="title">
            ¿Qué horarios tiene el check-in y check-out?
          </h1>
          <p> El check-in es a las 3:00 pm y check-out: 12:00 m. </p>
          <h1 className="title">¿Qué hay para hacer en el hotel?</h1>
          <p>
            Puedes disfrutar la piscina, el bar, gimnasio, canchas de tennis o
            servicios de spa con costo adicional.
          </p>
        </div>
        <div className="col-lg-6 reco">
          <h1 className="title">
            Servicios extras y atracciones con costo adicional
          </h1>
          <p>
            Isla Saona, Buggies en Punta Cana, Hacienda Park, Tour Santo
            Domingo, Nado con Delﬁnes, Safary Trouck, Coco Bongo Punta Cana
          </p>
          <h1 className="title">¿De qué categoría es el hotel?</h1>
          <p> Categoría 5 estrellas</p>
          <h1 className="title">¿Cuál es el horario del Bar?</h1>
          <p> 24 horas</p>
          <h1 className="title">¿Cuál es la gastronómia del hotel?</h1>
          <p>
            Desayuno: 7:00 a 11:00 hrs <br />
            Almuerzo: 13:00 a 15:00 hrs
            <br /> Cena: 18:30 a 22:00 hrs
          </p>
        </div>
    </div>
</div>
  )
}

export default Bavaro;
