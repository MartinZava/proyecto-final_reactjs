import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { gFetch, productos } from '../../../helpers/gFetch'


const ItemList = () => {
    return (
        productos.map(productos => <div key={productos.id}>
            <img src={productos.img} alt={productos.modelo} />
            <p>{productos.modelo}</p>
            <p>USD$ {productos.precio}</p>
            <button>Agregar al Carrito</button>
            <Link to={`/detalle/${productos.id}`}>
                <button>Detalle del Producto</button>
            </Link>

        </div>)
    )
}

export default ItemList
