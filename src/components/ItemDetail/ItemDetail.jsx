import { productos } from '../../../helpers/gFetch'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = () => {
    return (
        <div>
            <img src={productos.img} />
            <p>{productos.modelo}</p>
            <p>USD${productos.precio}</p>
            <ItemCount />
        </div>
    )
}

export default ItemDetail
