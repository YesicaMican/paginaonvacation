import React from 'react'

function Bluecove() {
    return (
        <div className='justify'>
            <br />
            <br />
            <h1>Blue Cove</h1>
            <div className='justify'>
                <p > Hotel tipo turista ubicado en la Ensenada del Cove, en la zona rocosa de la isla, lugar óptimo para caretear y bucear donde se encuentran las piscinas naturales</p>
                <div style={{ display: "flex" }}>
                    <div id="carouselExample" className="carousel slide ">
                        <div className="carousel-inner">
                            <div className="carousel-item active" >
                                <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/331077813_1534367100383691_7842332562102290024_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFejPkmFhp8tRq4FTPHKCINzu2G2bsDZD3O7YbZuwNkPbU440ybxGc7t6_VJVIc5_R9ws95tbgmlb_izKjC8Zeu&_nc_ohc=9exOlgiaPU0AX--dFeM&_nc_ht=scontent.fbog14-1.fna&oh=00_AfCjLkvgvNSpw9WF-IaZDYgQYw7xM_vt6y_slmgUlYjLSQ&oe=63F45389" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/330929011_884215189364643_230636709583798578_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHb37HNHClhcXOQMQ3l1RkiARbroxpHJxwBFuujGkcnHNp4z0IVv2CL2jI1XtTkk3o4nZCg9Oy1-Sl7JBsi82Dw&_nc_ohc=d63nRqx3IKoAX9xXBsz&_nc_ht=scontent.fbog14-1.fna&oh=00_AfBLINeGnR-CnVn_IekQQ4YeSXPxODp7l4Ei_F36TPVX5Q&oe=63F490BA" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/330843025_732120091620440_9001962016141863009_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGbGUq9bR6cd35Nnj2lSxMOUUsCkF3GTTtRSwKQXcZNOwaoZkb_eM3znKdajG0MMbJFFwPDCVai9Xa36RI4NWSb&_nc_ohc=PGV-GYJKKeUAX9nJDXn&_nc_ht=scontent.fbog14-1.fna&oh=00_AfDbNTKbKDgNK_eR1FHgzbnhUI3kFYtoPIRtoZQFaHGMfA&oe=63F40C1C" className="img-fluid" alt="..." />
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
                        <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/330918145_563386105826355_8705232792121521128_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGy9LZgw5Qc62BG6ymGImEsvCdF3Jqw6wq8J0XcmrDrCpQPjWFpsm0WBI1GZnpwRIVhWN_E7wHJo18KzUmX6ln6&_nc_ohc=dwDD0u7oHsUAX_IJvrQ&_nc_ht=scontent.fbog14-1.fna&oh=00_AfBJ42BQdV6jpW3bt2qy4BkujwSwBFQ_JzEwLLOgxgz-UA&oe=63F2B6CE" class="img-fluid mapa" alt="..." width="60%" />
                    </div>
                </div>
            </div>

            <br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/YojMLga6oJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='video'></iframe>
      <br />
      <br />
      <div className='servicios'>
      <h2 className='title'>Que servicios ofrece el hotel?</h2>
      <br />
      <br />
      <p> Recepción 24 horas</p>
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
                    <p>Desde el aeropuerto Gustavo Rojas Pinilla a 5 minutos en vehículo aproximadamente y desde el centro de San Andrés a 3 a 5 minutos en vehículo aproximadamente.</p>

                    <h1 className='title'>
                        ¿Qué servicios tiene mi habitación?
                    </h1>
                    <p> Tu habitación contará con televisión con señal por cable, aire acondicionado, caja de seguridad, baño privado con ducha, algunas habitaciones tienen vista parcial al mar.</p>
                    <h1 className='title'>
                    ¿Cuál es el horario del restaurante?

                    </h1>
                    <p>Desayuno 7:00 am -10:00 am. Almuerzo 12:00 pm - 02:45 pm. Cena 6:00 pm a 9:00 pm.</p>
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

export default Bluecove
