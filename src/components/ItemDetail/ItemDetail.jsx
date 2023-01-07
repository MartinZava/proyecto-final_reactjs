import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";



const ItemDetail = ({ product }) => {

    const [isQuant, setIsQuant] = useState(false)

    const { addToCart } = useCartContext()

    const onAdd = (cantidad) => {
        addToCart({ ...product, cantidad })
        setIsQuant(true)
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
                {isQuant ?
                    <>
                        <Link to='/cart'><button className="button__then hvr-grow-shadow">Ir al Carrito</button></Link>
                        <Link to='/'><button className="button__then hvr-grow-shadow">Seguir Comprando</button></Link>
                    </>
                    :
                    <ItemCount stock={product.cantidad} initial={1} onAdd={onAdd} />
                }
            </div>
        </div>
    );
};

export default ItemDetail; 