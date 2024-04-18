import "./css/Body.css"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola mundo!" />
    </>
  )
}

export default App
