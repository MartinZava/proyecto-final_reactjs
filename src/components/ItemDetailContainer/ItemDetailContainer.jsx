import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../GetProduct/GetProduct'
import ItemDetail from '../ItemDetail/ItemDetail'




const ItemDetailContainer = ({ }) => {

    const [detalle, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()
    console.log(id)

    const { productId } = useParams()
    // console.log(productId)

    useEffect(() => {
        getProduct(productId)
            .then(data => setProduct(data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [productId])


    return (
        <div>
            {loading ? <h2>Loading...</h2> :
                <ItemDetail detalle={detalle} />
            }
        </div>
    )
}

export default ItemDetailContainer 
