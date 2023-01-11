import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import Loader from '../../components/Loader/Loader'




const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()


    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'productos', productId)

        getDoc(queryDoc)
            .then(resp => setProduct({ id: resp.id, ...resp.data() }))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }, [productId])


    return (
        <div className='card__detail--container'>
            {loading ? <Loader /> : <ItemDetail product={product} />}
        </div>
    )
}

export default ItemDetailContainer 