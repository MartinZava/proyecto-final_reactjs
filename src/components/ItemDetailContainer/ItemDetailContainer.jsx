import { collection, doc, getDocs, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../../helpers/gFetch'
import ItemDetail from '../ItemDetail/ItemDetail'




const ItemDetailContainer = ({ }) => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()


    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'productos', productId)

        getDocs(queryDoc)
            //.then(resp => console.log(resp))
            //.then(resp => setProduct(resp.doc.find(product => ({ id: product.id, ...product.data() }))))
            .then(resp => setProduct({ id: resp.id, ...resp.data() }))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))



        // gFetch()
        //     .then(data => setProduct(data.find(product => product.id === parseInt(productId))))
        //     .catch(error => console.log(error))
        //     .finally(() => setLoading(false))
    }, [productId])


    return (
        <div>
            {loading ? <h3>Loading...</h3> :
                <ItemDetail product={product} />
            }
        </div>
    )
}

export default ItemDetailContainer 
