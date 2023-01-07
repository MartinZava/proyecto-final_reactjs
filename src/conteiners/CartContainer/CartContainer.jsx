import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext/CartContext'
import CartForm from '../../components/CartForm/CartForm'
import CartList from '../../components/CartList/CartList'

import './CartContainer.css'


const CartContainer = () => {

    const [product, setProduct] = useState([])
    const { cartList } = useCartContext()

    return (
        <div>
            {cartList.length !== 0 ?
                <>
                    <CartList key={product.id} product={product} />
                    <CartForm />
                </>
                :
                <>
                    <div id='title_empty--flex'>
                        <h1 id='title_empty'>El carrito esta vacio</h1>
                        <br />
                        <Link className='hvr-pulse-grow' id='title_empty--prod' to='/'>Seguir comprando</Link>
                    </div>
                </>
            }
        </div>
    )
}

export default CartContainer        