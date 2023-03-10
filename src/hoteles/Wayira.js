import React from 'react'

function Wayira() {
    return (
        <div className='justify'>
            <br />
            <br />
            <h1>Wayira Beach</h1>
            <div className='justify'>
                <p >Ubicado sobre la playa Mayapo el Hotel On Vacation Wayira es el lugar perfecto para vivir el encanto de la Guajira. El hotel se encuentra ubicado a tan solo 232 mts. de la playa, a 30 minutos del aeropuerto de Riohacha y a 2 horas de Santa Marta. </p>
                <div style={{ display: "flex" }}>
                    <div id="carouselExample" className="carousel slide ">
                        <div className="carousel-inner">
                            <div className="carousel-item active" >
                                <img src="http://drive.google.com/uc?export=view&id=10QHIRPYZDV7GQnp44lPX9PwzQs4Sd5BS" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://drive.google.com/uc?export=view&id=1z0cVuhyj69x7l_CGGRkKIG39YiEcfzOh" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://drive.google.com/uc?export=view&id=1z2CEmylKvIZpArSBFsw0Y7UiGI8XK5xt" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://drive.google.com/uc?export=view&id=1lq8hZ3SLwwvOg10kAPXXqeHDt-Ec_UrX" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://drive.google.com/uc?export=view&id=1alfHh4sUIIRzRjguPOBwxWFFxR5uAV5Z" className="img-fluid" alt="..." />
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
                        <h2 align='center' >Qu?? Incluye?</h2>
                        <p >???Vuelo ida y regreso </p>
                        <p >???Alojamiento 5 d??as y 4 noches </p>
                        <p >???Desayuno, almuerzo y cena estilo buffet</p>
                        <p >???Equipaje de mano de 6kg (mochila)  </p>
                        <p >???Asistencia m??dica. </p>
                        <p >???Seguro hotelero.  </p>
                        <p > <b>???? No incluye</b> <br />
                            ??? Tours dentro de la tarifa ( tiene costo adicional) <br />
                            ??? Bebidas alcoholicas en el bar</p>
                    </div>
                </div>
            </div>

            <br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/oD2uECZB0-c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='video'></iframe>
            <br />
            <br />
            <div className='servicios'>
                <h2 className='title'>Que servicios ofrece el hotel?</h2>
                <br />
                <br />
                <p> Recepci??n 24 horas</p>
                <p> Bar</p>
                <p> Restaurante Buffet</p>
                <p> Piscina</p>
                <p> Parqueadero</p>
                <p> Mini market</p>
                <p> Restaurante Isashii (con costo adicional)</p>
                <p> 3 jacuzzis</p>
            </div>
            <br />
            <div className="row">
                <div className="col-lg-6 reco">
                    <h1 className='title'>
                        ??D??nde queda?
                    </h1>
                    <p>El hotel se encuentra a 30 minutos del aeropuerto de Riohacha, en el Paraje Punta La Vela de San Antonio Manaure.
                    </p>

                    <h1 className='title'>
                        ??Qu?? servicios tiene mi habitaci??n?
                    </h1>
                    <p> Tu habitaci??n contar?? con televisi??n con se??al satelital, aire acondicionado, ba??o privado con ducha, cajilla de seguridad.</p>
                    <h1 className='title'>
                        ??Qu?? horarios tiene el check-in y check-out?

                    </h1>
                    <p> El check-in es a las 5:00 pm y check-out: 1:00 pm. </p>
                </div>
                <div className="col-lg-6 reco">
                    <h1 className='title'>
                        Servicios extras y atracciones con costo adicional
                    </h1>
                    <p>   Restaurante Isashii, Cabo de la Vela, Palomino, helitour, cabalgatas.</p>
                    <h1 className='title'>
                        ??De qu?? categor??a es el hotel?
                    </h1>
                    <p> Primera Categor??a</p>
                    <h1 className='title'>
                        ??Cu??l es el horario del Bar?

                    </h1>
                    <p> El horario del bar 11:00 a.m. a 10:00 p.m.</p>
                    <h1 className='title'>
                        ??Cu??l es el horario del restaurante?

                    </h1>
                    <p>Desayuno 6:00 am - 9:45 am. Almuerzo 12:00 pm - 03:00 pm. Cena 6:00 pm a 9:45 pm.</p>
                </div>
            </div>
        </div>
    )
}

export default Wayira