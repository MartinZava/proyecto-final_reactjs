import { useState } from "react"

const ItemCount = ({ stock = 10, initial = 1 }) => {

    const [count, setCount] = useState(initial)

    const resta = () => {
        if (count > initial) {
            setCount(count - 1)

        }
    }

    const suma = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }



    return (
        <div>
            <div>
                <label>{count}</label>
                <button onClick={suma} className='boton'> + </button>
                <button onClick={resta} className='boton'> - </button>
            </div>
            <button className='boton'>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount