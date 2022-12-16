import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './conteiners/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './conteiners/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './conteiners/CartContainer/CartContainer'

import './App.css'




function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes >
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/categorias/:id' element={<ItemListContainer />} />
                <Route path='/detalle/:productId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<CartContainer />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
