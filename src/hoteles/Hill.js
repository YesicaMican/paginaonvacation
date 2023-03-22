<<<<<<< HEAD
import React from 'react'
import { useState } from 'react';
 function Hill() {
    const [showMessage, setShowMessage] = useState(false);
=======
import React from "react";

export default function Hill() {
>>>>>>> 6ac2ff0d988dd1a6c826457d56889126d4b8ae37
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
<<<<<<< HEAD
        <div className="whatsapp-content" style={{ alignItems: "initial" }}>
          <div className=" bg-dark m-2 divclic" style={{ width: "150px", height: "auto" }}>
            <h4 className=" text-bg-light clic text-center m-2" hidden={!showMessage} >Estás a un click de tus mejores vacaciones</h4>
          </div>
          <a
            className="js-whatsapp-btn whatsapp-btn"
            href="https://wa.me/573153201677"
            target="_blank" rel="noreferrer"
            style={{ justifyItems: "left" }}
            onMouseEnter={() => {
              setShowMessage(true);
            }}
            onMouseLeave={() => {
              setShowMessage(false);
            }}>
            <svg className="whatsapp-btn-svg" viewBox="0 0 32 32">
              <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"></path>
            </svg>
          </a>

        </div>
=======
      </div>
>>>>>>> 6ac2ff0d988dd1a6c826457d56889126d4b8ae37
    </div>
  );
}
export default Hill