import React from 'react'
import { Icon } from '@iconify/react';
import { useCartContext } from '../../context/CartContext/CartContext';


export const CartWidget = () => {

    const { totalQuantity } = useCartContext()
    return (
        <p href="" className='lista__links--carrito'><Icon icon="ph:shopping-cart-simple-light" height="25" inline={true} />{totalQuantity() !== 0 && totalQuantity()}</p>
    )
}
