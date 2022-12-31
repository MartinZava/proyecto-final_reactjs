import { useContext, createContext } from "react"


export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)
