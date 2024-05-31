import "./css/Body.css"
import Layout from "./components/Layout"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Product from "./components/Product/Product"
import CartProvider from "./context/CartProvider"
import CartContainer from "./components/Cart/CartContainer"
import Order from "./components/Order/Order"

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:categoria" element={<ItemListContainer/>} />
            <Route path="/product/:productId" element={<Product/>} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/ordenDeCompra" element={<Order />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </Layout>
      </CartProvider> 
    </BrowserRouter>
  )
}

export default App;
