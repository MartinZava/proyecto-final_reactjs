import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = (product) => {
    return (
        <div>
            <img src={product.img} />
            <p>{product.modelo}</p>
            <p>USD${product.precio}</p>
            <ItemCount />
        </div>
    )
}

export default ItemDetail