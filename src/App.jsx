import "./css/Body.css"
import Layout from "./components/Layout"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Product from "./components/Product/Product"

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoria" element={<ItemListContainer/>} />
          <Route path="/product/:productId" element={<Product/>} />
          <Route path="/cart" element={<h1>Carrito</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
