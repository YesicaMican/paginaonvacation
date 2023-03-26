function Navegador() {
    return (
        <nav className="navbar navbar-expand-lg navbar-fixed-top bg-body-tertiary front-nav" style={{position:"fixed", width:"100%",zIndex:"1000"}}>
  <div className="container-fluid" >
    <a className="navbar-brand BT5" href="/">Reservas On Vacation </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Destinos</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="http://www.google.com" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Paga o valida tu reserva
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="https://pagosonline.onvacation.com">Paga en Línea</a></li>
            <li><a className="dropdown-item" href="https://mireserva.onvacation.com">Mi reserva</a></li>
            <li><hr className="dropdown-divider"/></li>
          </ul>
        </li>
        <li className="nav-item">
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
    );
}

export default Navegador;