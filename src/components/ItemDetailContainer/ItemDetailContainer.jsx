import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../../helpers/gFetch'
import { getProduct } from '../GetProduct/GetProduct'
import ItemDetail from '../ItemDetail/ItemDetail'




const ItemDetailContainer = ({ }) => {

    const [detalle, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { productId, id } = useParams()
    console.log(id)

    // console.log(productId)

    useEffect(() => {

        if (id) {
            gFetch()
                .then(data => setProduct(data.filter(prod => prod.categoria === id)))
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        } else {
            getProduct(productId)
                .then(data => setProduct(data))
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        }
    }, [id])



    return (
        <div>
            {loading ? <h2>Loading...</h2> :
                <ItemDetail detalle={detalle} />
            }
        </div>
    )
}

export default ItemDetailContainer 
