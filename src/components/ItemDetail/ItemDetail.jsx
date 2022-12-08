import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({detalle}) => {
    return (
        <div>
            <img src={detalle.img} />
            <p>{detalle.modelo}</p>
            <p>USD${detalle.precio}</p>
            <ItemCount />
        </div>
    )
}

export default ItemDetail