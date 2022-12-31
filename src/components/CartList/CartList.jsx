import { useCartContext } from "../../context/CartContext/CartContext"

const CartList = () => {

    const { cartList, totalPrice, emptyCart, removeItem } = useCartContext()

    //console.log(product.id)

    return (
        <div>
            {cartList.map(product => <div key={product.id} >
                <img src={product.img} alt="" />
                <h3>{product.marca} - {product.modelo} - Cantidad seleccionada: {product.cantidad} - Precio: USD${product.precio}</h3>
                <button onClick={() => removeItem(product.id)}>Eliminar Producto</button>
            </div>
            )
            }
            <p>El precio total es de: USD$ {totalPrice()}</p>
            <button onClick={emptyCart}>Vaciar carrito</button>

        </div>
    )
}

export default CartList