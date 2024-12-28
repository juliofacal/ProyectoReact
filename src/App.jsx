import './App.css'
import { useState } from "react"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function Titulo({titulo, clase}) {
  return (
    <h1 className={clase}>{titulo ? titulo : "Título"}</h1>
  )
}

function App() {
  const [message, setMessage] = useState("")

  return (
    <>
    <NavBar />
    <main>
      <Titulo titulo="Catálogo" />
    </main>
    <ItemListContainer />
    </>
  )
}

export default App
