import React from 'react'

function Promo() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner ">
      <div className="carousel-item active ">
        <img src="http://drive.google.com/uc?export=view&id=1XrdJykdhZbCns6NI5FGmrg_zBu1d7G2K" className="img-fluid anuncio" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="http://drive.google.com/uc?export=view&id=1wWzlZVfn0h3b50CqqoflNVzGlJqu21Iv" className="img-fluid anuncio" alt="..."/>
      </div>
      
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Promo
