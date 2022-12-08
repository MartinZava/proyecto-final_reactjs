import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


export const Item = ({ detalle }) => {
    return (
        <div>
            <img src={detalle.img} />
            <p>{detalle.modelo}</p>
            <p>USD${detalle.precio}</p>
            <ItemCount />
        </div>
    )
}
