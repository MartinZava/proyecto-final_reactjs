import { Item } from '../Item/Item'

import './ItemDetail.css'

const ItemDetail = ({ detalle }) => {
    return (
        <div className='card__detalle--container'>
            <Item detalle={detalle} />
        </div>
    )
}

export default ItemDetail