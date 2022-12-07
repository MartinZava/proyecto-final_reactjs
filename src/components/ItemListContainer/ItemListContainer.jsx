import { useState, useEffect } from 'react'
import { gFetch, productos } from '../../../helpers/gFetch'
import ItemList from '../ItemList/ItemList'

import './ItemListContainer.css'


const ItemListContainer = ({  }) => {

    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        gFetch()
        .then(data => setProduct(data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])


    return (
        <div id='itemListContainer'>
        { loading ? <h2>Loading...</h2> :
        <ItemList productos={productos} />
        }
        </div>
    )

}

export default ItemListContainer