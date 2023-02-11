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
                                <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/322007912_1324344521741738_3652618095783210412_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_ohc=PWogUEI6ORwAX-2vVu9&tn=8xH0haynASGBlYhW&_nc_ht=scontent.fbog14-1.fna&oh=00_AfCWrRGLWoLlspVkpq6CKU_Xevs6SSA6l-BRpD01bCoEBA&oe=63EC1BD4" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/322389147_1129955947712070_942551295799408703_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_ohc=LFdVzq_T6bMAX-SWIne&tn=8xH0haynASGBlYhW&_nc_ht=scontent.fbog14-1.fna&oh=00_AfDNAz4sQxWgvWF0cEm_987ZsgFnwVfHDq-a2C4LSuf7uA&oe=63EACB03" className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/322486737_5810472975711697_7559234104043775991_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_ohc=vyg-lSMWaMYAX_eWncj&_nc_ht=scontent.fbog14-1.fna&oh=00_AfBMvqDXVOL_L0j1Dbevi0T_fGj_Ig2KcBTOPC4La6j88w&oe=63EC87CA" className="img-fluid" alt="..." />
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
                        <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/329191020_2416890915127049_2685708647209184058_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=hANExwE-ROEAX8vdKVE&_nc_ht=scontent.fbog14-1.fna&oh=00_AfAE4dU-cRtmyF8hkqSRv20WT94tfqAe6z28gcOkg8qHMA&oe=63EB7D4C" class="img-fluid mapa" alt="..." width="60%" />
                    </div>
                </div>
            </div>

            <br />
      <iframe width="700" height="400" src="https://www.youtube.com/embed/EfcfC94htnw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='video'></iframe>
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
                        ¿Cuáles son los puntos turísticos cercanos al hotel?
                    </h1>
                    <p> Sendero peatonal, Coco Loco, Playa Spratt Bight.</p>
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
