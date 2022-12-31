import { useState } from 'react'
import { Link } from 'react-router-dom'
import CartList from '../../components/CartList/CartList'
import { useCartContext } from '../../context/CartContext/CartContext'

const CartContainer = () => {

    const { cartList } = useCartContext()
    const [product, setProduct] = useState([])

    return (
        <div>
            {cartList.length !== 0 ?
                <CartList key={product.id} product={product} />
                :
                <>
                    <h2>El carrito esta vacio</h2>
                    <Link to='/'>Productos</Link>
                </>
            }
        </div>
    )
}

export default CartContainer