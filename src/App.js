import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a JoCommerce"}/>
      <ItemCount title={"PC Lenovo"} stock={'10'}/>
    </>
  )
}

export default App
