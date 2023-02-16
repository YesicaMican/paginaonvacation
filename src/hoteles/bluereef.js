import React from 'react'

function Bluereef() {
  return (
    <div className='justify'>
      <h1 className='bluereef1'>Blue Reef</h1>
      <p className='reco'> Ubicado en el sector de Sarie Bay a 10 minutos del centro de San Andrés y del Aeropuerto, de fácil acceso al transporte público. La propiedad ofrece a los huéspedes piscina descubierta con bañera de hidromasajes y piscina para niños.</p>
      <div className='row'>
        <div id="carouselExample" className="carousel slide col-lg-6">
          <div className="carousel-inner">
            <div className="carousel-item active" >
              <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/331161237_489792959830251_4978886755452587777_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeENE8c4fqCbI02Je6x83reVhfOc2b0QeiCF85zZvRB6IFWciLLroXLut1JCODJD2fJwIv5VnCEClkyuu_xgS6qt&_nc_ohc=ffuD0UdrgG4AX-eqo_d&_nc_ht=scontent.fbog14-1.fna&oh=00_AfDxSv_bhPGqdnyXIHA7XiJlD24CUK-dGSyIKRJAzKzR1A&oe=63F46414" className="img-fluid" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/331144017_749697909829161_1895837829719872380_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFfn4mBrcOK-o79b938YyII_nBcG6p_pyz-cFwbqn-nLITXe90MBIms-3LKNplUHAC-R_2ketTrp7Sng0tGWeKB&_nc_ohc=n9lWm153eWsAX_wFPqP&_nc_ht=scontent.fbog14-1.fna&oh=00_AfBqpDpWCp4fZ2MADHIGG4tQcHWsI28nTdXwBmaNrsCEWA&oe=63F333C4" className="img-fluid" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/331065382_521959366500892_1771094230854657439_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEB1EL8-TI0BHvPPpymdDgO9cJbfzX0zJb1wlt_NfTMlp9Kx2gAZdrd2fIA8X4vQBy550fQuW2cyf1Sz_ecetB5&_nc_ohc=j0N8l-WAoJwAX_FiFgg&_nc_ht=scontent.fbog14-1.fna&oh=00_AfBO6NKO9mNJhOfvf0I1tQalZ3_N8sKV0b36SYTgvjUesA&oe=63F420B0" className="img-fluid" alt="..." />
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
        
          <h2 className=' text-center' >Ubicación</h2>
          <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/328351566_603288675147882_1424001117216581162_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeH0PnSh-N2I5Rkt-SdflWEdEMy-wbz0EucQzL7BvPQS5_u-qkpRnjEuXCKtLaoH3GcUyyYkLNEM4UZDuJfgyMbP&_nc_ohc=W_2MszfBTDYAX_c_GpH&_nc_oc=AQlHOxj5Vlw7M_o72E1p_DBjVFuPNndTXaBfDRKmWJyb3RBSKEUQVz9i3ebBXNB8yiQ&tn=8xH0haynASGBlYhW&_nc_ht=scontent.fbog14-1.fna&oh=00_AfAp3bASETj9wXI_f_hWuH2SVLMuygiq2or8kgenSnVYrg&oe=63E475DF" class="img-fluid mapa" alt="..." width="50%" />
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

export default Bluereef