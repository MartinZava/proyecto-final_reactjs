import { useState, useEffect } from 'react'
import { gFetch } from '../../../helpers/gFetch'

import './ItemListContainer.css'


const ItemListContainer = ({  }) => {

    const [ products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        gFetch()
        // .then(respuesta => respuesta)
        .then(data => setProduct(data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])


    console.log(products)
    return (
        <div id='itemListContainer'>
        { loading ? <h2>Loading...</h2> :
        products.map( product => <li key={product.id}></li>)
        }
        </div>
    )

}

export default ItemListContainer