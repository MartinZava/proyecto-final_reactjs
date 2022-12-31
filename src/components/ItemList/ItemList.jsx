import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ products }) => {
    return (
        <Item key={products.id} products={products} />
    )
}

export default ItemList

