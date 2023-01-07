import { useCartContext } from "../../context/CartContext/CartContext"
import { Icon } from '@iconify/react';
import "./CartList.css"


const CartList = () => {

    const { cartList, totalPrice, emptyCart, removeItem } = useCartContext()

    return (
        <div className="cart">
            <h2 className="cart__title">Carrito</h2>
            {cartList.map(product => <div key={product.id} className="cart__items">
                <img src={product.img} alt="" className="cart__img" />
                <h3 className="cart__items--detail">{product.marca} - {product.modelo} - Cantidad seleccionada: {product.cantidad} - Precio: USD${product.precio}</h3>
                <button className="button hvr-grow-shadow" onClick={() => removeItem(product.id)}><Icon icon="ph:trash-light" width="25" inline={true} />
                </button>
            </div>
            )
            }
            <div className="cart__total">
                <p className="cart__total--price">El precio total es de: <strong>USD$ {totalPrice()}</strong></p>
                <button className="button__empty hvr-grow-shadow" onClick={emptyCart}>Vaciar carrito</button>
            </div>
        </div>
    )
}

export default CartList