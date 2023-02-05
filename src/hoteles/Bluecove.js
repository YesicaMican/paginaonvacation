import React from 'react'

function Bluecove() {
    return (
        <div>
            <br />
            <br />
            <br />
            <h1>Blue Cove</h1>
            <div className='justify'>
                <p > Hotel tipo turista ubicado en la Ensenada del Cove, en la zona rocosa de la isla, lugar óptimo para caretear y bucear donde se encuentran las piscinas naturales</p>

                <div id="carouselExample" className="carousel slide ">
                    <div className="carousel-inner">
                        <div className="carousel-item active" >
                            <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/322389147_1129955947712070_942551295799408703_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeFNkExnjwqiC3kLXsNCIfhSSs_jQOKDbv9Kz-NA4oNu_wd9VFRuvN7Cl_7wDhQG7OfXQy7SmngUKI9DDyrqcD2C&_nc_ohc=4xy4ytn4u8cAX-_dYDt&tn=8xH0haynASGBlYhW&_nc_ht=scontent.fbog14-1.fna&oh=00_AfCnh7NTxp5df89NDAd8nfIvyLmb_BxjqeAFFlzfejJpNQ&oe=63E2E203" className="img-fluid" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/322007912_1324344521741738_3652618095783210412_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHpqO1XPvOz7lg__6FkKLKoQB3ASmO1QvJAHcBKY7VC8rcodXqm3Itld06Y530-W7r-O8z4cwIO7zVLtSZyfqT3&_nc_ohc=asPWUiXDA2cAX8pa1jw&tn=8xH0haynASGBlYhW&_nc_ht=scontent.fbog14-1.fna&oh=00_AfD0saVbeAilsM4ev6tvOrxX8Ug-iJeHouIpwrbckeZIeA&oe=63E432D4" className="img-fluid" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/322513924_827424108318686_2466688450042019582_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGv9n60Uul9ZI1ceeoZeqLXUEcD1Z-z0FNQRwPVn7PQU6io4YR23K3Q9t8aJCxclJpPNLRFul_Z-5zs5HTnTj5N&_nc_ohc=CjzlxU0t9dQAX_sHOSS&_nc_ht=scontent.fbog14-1.fna&oh=00_AfA_88Hj-HPaocbMtOCbQBjrHhd-E0jdbRDTPjNWpQcsPw&oe=63E3EE3B" className="img-fluid" alt="..." />
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
            </div>
            
                    <br />
                    <br />
                    <h2 className=' ubicacion'>Ubicación</h2>
                    <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/328351566_603288675147882_1424001117216581162_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeH0PnSh-N2I5Rkt-SdflWEdEMy-wbz0EucQzL7BvPQS5_u-qkpRnjEuXCKtLaoH3GcUyyYkLNEM4UZDuJfgyMbP&_nc_ohc=W_2MszfBTDYAX_c_GpH&_nc_oc=AQlHOxj5Vlw7M_o72E1p_DBjVFuPNndTXaBfDRKmWJyb3RBSKEUQVz9i3ebBXNB8yiQ&tn=8xH0haynASGBlYhW&_nc_ht=scontent.fbog14-1.fna&oh=00_AfAp3bASETj9wXI_f_hWuH2SVLMuygiq2or8kgenSnVYrg&oe=63E475DF" class="img-fluid" alt="..." width="25%" />

                    <h1>¿Qué recomendaciones especiales hay para el viaje?</h1>
            <p>Usar siempre bloqueador solar, llevar bastante repelente para mosquitos (no en aerosol), se recomienda uso de sombreros, gorra y/o demás elementos de protección contra el sol. Preferiblemente llevar prendas de vestir de materiales ligeros, transpirables, cómodas, gafas de sol, llevar tenis, botas pantaneras para los recorridos, siempre estar hidratado. Si sales del hotel debes coordinar directamente y adecuadamente el transporte de regreso con el fin de evitar inconvenientes por la distancia del mismo. </p>
        </div>
        
    )
}

export default Bluecove
