import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import ItemList from '../../components/ItemList/ItemList'
import './ItemListContainer.css'


const ItemListContainer = ({ }) => {

    const [productos, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()


    useEffect(() => {

        const db = getFirestore()
        const queryCollection = collection(db, 'productos')

        if (id) {
            const queryFiltro = query(queryCollection, where('categoria', '==', id))

            getDocs(queryFiltro)
                .then(resp => setProducts(resp.docs.map(product => ({ id: product.id, ...product.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            getDocs(queryCollection)
                .then(resp => setProducts(resp.docs.map(product => ({ id: product.id, ...product.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [id])


    return (
        <div id='itemListContainer'>
            {loading ? <h3>Loading...</h3> :
                <ItemList productos={productos} />
            }
        </div>
    )

}

export default ItemListContainer

