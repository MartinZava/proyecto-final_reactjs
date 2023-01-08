import Item from '../Item/Item'

const ItemList = ({ products }) => {
    return (
        <Item key={products.id} products={products} />
    )
}

export default ItemList

