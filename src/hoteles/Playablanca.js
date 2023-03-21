import React from 'react'
import { useState } from 'react';
function Playablanca() {
    const [showMessage, setShowMessage] = useState(false);
  return (
    <div className='justify'>
    <br />
    <br />
    <h1>Hotel Playa Blanca</h1>
    <div className='justify'>
        <p >Playa Blanca Beach Resort. Ubicado en Coclé, provincia considerada actualmente el segundo destino turístico y de retiro más importante del país, nuestro resort está estratégicamente ubicado en la mejor playa del Pacíﬁco Panameño. Tiene la piscina de agua salada más grande de Centro América para ofrecerle una experiencia inolvidable en sus vacaciones en Panamá  </p>
        <div style={{ display: "flex" }}>
            <div id="carouselExample" className="carousel slide ">
                <div className="carousel-inner">
                    <div className="carousel-item active" >
                        <img src="http://drive.google.com/uc?export=view&id=1xgJPylRkLmBl1Z92J9HcE_JHSl_JsGeZ" className="img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="http://drive.google.com/uc?export=view&id=1Rzg1vRDTrxhh0coH1njZ30bjxTZ8XI60" className="img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="http://drive.google.com/uc?export=view&id=1Zbn2GeaZfDv-owtX6azpK9drph1jgZ4V" className="img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="http://drive.google.com/uc?export=view&id=1ehgbcWdMnRmhcXVLpfDrzq3WmG0fCGHh" className="img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="http://drive.google.com/uc?export=view&id=1ojQDL4wzv79QDjLxoiU8Rn7AoC1dFwMu" className="img-fluid" alt="..." />
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
                    <p >✅Tiquete aéreo ida y regreso hacia Panamá</p>
                    <p >✅Traslado Aeropuerto - hotel - Aeropuerto </p>
                    <p >✅Alojamiento 4 noches</p>
                    <p >✅Alimentación (desayuno, almuerzo y cena buffet) </p>
                    <p >✅Bebidas y cócteles Ilimitados habilitados en el bar </p>
                    <p >✅Snacks</p>
                    <p >✅Equipaje de 20 kg </p>
                    <p >✅Asistencia médica. </p>
                    <p >✅Seguro hotelero.  </p>
                    <p >✅Tour Panorámico: Panamá la Vieja, Avenida Balboa y el Casco Antiguo </p>
                    <p  > <b>🔺 No incluye</b> <br />
                        ❌Entrada a los sitios turísticos <br />
                     ❌ Transporte y alimentación no relacionada, Servicios receptivos </p>
                </div>
            </div>
        </div>
    </div>

    <br />
    <iframe width="700" height="400" src="https://www.youtube.com/embed/2IDfVUjYK4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='video'></iframe>
    <br />
    <br />
    <div className='servicios'>
        <h2 className='title'>Que servicios ofrece el hotel?</h2>
        <br />
        <br />
        <p> Toboganes Gigantes</p>
        <p> Piscina de agua salada</p>
        <p> Gimnasio</p>
        <p> 2 Piscinas</p>
        <p> 8 restaurantes</p>
        <p> 6 bares y discos </p>
    </div>
    <br />
    <div className="row">
        <div className="col-lg-6 reco">
            <h1 className='title'>
                ¿Dónde queda?
            </h1>
            <p>Se encuentra en el Panamá, Panamá. 115 Km Via Interamericana, Farallón (Playa Blanca), Rio Hato 8437 Panamá
            </p>

            <h1 className='title'>
                ¿Qué servicios tiene mi habitación?
            </h1>
            <p>Aire Acondicionado tipo Split, TV de 32” con cable, Teléfono de Marcación directa, Cafetera (HOV), Caja de Seguridad, Balcón o Terraza, Compartimiento para equipaje.</p>
            <h1 className='title'>
                ¿Qué horarios tiene el check-in y check-out?

            </h1>
            <p> El check-in es a las 3:00 pm y check-out: 12:00 m. </p>
            <h1 className='title'>
                ¿Qué hay para hacer en el hotel?
            </h1>
            <p>Aeróbicos, clases de danza y estiramiento, kayak y botes de pedal, canchas de tenis, voleyball y futbol, trencito, paseo de
la laguna, Kid's club, show nocturno para adultos y niños, salón de belleza</p>
        </div>
        <div className="col-lg-6 reco">
            <h1 className='title'>
                Servicios extras y atracciones con costo adicional
            </h1>
            <p>Entrada Canal de Panamá, Tour Casco Viejo, Valle de Antón, Calzada de Amador, Ferrocarril de Panamá, Cinta Costera de la Ciudad de Panamá, Isla Tabora, Isla San Blas, Tour Comunidad Indígena Embera, Biomuseo, Cena con show folclórico, Bar Hooping en el casco viejo.</p>
            <h1 className='title'>
                ¿De qué categoría es el hotel?
            </h1>
            <p> Categoría turista superior</p>
            <h1 className='title'>
                ¿Cuál es el horario del Bar?

            </h1>
            <p> El horario del bar hasta las 02:00 am(Lobby Bar, Bar Piscina Familiar, Pool Bar, Sport Bar, Snack Bar, Plaza Bar)</p>
            <h1 className='title'>
                ¿Cuál es la gastronómia del hotel?

            </h1>
            <p>Canal Buffet - Comida internacional. Desayuno: 7:30 a 10:30 · Almuerzo: 12:30 a 15:00 · Cena: 18:30 a 22:00. <br /><br /> <b>Restaurantes:</b> Al alquilar su apartamento en Playa Blanca Vacations, nuestros clientes tendrán diferentes opciones de Restaurantes (con pago) ubicados tanto en la Plaza Town Center, como en Playa Blanca Hotel y en la playa.
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

export default Playablanca