import React from 'react'

function Nyx() {
  return (
    <div className='justify'>
            <br />
            <br />
            <h1>Hotel Nyx</h1>
            <div className='justify'>
                <p >Este hotel en Cancún - Costa Mujeres tiene un sinfín de servicios cuenta con una amplia oferta gastronómica, adicionalmente podrás disfrutar de los mejores programas de entretenimiento tanto diurnos como nocturnos, de música y shows en directo que harán que tus  vacaciones inolvidables. </p>
                <div style={{ display: "flex" }}>
                    <div id="carouselExample" className="carousel slide ">
                        <div className="carousel-inner">
                            <div className="carousel-item active" >
                                <img src="http://drive.google.com/uc?export=view&id=1RJ2DTtZvgnWyRdu4e9O-lyY4fZUyBhNg" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://drive.google.com/uc?export=view&id=1iBq-5RD6W3CgvA2XRlcj4YaLgFnhrNqk" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://drive.google.com/uc?export=view&id=1EfnZUdYCXLmj-knNOYl9h9BNqQKRtB97" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://drive.google.com/uc?export=view&id=1AR0gNvA4MlLRAxWadHLy7vWiU8j5h7aI" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://drive.google.com/uc?export=view&id=15Q6fNTteSU3DRG5WILqLH3E8eOtQF1-P" className="img-fluid" alt="..." />
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
                            <p >✅Tiquete aéreo ida y regreso hacia Cancún </p>
                            <p >✅Traslado Aeropuerto - hotel - Aeropuerto </p>
                            <p >✅Alojamiento 5 noches y 6 días </p>
                            <p >✅Alimentación (desayuno, almuerzo y cena buffet) </p>
                            <p >✅Bebidas y cócteles Ilimitados habilitados en el bar </p>
                            <p >✅Snacks</p>
                            <p >✅Equipaje de 20 kg </p>
                            <p >✅Asistencia médica. </p>
                            <p >✅Seguro hotelero.  </p>
                            <p >✅Tour: visita mirador de playa delfines, Hacienda del tequila y al mercado 28  </p>
                            <p  > <b>🔺 No incluye</b> <br />
                                ❌Para Cancún impuesto de saneamiento ambiental en Cancún valor $1.36USD por noche por habitación. (pago en destino).Derecho de Aprovechamiento de Bienes de Dominio Público valor $10USD por persona. <br />
                             ❌ Entrada a los sitios turísticos, servicios, receptivos y alimentación no relacionados</p>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/nmD6ULdjzaw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='video'></iframe>
            <br />
            <br />
            <div className='servicios'>
                <h2 className='title'>Que servicios ofrece el hotel?</h2>
                <br />
                <br />
                <p> Parque acuático "Splash Water World"</p>
                <p> Restaurantes</p>
                <p> Gimnasio</p>
                <p> 5 Piscinas</p>
                <p> Baño de vapor y Jacuzzi</p>
                <p> Bar</p>
            </div>
            <br />
            <div className="row">
                <div className="col-lg-6 reco">
                    <h1 className='title'>
                        ¿Dónde queda?
                    </h1>
                    <p>El hotel Riu Dunamar se encuentra ubicado al borde de una paradisíaca playa en Costa Mujeres, Quintana Roo, a unos 30 kilómetros de la zona hotelera de Cancún.
                    </p>

                    <h1 className='title'>
                        ¿Qué servicios tiene mi habitación?
                    </h1>
                    <p>Las habitaciones disponen de: Baño con ducha y lavabo doble, Secador de pelo, WiFi gratuito, Aire acondicionado central, Ventilador de techo, Caja fuerte electrónica, TV de pantalla plana, Balcón o terraza.</p>
                    <h1 className='title'>
                        ¿Qué horarios tiene el check-in y check-out?

                    </h1>
                    <p> El check-in es a las 4:00 pm y check-out: 11:00 am. </p>
                    <h1 className='title'>
                        ¿Qué hay para hacer en el hotel?
                    </h1>
                    <p>Amplio programa de entretenimiento para niños y adultos, Club para niños "RiuLand", Parque acuático "Splash Water World" con toboganes. (Acceso a partir de una altura mínima de 1,20m). Gimnasio, baño de vapor y jacuzzi (cortesía). El acceso al baño de vapor, al gimnasio y al jacuzzi está permitido a mayores de 18 años. Las prendas deportivas son obligatorias para utilizar el gimnasio.</p>
                </div>
                <div className="col-lg-6 reco">
                    <h1 className='title'>
                        Servicios extras y atracciones con costo adicional
                    </h1>
                    <p>Campo de golf (5 km), escuela de buceo, "Renova" Spa con diferentes tratamientos, salón de belleza, peluquería y masaje, Visita al Parque Xcaret, Coco Bongo, Xoximilco. Los servicios adicionales que informe el hotel. </p>
                    <h1 className='title'>
                        ¿De qué categoría es el hotel?
                    </h1>
                    <p> Categoría Primera</p>
                    <h1 className='title'>
                        ¿Cuál es el horario del Bar?

                    </h1>
                    <p> Bebidas nacionales e internacionales las 24 horas.(En los lugares o bares informados por el hotel).</p>
                    <h1 className='title'>
                        ¿Cuál es la gastronómia del hotel?

                    </h1>
                    <p>•Desayuno: Buffets variados, cocina en vivo.  Desayuno continental/snack <br /> • Almuerzo: Buffet con platos calientes y fríos y cocina en vivo Pizzas, pastas, ensaladas y postres variados. Grill en la piscina.<br />• Cena: Buffets y platos preparados "al momento". <br /> <br /> •Noches especiales: Buffet temático, 3 veces por semana.Cenas opcionales: Restaurante "Kulinarium", a la carta. <br />•Restaurante asiático, buffet. •Steakhouse, a la carta. •Restaurante italiano, a la carta, buffet de entrantes y de postres. Para la cena se requiere vestimenta apropiada. Snacks las 24 horas.Los restaurantes tienen un horario especíﬁco para cada opción de comida y sujetos a la operación de cada restaurante  
                    </p>
                </div>
            </div>
        </div>
  )
}

export default Nyx