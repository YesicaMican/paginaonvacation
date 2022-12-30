function Destino(hotel,descripcion,imagen) {

    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img src={imagen} className="card-img-top" width="450" />
                <div className="card-body">
                    <h5 className="card-title">{hotel}</h5>
                    <p className="card-text">{descripcion}</p>
                    <button variant="contained" className="btn btn-primary"> Mas información</button>
                </div>
            </div>
        </div>
    );

}

export default Destino;