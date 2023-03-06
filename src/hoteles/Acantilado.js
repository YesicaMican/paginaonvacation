import React from 'react'

 function Acantilado() {
  return (
    <div className='justify'>
            <br />
            <br />
            <h1>Acantilado de la Tierra</h1>
            <div className='justify'>
                <p > Es el lugar perfecto para las personas que les gusta desconectarse del ruido pero a su vez quieren disfrutar de habitaciones con vista increíble a la playa o a la montaña. Es un nuevo concepto de hotelería de lujo en San Andrés, donde podrás encontrar intimidad por su ubicación en un recodo verde de la isla y un servicio especial cercano e individual para cada uno de nuestros huéspedes.</p>
                <div style={{ display: "flex" }}>
                    <div id="carouselExample" className="carousel slide ">
                        <div className="carousel-inner">
                            <div className="carousel-item active" >
                                <img src="http://drive.google.com/uc?export=view&id=1qYft7PRWk75j9ivv-7H78zfpmRJC3jbn" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://drive.google.com/uc?export=view&id=1Tuumf9WC2zBLMRPUHJbOIpLP0o5Hr11m" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://drive.google.com/uc?export=view&id=1TXhYQUjal2a6mB0KtTfG3rrQUjJpUWyv" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://drive.google.com/uc?export=view&id=1yzE9BhsbGb1qaxFjZvvDoEkHUlP7wK-p" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://drive.google.com/uc?export=view&id=1t7BL_aD3oI19mvgqx1TNNBO68OkgfMDW" className="img-fluid" alt="..." />
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
                    <div >
                    <div className=' m-3'>
                        <h2 align='center' >Qué Incluye?</h2>
                        <p >✅Vuelo ida y regreso </p>
                        <p >✅Alojamiento 4 días completos </p>
                        <p >✅Desayuno, almuerzo y cena</p>
                        <p >✅Equipaje de mano de 6kg (mochila)  </p>
                        <p >✅Asistencia médica. </p>
                        <p >✅Seguro hotelero.  </p>
                        <p > <b>🔺 No incluye</b> <br />❌ Tarjeta de turismo de ingreso a la isla<br />
                            ❌Traslado Aeropuerto - hotel - Aeropuerto<br />
                            ❌ Tours dentro de la tarifa ( tiene costo adicional) <br />
                            ❌ Bebidas alcoholicas en el bar</p>
                    </div>
                </div>
            </div>

            <br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/MXBacqbY0RY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='video'></iframe>
            <br />
            <br />
            <div className='servicios'>
                <h2 className='title'>Que servicios ofrece el hotel?</h2>
                <br />
                <br />
                <p> Bar</p>
                <p> Restaurante</p>
                <p> Piscina</p>
            </div>
            <br />
            <div className="row">
                <div className="col-lg-6 reco">
                    <h1 className='title'>
                        ¿Dónde queda?
                    </h1>
                    <p>Desde el aeropuerto Gustavo Rojas Pinilla a 20 minutos y desde el centro de San Andrés a 30 minutos en vehículo aproximadamente
</p>

                    <h1 className='title'>
                        ¿Qué servicios tiene mi habitación?
                    </h1>
                    <p> Tu habitación contará con Aire acondicionado, Televisor,Baño privado.</p>
                    <h1 className='title'>
                    ¿Qué horarios tiene el check-in y check-out?

                    </h1>
                    <p> El check-in es a las 5:00 pm y check-out: 1:00 pm. Si viajas en vuelo nocturno la habitación se te entregará en el momento de la llegada al hotel.</p>
                </div>
                <div className="col-lg-6 reco">
                    <h1 className='title'>
                    Cuáles son los puntos turísticos cercanos al hotel?
                    </h1>
                    <p>   Casa Museo, Cueva de Morgan</p>
                    <h1 className='title'>
                        ¿De qué categoría es el hotel?
                    </h1>
                    <p>   Categoría turista Superior.</p>
                    <h1 className='title'>
                    ¿Cuál es el horario del restaurante?

                    </h1>
                    <p> Desayuno 7:00 am - 09:00 am. Almuerzo 12:30 pm - 02:30 pm. Cena 6:00 pm a 9:00 pm.</p>
                </div>
            </div>
        </div>
        </div>  )
}
export default Acantilado
