import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../../helpers/gFetch'
import ItemList from '../ItemList/ItemList'

import './ItemListContainer.css'


const ItemListContainer = ({ }) => {

    const [productos, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()


    useEffect(() => {
        if (id) {
            gFetch()
                .then(data => setProduct(data.filter(prod => prod.categoria === id)))
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        } else {
            gFetch()
                .then(data => setProduct(data))
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        }
    }, [id])

    // console.log(id)


    return (
        <div id='itemListContainer'>
            {loading ? <h2>Loading...</h2> :
                <ItemList productos={productos} />
            }
        </div>
    )

}

export default ItemListContainer