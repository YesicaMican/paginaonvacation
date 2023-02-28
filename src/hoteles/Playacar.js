import React from 'react'

function Playacar() {
  return (
    <div className='justify'>
    <br />
    <br />
    <h1>Hotel Playacar</h1>
    <div className='justify'>
        <p >Situado en la península Yucatán, a 3 km de Playa del Carmen, En la urbanización "Playacar" donde además se encuentran los hoteles Riu Palace México, Riu Palace Riviera Maya, Riu Yucatán y Riu Tequila. Ediﬁcio principal y ediﬁcios anexos de 2 plantas. El hotel se encuentra al borde de la playa.</p>
        <div style={{ display: "flex" }}>
            <div id="carouselExample" className="carousel slide ">
                <div className="carousel-inner">
                    <div className="carousel-item active" >
                        <img src="https://scontent.fbog15-1.fna.fbcdn.net/v/t39.30808-6/332984278_559459682831931_4522435475812611703_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=_wWpL7poxzEAX8jxlal&tn=8xH0haynASGBlYhW&_nc_ht=scontent.fbog15-1.fna&oh=00_AfA6qurrBYKFtFGQ5oEvdidRGl8iE4kpLXtPKOJt4Hlq1g&oe=63FCDCD4" className="img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://scontent.fbog15-1.fna.fbcdn.net/v/t39.30808-6/333022209_724286652529583_2458136617253979299_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=rWo6cxvExS0AX8MPbNE&_nc_ht=scontent.fbog15-1.fna&oh=00_AfD32kjt8tzTFOlMlq2izdGDncF5tTpw2gaE7oVNTSBmsw&oe=63FBE9AE" className="img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://scontent.fbog15-1.fna.fbcdn.net/v/t39.30808-6/333033704_544744600971128_282990829895048909_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=lYyxUOb9_bAAX-VhACn&tn=8xH0haynASGBlYhW&_nc_ht=scontent.fbog15-1.fna&oh=00_AfCzqrSocFgjYTAeKakhXd4zJt4CTlTD1l3kXKSamNge4Q&oe=63FCF060" className="img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://scontent.fbog15-1.fna.fbcdn.net/v/t39.30808-6/332758365_1282137455847808_2335163757828997978_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=7sSsPnYIgUgAX-xxzDd&_nc_ht=scontent.fbog15-1.fna&oh=00_AfAJCGCIoJVG_sxSIXn56GeLARCpf-8HVl0eOlLG0DHdoA&oe=63FB9A0B" className="img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://scontent.fbog15-1.fna.fbcdn.net/v/t39.30808-6/333040306_3391982817725660_3191638517249051618_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=d4hc3QqMOyoAX-MCze5&tn=8xH0haynASGBlYhW&_nc_ht=scontent.fbog15-1.fna&oh=00_AfBHM7cMSVBHFHq845_0n75d4kapvIjxeuEvv4H5GH0k_Q&oe=63FC8D6B" className="img-fluid" alt="..." />
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
                <img src="https://scontent.fbog15-1.fna.fbcdn.net/v/t39.30808-6/333052723_3506715719547337_1460770034877508837_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=_MbnfLLZZcUAX-WGS_B&_nc_ht=scontent.fbog15-1.fna&oh=00_AfB7sKFCndPx-PXKsGNlHxYsOKNx7WVHx1l3kVeLhtubBQ&oe=63FC675C" class="img-fluid mapa" alt="..." width="60%" />
            </div>
        </div>
    </div>

    <br />
    <iframe width="560" height="315" src="https://www.youtube.com/embed/gqzsMSeGwtU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='video'></iframe>
    <br />
    <br />
    <div className='servicios'>
        <h2 className='title'>Que servicios ofrece el hotel?</h2>
        <br />
        <br />
        <p> Piscina infantil con toboganes</p>
        <p> Restaurantes</p>
        <p> Gimnasio</p>
        <p> 3 Piscinas</p>
        <p> Club para niños “Riu Land”</p>
        <p> Bar</p>
    </div>
    <br />
    <div className="row">
        <div className="col-lg-6 reco">
            <h1 className='title'>
                ¿Dónde queda?
            </h1>
            <p>Situado en la península Yucatán, a 3 km de Playa del Carmen, En la urbanización "Playacar". El hotel se encuentra al borde de la playa.
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

export default Playacar