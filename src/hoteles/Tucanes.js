import React from 'react'
import BotonWS from "../BotonWS";
function Tucanes() {
    return (
        <div className='container'>
            <BotonWS />
            <h1>Hotel Campestre Tucanes</h1>
            <div className='container'>
                <p >El Hotel Campestre Tucanes en un lugar donde el servicio y la naturaleza se vuelven uno solo para que las palabras, vacaciones, descanso y tranquilidad tengan un verdadero signiﬁcado. </p>
                <div className="row" style={{ display: "flex", alignItems: "center" }}>
                    <div className="col-md-7">
                        <div id="carouselExample" className="carousel slide ">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="http://drive.google.com/uc?export=view&id=18Cb_ZgeEucl18ITLOls4Ij9v7_-Rc1B9" className="img-fluid" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="http://drive.google.com/uc?export=view&id=1cciA5yqSjLxFasOkCr4WVJXBrMPfzl8j" className="img-fluid" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="http://drive.google.com/uc?export=view&id=17X_Aks2DXbQmZVWrwiZM_5Ev0hWILc_N" className="img-fluid" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="http://drive.google.com/uc?export=view&id=1ZSL4lYFTyJYclWeJa28FIOdh5wCA1KNW" className="img-fluid" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="http://drive.google.com/uc?export=view&id=1RdDYL82qLUJcyq9p8EYrUBuxgMILCnCr" className="img-fluid" alt="..." />
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
                        <p >✅Alojamiento ( por noche por persona) </p>
                        <p >✅Desayuno, Almuerzo y cena</p>
                        <p >✅Asistencia médica. </p>
                        <p >✅Seguro hotelero.  </p>
                        <p > <b>🔺 No incluye</b> <br />
                            ❌Bebidas o licores en el bar<br />
                            ❌Traslado Aeropuerto - hotel - Aeropuerto<br />
                            ❌Tours en destino</p>
                    </div>
                </div>
            </div>

            <br />
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe src="https://www.youtube.com/embed/_HsMLfKbqxM"
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
                <p> Discoteca y mirador</p>
                <p> Turco y Jacuzzi</p>
                <p> Restaurante</p>
                <p> 2 Piscinas</p>
                <p> Zona de fogata y BBQ</p>
            </div>
            <br />
            <div className="row">
                <div className="col-lg-6 reco">
                    <h1 className='title'>
                        ¿Dónde queda?
                    </h1>
                    <p>El hotel esta ubicado en el km 8 Vía Armenia – Pueblo Tapao, cerca de los principales atractivos de la Región.
                    </p>

                    <h1 className='title'>
                        ¿Qué servicios tiene mi habitación?
                    </h1>
                    <p> Cajilla de seguridad, Nevera con minibar, Televisor 32”, ventilador, agua caliente.</p>
                    <h1 className='title'>
                        ¿Qué horarios tiene el check-in y check-out?

                    </h1>
                    <p> El check-in es a las 3:00 pm y check-out: 11:00 am. </p>
                    <h1 className='title'>
                        ¿Qué hay para hacer en el hotel?
                    </h1>
                    <p>Discoteca, zona de Juego para adultos y niños, cancha de mini fútbol, cancha voley playa, zona de fogata y BBQ. </p>
                </div>
                <div className="col-lg-6 reco">
                    <h1 className='title'>
                        Servicios extras y atracciones con costo adicional
                    </h1>
                    <p> Visitas al Mariposario, Recuca, Parque del Café, Panaca, Salento, Filandia, Parque de Los Arrieros.</p>
                    <h1 className='title'>
                        ¿De qué categoría es el hotel?
                    </h1>
                    <p> Categoría turista </p>
                    <h1 className='title'>
                        ¿Cuál es el horario del Bar?

                    </h1>
                    <p> Bar en la piscina principal de 11:00 am a 10:00 pm</p>
                    <h1 className='title'>
                        ¿Cuál es el horario del restaurante?

                    </h1>
                    <p>Desayuno 7:00 am - 9:00 am /  Almuerzo:  12:00 m - 2:00 pm. / Cena:  7:00 pm - 9:00 pm
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Tucanes
