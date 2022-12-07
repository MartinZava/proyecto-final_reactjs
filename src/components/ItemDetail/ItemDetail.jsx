import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = (productos) => {
    console.log(productos.detalle.marca)
    return (
        <div>
            <img src={productos.detalle.img} />
            <p>{productos.detalle.modelo}</p>
            <p>USD${productos.detalle.precio}</p>
            <ItemCount />
        </div>
    )
}

export default ItemDetail
