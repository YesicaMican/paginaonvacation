import React from 'react'
import BotonWS from "../BotonWS";
export default function Tone() {
    return (
        <div className='container'>
            <BotonWS />
            <h1>Toné</h1>
            <div className='container'>
                <p > Un destino que todos debemos visitar, conocido por el mar de los 7 colores,
                    es un paraíso que cuenta con atracciones para todos los gustos. On
                    Vacation te ofrece un hotel para que
                    disfrutes de la isla con las
                    comodidades que necesitas para
                    relajarte durante las vacaciones.</p>
                <div className="row" style={{ display: "flex", alignItems: "center" }}>
                    <div className="col-md-7">
                        <div id="carouselExample" className="carousel slide ">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="http://drive.google.com/uc?export=view&id=1bFa-wXUSrbUhhnRR841n8D87yDuCw4sb"
                                        className="img-fluid"
                                        alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="http://drive.google.com/uc?export=view&id=1ys6o-UfPmThnJqgenpuBV08ijm5rpTtl"
                                        className="img-fluid"
                                        alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="http://drive.google.com/uc?export=view&id=1_pAGt_QF4Z4dHGGKVm8ZETh4m-qa1b3Q"
                                        className="img-fluid"
                                        alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="http://drive.google.com/uc?export=view&id=1JKmUSqknFnPp20s50G59ueGDRdHfIM1A"
                                        className="img-fluid"
                                        alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="http://drive.google.com/uc?export=view&id=1z4IzUuz8q28x9Q6BST1vHIduW8w_dibI"
                                        className="img-fluid"
                                        alt="..." />
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
                    </div>
                    <div className='col-md-5'>
                        <h2 align='center' >Qué Incluye?</h2>
                        <p >✅Vuelo ida y regreso </p>
                        <p >✅Alojamiento 4 días completos </p>
                        <p >✅Alimentación (desayuno y cena) </p>
                        <p >✅Equipaje de mano de 6kg (mochila)  </p>
                        <p> ✅Asistencia médica. </p>
                        <p >✅Seguro hotelero.  </p>
                        <p  > <b>🔺 No incluye</b> <br />❌ Tarjeta de turismo de ingreso a la isla<br />
                            ❌Traslado Aeropuerto - hotel - Aeropuerto<br />
                            ❌ Tours dentro de la tarifa ( tiene costo adicional) </p>
                    </div>
                </div>
            </div>

            <br />
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe src="https://www.youtube.com/embed/D1uZta7OI0Y"
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
            <br />
            <br />
            <div className='servicios'>
                <h2 className='title'>Que servicios ofrece el hotel?</h2>
                <br />
                <br />
                <p> Bar</p>
                <p> Restaurantes</p>
                <p> Piscina</p>
            </div>
            <br />
            <div className="row">
                <div className="col-lg-6 reco">
                    <h1 className='title'>
                        ¿Dónde queda?
                    </h1>
                    <p>Hotel tipo turista ubicado frente a la playa
                        principal de la isla de San Andrés en la vía
                        peatonal a tan solo 5 minutos del aeropuerto y 3
                        minutos de la zona comercial, rodeado de
                        restaurante y bares.
                    </p>

                    <h1 className='title'>
                        ¿Qué servicios tiene mi habitación?
                    </h1>
                    <p> Tu habitación contará con televisión con señal por cable, aire acondicionado, caja de seguridad, baño privado con ducha</p>
                    <h1 className='title'>
                        ¿Qué horarios tiene el check-in y check-out?

                    </h1>
                    <p> El check-in es a las 5:00 pm y check-out: 1:00 pm. Si viajas en vuelo nocturno la habitación se te entregará en el momento de la llegada al hotel.</p>
                </div>
                <div className="col-lg-6 reco">
                    <h1 className='title'>
                        Servicios extras y atracciones
                    </h1>
                    <p>   Visita al Acuario, Cueva de Morgan, Hoyo Soplador, primera Iglesia Bautista, minicurso de buceo, vuelo sobre el mar de los siete colores en el Parasil, cabalgata en la playa o en la montaña, vuelta a la isla.</p>
                    <h1 className='title'>
                        ¿De qué categoría es el hotel?
                    </h1>
                    <p>   Categoría turista.</p>
                    <h1 className='title'>
                        ¿Cuál es el horario del Bar?

                    </h1>
                    <p> El horario del bar 10:00 a.m. a 11:00 p.m.</p>
                </div>
            </div>
        </div>
    )
}
