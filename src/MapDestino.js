import React from 'react'
import Destino from './Destino'
import destinos from './destinos.json'

function MapDestino() {
  return (
    <div>
      {destinos.destinossanandres.map(sanandres =>{
      return(<div>
      <h1>hotel={sanandres.hotel} descripcion={sanandres.descripcion} imagen={sanandres.imagen}</h1>
      </div> )}
      )}
    </div>
  )
}

export default MapDestino
