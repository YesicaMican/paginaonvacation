import React from 'react'
import BotonWS from "../BotonWS";
function Princess() {
    return (
        <div className='container'>
            <BotonWS />
            <h1>Hotel Grand Princess</h1>
            <div className='container'>
                <p >Es la opción perfecta para unas vacaciones prácticas
                    y completas en el Caribe mexicano, sin preocuparte de nada.
                    El hotel ideal para familias, parejas, jóvenes, amigos y grupos que viajen en busca
                    de las mejores vacaciones en el Caribe</p>
                <div className="row" style={{ display: "flex", alignItems: "center" }}>
                    <div className="col-md-7">
                        <div id="carouselExample" className="carousel slide ">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="http://drive.google.com/uc?export=view&id=1nYzGGlp2g1zFvsOO4P-gO47Z2qK83Tn5"
                                        className="img-fluid"
                                        alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="http://drive.google.com/uc?export=view&id=1abwCyWME2adz2PV-EUsKOALTIWVbDauC"
                                        className="img-fluid" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="http://drive.google.com/uc?export=view&id=1-aUO-JtAtSf-SWUYtWA2NqZV9_1NRXkl"
                                        className="img-fluid" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="http://drive.google.com/uc?export=view&id=1EE0KMIPdpbh_xZC7-JEDOrUsA91xVKjd"
                                        className="img-fluid" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="http://drive.google.com/uc?export=view&id=1hUg53xvpNo3IhVgtzFQVCB3tOoOSDtzT"
                                        className="img-fluid" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev"
                                type="button" data-bs-target="#carouselExample"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next"
                                type="button" data-bs-target="#carouselExample"
                                data-bs-slide="next">

                                <span className="carousel-control-next-icon"
                                    aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <h2 align='center' >Qué Incluye?</h2>
                        <p >✅Tiquete aéreo ida y regreso hacia Cancún </p>
                        <p >✅Traslado Aeropuerto - hotel - Aeropuerto </p>
                        <p >✅Alojamiento 5 noches y 6 días </p>
                        <p >✅Alimentación (desayuno, almuerzo y cena buffet) </p>
                        <p >✅Bebidas y cócteles Ilimitados habilitados en el bar </p>
                        <p >✅Snacks</p>
                        <p >✅Equipaje de 20 kg </p>
                        <p >✅Asistencia médica. </p>
                        <p >✅Seguro hotelero.  </p>
                        <p >✅Tour: visita mirador de playa delfines, Hacienda del tequila y al mercado 28 {" "} </p>
                        <p  > {" "}
                            <b>🔺 No incluye</b> <br />
                            ❌Para Cancún impuesto de saneamiento ambiental en Cancún valor $1.36USD por noche por habitación. (pago en destino).Derecho de Aprovechamiento de Bienes de Dominio Público valor $10USD por persona. <br />
                            <br />❌ Entrada a los sitios turísticos, servicios, receptivos y alimentación no relacionados</p>
                    </div>
                </div>
            </div>

            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>

                <iframe src="https://www.youtube.com/embed/pGF66m5BsHQ"
                    title="YouTube video player"
                    frameborder="0"
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
            <div className='servicios'>
                <h2 className='title'>Que servicios ofrece el hotel?</h2>
                <br />
                <br />
                <p> Deportes acuáticos no motorizados</p>
                <p> Club de niños</p>
                <p> Restaurantes</p>
                <p> Discoteca</p>
                <p> Piscinas</p>
                <p> Cancha de tenis</p>
                <p> Bar</p>
            </div>
            <br />
            <div className="row">
                <div className="col-lg-6 reco">
                    <h1 className='title'>
                        ¿Dónde queda?
                    </h1>
                    <p>Se encuentra enclavado en el emplazamiento ideal, junto a una impresionante playa de arenas blancas en la Riviera Maya, próximo a las principales atracciones turísticas y lugares de interés de la región, ubicado en prolongación 5ta avenida Mza 20 Lote 006 Playa del Carmen Quintana Roo 7771.
                    </p>

                    <h1 className='title'>
                        ¿Qué servicios tiene mi habitación?
                    </h1>
                    <p>Habitación con 1 cama king o dos camas doble, sofá, baño con ducha, secador de pelo, caja de seguridad, aire acondicionado y ventilador de techo, cafetera eléctrica, televsior, mini bar (agua, refrescos, y cerveza), balcón/terraza y tina de hidromasajes.</p>
                    <h1 className='title'>
                        ¿Qué horarios tiene el check-in y check-out?

                    </h1>
                    <p> El check-in es a las 3:00 pm y check-out: 12:00 m. </p>
                    <h1 className='title'>
                        ¿Qué hay para hacer en el hotel?
                    </h1>
                    <p>Piscina para adultos y niños, algunas con tinas de hidromasajes en el interior, actividades organizadas durante el día y entretenimiento nocturno en el teatro Princess, discoteca Areito, todos los miercoles en las noches contaras con un expecial de mariachis, práctica de tenis o paddle, basquetbol.</p>
                </div>
                <div className="col-lg-6 reco">
                    <h1 className='title'>
                        Servicios extras y atracciones con costo adicional
                    </h1>
                    <p>Spa, centro médico, centro de negocios, tiendas, servicio a la habitación, servicio de niñera, lavandería, llamadas nacionales e internacionales {" "}</p>
                    <h1 className='title'>
                        ¿De qué categoría es el hotel?
                    </h1>
                    <p> Categoría 5 estrellas</p>
                    <h1 className='title'>
                        ¿Cuál es el horario del Bar?

                    </h1>
                    <p>  {" "} Desde las 09:00 hasta las 00:00. (Lobby)Contamos con un sport bar con comida tipo snack y bebida 24 horas.</p>
                    <h1 className='title'>
                        ¿Cuál es el horario del restaurante?

                    </h1>
                    <p>Desayuno: De 07:00 a 10:30 • Almuerzo: De 12:00 a 15:00 • Cena: De 18:00 a 23:00. <br></br>Horario de los restaurantes a la carta de 18:00 a 22:00.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Princess