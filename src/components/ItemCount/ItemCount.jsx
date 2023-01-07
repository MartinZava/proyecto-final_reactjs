import { useState } from "react"
import "./ItemCount.css"


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
                <label className="count">{count}   </label>
                <button onClick={suma} className='button hvr-glow'> + </button>
                <button onClick={resta} className='button hvr-glow'> - </button>
            </div>
            <button className='button hvr-grow-shadow' onClick={handleOnAdd}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount