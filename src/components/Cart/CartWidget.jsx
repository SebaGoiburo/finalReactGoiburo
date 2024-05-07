import "./Cart.css"
import CartIcon from "./CartIcon"
import { Link } from "react-router-dom"

function CartWidget() {
    return (
        <div className="carrito">
            <Link to="/cart">
                <CartIcon />
                <span>3</span>
            </Link>
        </div>
    )

}

export default CartWidget