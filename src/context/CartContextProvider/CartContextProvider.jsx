import { useState } from "react"
import { CartContext } from "../CartContext/CartContext"


const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (product) => {

        const idx = cartList.findIndex(prod => prod.id === product.id)

        if (idx !== -1) {
            cartList[idx].cantidad += product.cantidad
            setCartList([...cartList])
        } else {
            setCartList([...cartList, product])
        }
    }

    const totalPrice = () => cartList.reduce((counter, product) => counter += (product.precio * product.cantidad), 0)

    const totalQuantity = () => cartList.reduce((counter, product) => counter += product.cantidad, 0)

    const emptyCart = () => {
        setCartList([])
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(product => product.id !== id))
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart,
            totalPrice,
            totalQuantity,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider