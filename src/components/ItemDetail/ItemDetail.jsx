import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";



const ItemDetail = ({ product }) => {

    const onAdd = (cantidad) => {
        console.log(cantidad)
    }
    return (
        <div className='card__detalle--flex'>
            <div>
                <img src={product.img} />
            </div>
            <div className='card__detalle'>
                <p className='card__detalle--textoTitulo'>{product.modelo}</p>
                <p className='card__detalle--textoMarca'>{product.marca}</p>
                <p className='card__detalle--textoDet'>Switches: {product.switches}</p>
                <p className='card__detalle--textoDet'>Conexion: {product.conector}</p>
                <p className='card__detalle--textoPrecio'>Precio: USD${product.precio}</p>
                <ItemCount stock={10} initial={1} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;