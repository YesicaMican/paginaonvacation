import React from 'react'

function Amazon() {
    return (
        <div className='justify'>
            <br />
            <br />
            <h1>Hotel Amazon</h1>
            <div className='justify'>
                <p >Es un hotel exclusivo ubicado a 17 km de Leticia, para llegar a él se realiza un recorrido  fluvial en lancha que tarda entre 20 y 40 minutos dependiendo la temporada. A orillas del río Amazonas</p>
                <div style={{ display: "flex" }}>
                    <div id="carouselExample" className="carousel slide ">
                        <div className="carousel-inner">
                            <div className="carousel-item active" >
                                <img src="http://drive.google.com/uc?export=view&id=1Fg2FaT0p32DUxO29Xyma4y7Baf59dkzk" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://drive.google.com/uc?export=view&id=1P1U_7azHpyOu7Aqohgyarprr1W-dSjGs" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://drive.google.com/uc?export=view&id=1h4TBvvxEHfOQtDpbyaB9_xqH0LdS0WEt" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://drive.google.com/uc?export=view&id=1Be9B2tI_I28FmgDplKKnbgkp958ktzUH" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://drive.google.com/uc?export=view&id=19UKBN7D0ox6ZsPqO0YmDDctIFj7VlLvc" className="img-fluid" alt="..." />
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
                        <p >✅Traslado Aeropuerto - hotel - Aeropuerto</p>
                        <p >✅Alojamiento 4 días completos </p>
                        <p >✅Desayuno, Almuerzo y cena buffet</p>
                        <p >✅Bebidas ilimitadas disponibles en el bar</p>
                        <p >✅Equipaje de mano de 6kg (mochila)  </p>
                        <p >✅Asistencia médica. </p>
                        <p >✅Seguro hotelero.  </p>
                        <p > <b>🔺 No incluye</b> <br />
                            ❌Impuesto de $36.000 entrada al Amazonas<br />
                            ❌Tours dentro de la tarifa ( son adcionales)</p>
                    </div>
                </div>
            </div>

            <br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/97ypDSjSDcE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='video'></iframe>
            <br />
            <br />
            <div className='servicios'>
                <h2 className='title'>Que servicios ofrece el hotel?</h2>
                <br />
                <br />
                <p> Muelle privado</p>
                <p> restaurante</p>
                <p> Bar</p>
                <p> Recepción 24 horas</p>
                <p> Piscina</p>
                <p> Comedor de 2 pisos con vista al Río Amazonas</p>
            </div>
            <br />
            <div className="row">
                <div className="col-lg-6 reco">
                    <h1 className='title'>
                        ¿Dónde queda?
                    </h1>
                    <p>Es un hotel exclusivo ubicado a 17 km de Leticia, ubicado en la Vereda San Jose del Río.
                    </p>

                    <h1 className='title'>
                        ¿Qué servicios tiene mi habitación?
                    </h1>
                    <p> Tu habitación contará con televisor, aire acondicionado, baño privado.</p>
                    <h1 className='title'>
                        ¿Qué horarios tiene el check-in y check-out?

                    </h1>
                    <p> El check-in es a las 2:00 pm y check-out: 1:00 pm. </p>
                    <h1 className='title'>
                        ¿Qué hay para hacer en el hotel?
                    </h1>
                    <p>Observación de flora y fauna; y disfrutar de la piscina y jacuzzi. </p>
                </div>
                <div className="col-lg-6 reco">
                    <h1 className='title'>
                        Servicios extras y atracciones con costo adicional
                    </h1>
                    <p> Observación de delﬁnes, pesca artesanal en el río Amazonas, Kayak, Puerto nariño.</p>
                    <h1 className='title'>
                        ¿De qué categoría es el hotel?
                    </h1>
                    <p> Categoría turista Green hotel</p>
                    <h1 className='title'>
                        ¿Cuál es el horario del Bar?

                    </h1>
                    <p> El horario del bar es de lunes a domingo de 11:00 am a 11:00 pm.</p>
                    <h1 className='title'>
                        ¿Cuál es el horario del restaurante?

                    </h1>
                    <p>Desayuno de 7:00 am - 9:30 am, Almuerzo de 12:30 pm a 03:00 pm, Cena de 06:00 pm a 09:00 pm.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Amazon
