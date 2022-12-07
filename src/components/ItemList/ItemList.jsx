import React from 'react'
import { Link } from 'react-router-dom'


const ItemList = ({productos}) => {
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
