import React from 'react'
import { Icon } from '@iconify/react';
import { useCartContext } from '../../context/CartContext/CartContext';


export const CartWidget = () => {

    const { totalQuantity } = useCartContext()
    return (
        <p href="" className='lista__links--carrito hvr-grow'><Icon icon="ph:shopping-cart-simple-light" height="30" inline={true} />{totalQuantity() !== 0 && totalQuantity()}</p>
    )
}
