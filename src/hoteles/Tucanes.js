import React from 'react'
import { useState } from 'react';
function Tucanes() {
    const [showMessage, setShowMessage] = useState(false);
  return (
    <div className='justify'>
            <br />
            <br />
            <h1>Hotel Campestre Tucanes</h1>
            <div className='justify'>
                <p >El Hotel Campestre Tucanes en un lugar donde el servicio y la naturaleza se vuelven uno solo para que las palabras, vacaciones, descanso y tranquilidad tengan un verdadero signiﬁcado. </p>
                <div style={{ display: "flex" }}>
                    <div id="carouselExample" className="carousel slide ">
                        <div className="carousel-inner">
                            <div className="carousel-item active" >
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
                    <div className=' m-3'>
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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/_HsMLfKbqxM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='video'></iframe>
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
            </div>
        </div>
  )
}

export default Tucanes
