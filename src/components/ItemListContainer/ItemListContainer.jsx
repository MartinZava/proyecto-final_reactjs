import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { gFetch } from '../../../helpers/gFetch'
import ItemList from '../ItemList/ItemList'

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








    // console.log(id)

    // useEffect(() => {
    //     const db = getFirestore()
    //     const queryDoc = doc(db, 'productos', '0n69Qwns3hJWIpcm0p5n')
    //     getDoc(queryDoc)
    //         .then(resp => console.log({ id: resp.id, ...resp.data() }))

    // }, [id])

    // useEffect(() => {
    //     const db = getFirestore()
    //     const queryCollection = collection(db, 'productos')

    //     const queryFiltro = query(queryCollection, where('categoria', '==', id))
    //     //para filtrar en getDocs va queryFiltro
    //     getDocs(queryCollection)
    //         .then(resp => setProducts(resp.docs.map(product => ({ id: product.id, ...product.data() }))))
    //         .catch(err => console.log(err))
    //         .finally(() => setLoading(false))

    // }, [id])
