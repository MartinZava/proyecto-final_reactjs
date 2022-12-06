import { useState, useEffect } from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import './App.css'




function App() {
  return (
    <>
      <NavBar />

      <ItemListContainer greeting={`Hola!`} />
    </>
  );
}

export default App
