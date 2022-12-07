import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch, productos } from '../../../helpers/gFetch'
import ItemCount from '../ItemCount/ItemCount'




const ItemDetailContainer = () => {

    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()
    console.log(productId)

    useEffect(() => {
        gFetch()
        .then(data => setProduct(data.find(product => product.id === productId)))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])



    return (
        <div>
            {loading ? <h2>Loading...</h2> :
                <div>
                    <img src={productos.img} />
                    <p>{productos.modelo}</p>
                    <ItemCount />
                </div>
            }
        </div>
    )
}

export default ItemDetailContainer 
