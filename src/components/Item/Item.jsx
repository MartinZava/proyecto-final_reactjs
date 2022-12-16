import React from 'react'
import { Link } from 'react-router-dom'

import './Item.css'


const Item = ({ productos }) => {
    return (
        productos.map(productos =>
            <div key={productos.id} className="card">
                <img src={productos.img} alt={productos.modelo} className="card__img" />
                <p className='card__texto'>{productos.modelo}</p>
                <p className='card__texto--precio'>USD$ {productos.precio}</p>
                <button className='boton'>Agregar al Carrito</button>
                <Link to={`/detalle/${productos.id}`}>
                    <button className='boton'>Detalle del Producto</button>
                </Link>

            </div>)
    )
}

export default Item