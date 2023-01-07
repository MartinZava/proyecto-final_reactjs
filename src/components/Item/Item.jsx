import { Link } from 'react-router-dom'

import './Item.css'


const Item = ({ products }) => {
    return (
        products.map(products =>
            <div key={products.id} className="card">
                <img src={products.img} alt={products.modelo} className="card__img" />
                <p className='card__text'>{products.modelo}</p>
                <p className='card__text--price'>USD$ {products.precio}</p>
                <Link to={`/detalle/${products.id}`}>
                    <button className='button hvr-grow-shadow'>Detalle del Producto</button>
                </Link>

            </div>)
    )
}

export default Item