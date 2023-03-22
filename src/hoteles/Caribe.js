import React from 'react'

function Caribe() {
    return (
        <div className='justify'>
            <br />
            <br />
            <h1>Hotel Caribe</h1>
            <div className='justify'>
                <p >Este lujoso Hotel de elegante arquitectura colonial, es uno de los alojamientos más emblemáticos de la ciudad y considerado uno de los monumentos nacionales de Cartagena, está ubicado en Bocagrande.</p>
                <div style={{ display: "flex" }}>
                    <div id="carouselExample" className="carousel slide ">
                        <div className="carousel-inner">
                            <div className="carousel-item active" >
                                <img src="http://drive.google.com/uc?export=view&id=16g9COJgo3C8G2PTj0pCmrTdcLiXe3mh2" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://drive.google.com/uc?export=view&id=1PJVPxzpRnwScdFor-xtzPdR8Q-2ImQNv" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://drive.google.com/uc?export=view&id=1snmVbhRXMZBws257TbPuv_4OUdKociV0" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://drive.google.com/uc?export=view&id=1Ep2dzTVmdd6XeI_rJT82PVXoz0K1fSah" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://drive.google.com/uc?export=view&id=1iZLxxuiJnMcJXpZzXA3OOf-9Q25ISzFu" className="img-fluid" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className=' m-3'>
                        <h2 align='center' >Qué Incluye?</h2>
                        <p >✅Vuelo ida y regreso </p>
                        <p >✅Alojamiento 3 noches y 4 días </p>
                        <p >✅Desayunos</p>
                        <p >✅Equipaje de mano de 6kg (mochila)  </p>
                        <p >✅Asistencia médica. </p>
                        <p >✅Seguro hotelero.  </p>
                        <p > <b>🔺 No incluye</b> <br />❌ Almuerzos y cenas<br />
                            ❌Traslado Aeropuerto - hotel - Aeropuerto<br />
                            ❌ Bebidas alcoholicas en el bar</p>
                    </div>
                </div>
            </div>

      <br />
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          src="https://www.youtube.com/embed/MVa7Epawors"
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
        <p> Acceso directo a la playa</p>
        <p> Spa</p>
        <p> Salón de juegos</p>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-6 reco">
          <h1 className="title">¿Dónde queda?</h1>
          <p>
            Cra.t#2–87, Cartagena de Indias, Provincia de Cartagena,Bolívar –
            Colombia.
          </p>

                    <h1 className='title'>
                        ¿Qué servicios tiene mi habitación?
                    </h1>
                    <p> Internet WiFi, TV satelital, minibar, aire acondicionado, baño privado, closet, cajilla de seguridad, amenities en el baño y escritorio.</p>
                    <h1 className='title'>
                        ¿Qué horarios tiene el check-in y check-out?

                    </h1>
                    <p> El check-in es a las 5:00 pm y check-out: 12:00 m. </p>
                    <h1 className='title'>
                        ¿Qué hay para hacer en el hotel?


                    </h1>
                    <p> Puedes disfrutar de la pisicina, el spa, salón de juegos, los
                        jardines o puedes disfrutar de la playa ya que el hotel cuenta
                        con acceso directo. </p>
                </div>
                <div className="col-lg-6 reco">
                    <h1 className='title'>
                        Servicios extras y atracciones con costo adicional
                    </h1>
                    <p> Servicios extras y atracciones con pago adicional
                        Castillo de San Felipe de Barajas, Museo Histórico de
                        Cartagena Casa de la Inquisición, Torre del Reloj, Las
                        Bóvedas de Cartagena, Islas del Rosario, Tierra Bomba, Playa
                        Blanca.</p>
                    <h1 className='title'>
                        ¿De qué categoría es el hotel?
                    </h1>
                    <p> Categoría turista</p>
                    <h1 className='title'>
                        ¿Cuál es el horario del Bar?

                    </h1>
                    <p> Abre todos los días de 12:00 m a 10:00 pm.</p>
                    <h1 className='title'>
                        ¿Cuál es el horario del restaurante?

                    </h1>
                    <p>Cafetería India Catalina: Ofrece cafés, bebidas
                        refrescantes y comidas ligeras. Horario: 6:30 am a 10:30 pm.
                        <br />
                        Pedro de Heredia: Ofrece deliciosos platos locales e
                        internacionales.  Horario de 6:30 am a 10:30 pm
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Caribe;
