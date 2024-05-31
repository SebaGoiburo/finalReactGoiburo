import { useContext } from "react"
import "./Cart.css"
import CartIcon from "./CartIcon"
import { Link } from "react-router-dom"
import CartContext from "../../context/CartContext"

function CartWidget() {
 const {cart} = useContext(CartContext);

 const calcularTotal =cart.reduce((acc,item)=> acc + item.quantity, 0);

    return (
        <div className={`${cart.length === 0 ? "hidden" : "carrito"}`}>
            <Link to="/cart">
                <CartIcon />
                <span>{`${cart.length}`}</span>
            </Link>
        </div>
    )

}

export default CartWidget