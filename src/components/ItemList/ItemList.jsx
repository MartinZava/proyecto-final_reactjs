import React from 'react'
import { Link } from 'react-router-dom'
import { gFetch, productos } from '../../../helpers/gFetch'


const ItemList = () => {
    return (
        productos.map(product => <div key={product.id}>
            <img src={product.img} alt={product.modelo} />
            <p>{product.modelo}</p>
            <p>USD$ {product.precio}</p>
            <button>Agregar al Carrito</button>
            <Link to={`/detalle/${product.id}`}>
                <button>Detalle del Producto</button>
            </Link>

        </div>)
    )
}

export default ItemList
