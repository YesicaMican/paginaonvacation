import React from 'react'
import { useState } from 'react';
function Dunamar() {
    const [showMessage, setShowMessage] = useState(false);
    return (
        <div className='justify'>
            <br />
            <br />
            <h1>Hotel Dunamar</h1>
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

export default Dunamar