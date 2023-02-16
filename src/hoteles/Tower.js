import React from 'react'

export default function Tower() {
  return (
    <div className='justify'>
            <br />
            <br />
            <h1>Tower</h1>
            <div className='justify'>
                <p > Hotel tipo turista ubicado en la zona comercial de San Andrés con facilidad para realizar compras de souvenirs. El hotel cuenta con dos Torres (una con Ascensor) donde puedes descansar en cómodas habitaciones</p>
                <div style={{ display: "flex" }}>
                    <div id="carouselExample" className="carousel slide ">
                        <div className="carousel-inner">
                            <div className="carousel-item active" >
                                <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/322163969_1303993830163264_8930410637272163135_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=izbODqayOkEAX_2sc-i&_nc_ht=scontent.fbog14-1.fna&oh=00_AfAzaUsAQ66Bl_pWlXFRSBzaW9yo1fkjS1kWXU3-6-xw4g&oe=63F463AA" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/321943801_472191168419730_568167656291452245_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_ohc=7g5N9Ja8pLcAX8K5J93&_nc_ht=scontent.fbog14-1.fna&oh=00_AfCgAoe3p8f5TFdCKC7Fc95Cd9o7-yc9P_XjSrvOVWKmDg&oe=63F38038" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/322588257_702709961238580_5024522546096351721_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=PNIdB5h6oTUAX9Sxbe8&tn=8xH0haynASGBlYhW&_nc_ht=scontent.fbog14-1.fna&oh=00_AfB6dX83MQOO7u89Oy4RMnwLBuCRpywwLaI11zLUg8bevQ&oe=63F35BC0" className="img-fluid" alt="..." />
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
                        <br />
                        <br />
                        <h2 className=' text-center' >Ubicación</h2>
                        <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/331047730_1311959596053582_5462228321709579197_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeF3rBQMw9fyO8TghFaGlzMZmS417MiYeG6ZLjXsyJh4bkwpd55ucYBf8jHHJp8ziPSqFdVWogn2WzPjFA__bgIm&_nc_ohc=J4VpKO7gDd4AX9yqqKN&tn=8xH0haynASGBlYhW&_nc_ht=scontent.fbog14-1.fna&oh=00_AfBpOoeXtUrbhKOX9gRjPySBvKGj5WegF88IF9DXDMQKRQ&oe=63F46653" class="img-fluid mapa" alt="..." width="60%" />
                    </div>
                </div>
            </div>

            <br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jhrrrHmww_A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='video'> </iframe>
      <br />
      <br />
      <div className='servicios'>
      <h2 className='title'>Que servicios ofrece el hotel?</h2>
      <br />
      <br />
      <p> Recepción 24 horas</p>
      <p> Bar</p>
      <p> Restaurantes</p>
      <p> Piscina</p>
      <p> Torre con ascensor</p>
      <p> Food Paradise (servicio de pago adicional)</p>
      </div>
      <br />
            <div className="row">
                <div className="col-lg-6 reco">
                    <h1 className='title'>
                        ¿Dónde queda?
                    </h1>
                    <p>Desde el aeropuerto Gustavo Rojas Pinilla a 7 minutos en vehículo aproximadamente y desde el centro de San Andrés a 8 minutos en vehículo aproximadamente.</p>

                    <h1 className='title'>
                        ¿Qué servicios tiene mi habitación?
                    </h1>
                    <p> Tu habitación contará con televisión con señal por cable, aire acondicionado, caja de seguridad, baño privado con ducha</p>
                    <h1 className='title'>
                        ¿Cuáles son los puntos turísticos cercanos al hotel?
                    </h1>
                    <p> Sendero peatonal, Coco Loco, playa Spratt Bight.</p>
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
                        ¿Qué horarios tiene el check-in y check-out?
                    </h1>
                    <p> El check-in es a las 5:00 pm y check-out: 1:00 pm. Si viajas en vuelo nocturno la habitación se te entregará en el momento de la llegada al hotel.</p>
                </div>
            </div>
        </div>
  )
}
