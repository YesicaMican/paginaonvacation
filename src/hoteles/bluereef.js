import React from 'react'

function Bluereef() {
  return (
    <div className='justify'>
      <br />
      <br />
      <br />
      <h1>Blue Reef</h1>
      <p > Ubicado en el sector de Sarie Bay a 10 minutos del centro de San Andrés y del Aeropuerto, de fácil acceso al transporte público. La propiedad ofrece a los huéspedes piscina descubierta con bañera de hidromasajes y piscina para niños.</p>
      <div style={{display:"flex"}}>
        <div id="carouselExample" className="carousel slide ">
          <div className="carousel-inner">
            <div className="carousel-item active" >
              <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/322577983_840447177236761_1310888636953568389_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEJ2_bidRf66lTgkeGTaCE3uo39Jfd7rae6jf0l93utp5U8W_XIcaCYaUAVtijt1_1aLibbK-InF543Xb3InT0H&_nc_ohc=uBrXtuqPNbMAX8SNYQf&tn=8xH0haynASGBlYhW&_nc_ht=scontent.fbog14-1.fna&oh=00_AfAq7xGf-lMh7tijRhRaVpKSDPBAwC-zBRsfjW81LbzXtQ&oe=63E22EC7" className="img-fluid" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/321959119_3055893434710605_5811378793225689609_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeF3maRxOO_NWwil6EGAkg_K77Q-PY7dAnzvtD49jt0CfH0roHrU4_8-XDXPVmC6ja33XW9ppP5ME3rXvaQJ8ox2&_nc_ohc=B8dVr3qg6ToAX9b5Y4H&_nc_ht=scontent.fbog14-1.fna&oh=00_AfBmiQnVPi4zGeO2eK08FMaacOlw9rWd02WOrEab-QKbKA&oe=63E2BE9B" className="img-fluid" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/322191362_684815300031628_760884457486573458_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeF9MoxgHGbkqF5AenARaKaUAD5pYYQpteoAPmlhhCm16koWdKAOE6YJGWuJ4Oh91tNmRVkyTc7S5yneK2xwgviM&_nc_ohc=zlhjQOFvpQ8AX8RhkVP&_nc_ht=scontent.fbog14-1.fna&oh=00_AfA5QQAMVmr88PoCx9IBWan6xza-NAteRQpzkS6ZwCkDQA&oe=63E1FD26" className="img-fluid" alt="..." />
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
        <div>
          <br />
          <br />
          <h2 className=' ubicacion'>Ubicación</h2>
          <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/328351566_603288675147882_1424001117216581162_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeH0PnSh-N2I5Rkt-SdflWEdEMy-wbz0EucQzL7BvPQS5_u-qkpRnjEuXCKtLaoH3GcUyyYkLNEM4UZDuJfgyMbP&_nc_ohc=W_2MszfBTDYAX_c_GpH&_nc_oc=AQlHOxj5Vlw7M_o72E1p_DBjVFuPNndTXaBfDRKmWJyb3RBSKEUQVz9i3ebBXNB8yiQ&tn=8xH0haynASGBlYhW&_nc_ht=scontent.fbog14-1.fna&oh=00_AfAp3bASETj9wXI_f_hWuH2SVLMuygiq2or8kgenSnVYrg&oe=63E475DF" class="img-fluid" alt="..." width="25%" />

          <h1>¿Qué recomendaciones especiales hay para el viaje?</h1>
          <p>Usar siempre bloqueador solar, llevar bastante repelente para mosquitos (no en aerosol), se recomienda uso de sombreros, gorra y/o demás elementos de protección contra el sol. Preferiblemente llevar prendas de vestir de materiales ligeros, transpirables, cómodas, gafas de sol, llevar tenis, botas pantaneras para los recorridos, siempre estar hidratado. Si sales del hotel debes coordinar directamente y adecuadamente el transporte de regreso con el fin de evitar inconvenientes por la distancia del mismo. </p>
        </div>
      </div>
    </div>


  )

}

export default Bluereef