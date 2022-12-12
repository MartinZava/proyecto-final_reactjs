import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

import './Item.css'


export const Item = ({ detalle }) => {
    return (
        <div className='card__detalle--flex'>
            <div>
                <img src={detalle.img} />
            </div>
            <div className='card__detalle'>
                <p className='card__detalle--textoTitulo'>{detalle.modelo}</p>
                <p className='card__detalle--textoMarca'>{detalle.marca}</p>
                <p className='card__detalle--textoDet'>Switches: {detalle.switches}</p>
                <p className='card__detalle--textoDet'>Conexion: {detalle.conector}</p>
                <p className='card__detalle--textoPrecio'>Precio: USD${detalle.precio}</p>
                <ItemCount />
            </div>
        </div>
    )
}
