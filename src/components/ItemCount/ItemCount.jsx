import { useState } from "react"

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {

    const [count, setCount] = useState(initial)

    const resta = () => {
        count > initial ? setCount(count - 1) : null
    }

    const suma = () => {
        count < stock ? setCount(count + 1) : null
    }

    const handleOnAdd = () => {
        onAdd(count)
    }

    return (
        <div>
            <div>
                <label>{count}</label>
                <button onClick={suma} className='boton'> + </button>
                <button onClick={resta} className='boton'> - </button>
            </div>
            <button className='boton' onClick={handleOnAdd}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount