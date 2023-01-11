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
        <div className='card__detail--flex'>
            <div>
                <img src={product.img} />
            </div>
            <div className='card__detail'>
                <p className='card__detail--textTitle'>{product.modelo}</p>
                <p className='card__detail--textBrand'>{product.marca}</p>
                <p className='card__detail--textDet'>Switches: {product.switches}</p>
                <p className='card__detail--textDet'>Conexion: {product.conector}</p>
                <p className='card__detail--textPrice'>Precio: USD${product.precio}</p>
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