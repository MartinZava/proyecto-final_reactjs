import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext/CartContext'
import CartForm from '../../components/CartForm/CartForm'
import CartList from '../../components/CartList/CartList'


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
                    <h2>El carrito esta vacio</h2>
                    <Link to='/'>Productos</Link>
                </>
            }
        </div>
    )
}

export default CartContainer        