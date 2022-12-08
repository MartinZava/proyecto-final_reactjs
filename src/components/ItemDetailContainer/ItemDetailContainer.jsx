import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../../helpers/gFetch'
import ItemDetail from '../ItemDetail/ItemDetail'




const ItemDetailContainer = ({ }) => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()


    useEffect(() => {
        gFetch()
            .then(data => setProduct(data.find(product => product.id === parseInt(productId))))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        // getProduct(productId)
        //     .then(data => setProduct(data))
        //     .catch(error => console.log(error))
        //     .finally(() => setLoading(false))
    }, [productId])



    return (
        <div>
            {loading ? <h2>Loading...</h2> :
                <ItemDetail detalle={product} />
            }
        </div>
    )
}

export default ItemDetailContainer 
