import React from 'react'
import Item from '../Item/Item'

import './ItemList.css'



const ItemList = ({ productos }) => {

    return (
        <Item productos={productos} />
    )
}

export default ItemList

