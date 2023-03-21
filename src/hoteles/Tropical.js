import React from 'react'
import { useState } from 'react';
function Tropical() {
    const [showMessage, setShowMessage] = useState(false);
    return (
        <div className='justify'>
            <br />
            <br />
            <h1>Hotel Tropical Deluxe Princess</h1>
            <div className='justify'>
                <p >El Hotel Tropical Deluxe Princess se funde con la belleza incomparable de las Playas de Bávaro situadas en la provincia de Altagracia en la República Dominicana. Situándose a 25 km del aeropuerto de Punta Cana, el resort está rodeado de un espléndido palmeral y se ubica en primera línea de playa, convirtiéndose en un lugar ideal para unas felices vacaciones en familia en uno de los mejores hoteles vacacionales en Punta Cana</p>
                <div style={{ display: "flex" }}>
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active" >
                                <img src="http://drive.google.com/uc?export=view&id=1KxDJNiCOkeHqtIcnm86fUUD3UpyNx6jL" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://drive.google.com/uc?export=view&id=1_udWUmkrvrDMNGENL3_pC8Q8lt-07d3g" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://drive.google.com/uc?export=view&id=1YzXU1Li53bZM0RN57aFIBz92Z1weQwT6" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://drive.google.com/uc?export=view&id=19yryytVps_vqPJ4zZhyhZJrxKlNvTPF7" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://drive.google.com/uc?export=view&id=1o43_6ytqVgoGgEIzvyxLna8F6XkX44NX" className="img-fluid" alt="..." />
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
                    <div className='col-lg-6'>
                        <div className='m-3'>

                            <h2 align='center' >Qué Incluye?</h2>
                            <p >✅Tiquete aéreo ida y regreso</p>
                            <p >✅Traslado Aeropuerto - hotel - Aeropuerto </p>
                            <p >✅Alojamiento 4 días y 4 noches</p>
                            <p >✅Alimentación (desayuno, almuerzo y cena buffet) </p>
                            <p >✅Bebidas y cócteles Ilimitados habilitados en el bar </p>
                            <p >✅Snacks</p>
                            <p >✅Equipaje de 20 kg </p>
                            <p >✅Asistencia médica. </p>
                            <p >✅Seguro hotelero.  </p>
                            <p >✅Tour de compras, degustación de Ron y Chocolate </p>
                            <p  > <b>🔺 No incluye</b> <br />
                                ❌Entrada a los sitios turísticos <br />
                                ❌ Transporte y alimentación no relacionada, Servicios receptivos </p>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <iframe width="700" height="400" src="https://www.youtube.com/embed/_ScTs_YDZsw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='video'></iframe>
            <br />
            <br />
            <div className='servicios'>
                <h2 className='title'>Que servicios ofrece el hotel?</h2>
                <br />
                <br />
                <p> Heladería</p>
                <p> Club para niños</p>
                <p> Gimnasio</p>
                <p> 3 Piscinas</p>
                <p> 7 restaurantes</p>
                <p> 9 bares </p>
            </div>
            <br />
            <div className="row">
                <div className="col-lg-6 reco">
                    <h1 className='title'>
                        ¿Dónde queda?
                    </h1>
                    <p>Playas de Bavaro, Bávaro, 23000 Punta Cana, República Dominicana
                    </p>

                    <h1 className='title'>
                        ¿Qué servicios tiene mi habitación?
                    </h1>
                    <p>Internet WiFi, TV por cable, minibar, aire acondicionado, baño privado, closet, cajilla de seguridad</p>
                    <h1 className='title'>
                        ¿Qué horarios tiene el check-in y check-out?

                    </h1>
                    <p> El check-in es a las 3:00 pm y check-out: 12:00 m. </p>
                    <h1 className='title'>
                        ¿Qué hay para hacer en el hotel?
                    </h1>
                    <p>Puedes disfrutar la piscina, el bar, gimnasio, canchas de tennis o servicios de spa con costo adicional.</p>
                </div>
                <div className="col-lg-6 reco">
                    <h1 className='title'>
                        Servicios extras y atracciones con costo adicional
                    </h1>
                    <p>Isla Saona, Buggies en Punta Cana, Hacienda Park, Tour Santo Domingo, Nado con Delﬁnes, Safary Trouck, Coco Bongo Punta Cana</p>
                    <h1 className='title'>
                        ¿De qué categoría es el hotel?
                    </h1>
                    <p> Categoría 5 estrellas</p>
                    <h1 className='title'>
                        ¿Cuál es el horario del Bar?

                    </h1>
                    <p> 24 horas</p>
                    <h1 className='title'>
                        ¿Cuál es la gastronómia del hotel?

                    </h1>
                    <p>Desayuno: 7:00 a 11:00 hrs <br />Almuerzo: 13:00 a 15:00 hrs<br /> Cena: 18:30 a 22:00 hrs
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

export default Tropical