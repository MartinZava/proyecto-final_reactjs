import { Item } from '../Item/Item'

import './ItemDetail.css'

const ItemDetail = (product) => {
    return (
        <div className='card__detalle--container'>
            <Item detalle={product} />
        </div>
    )
}

export default ItemDetail