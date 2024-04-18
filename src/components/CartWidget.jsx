import "../css/Cart.css"
import CartIcon from "./CartIcon"

function CartWidget() {
    return (
        <div className="carrito">
            <CartIcon ancho={40} alto={40}/>
            <span>3</span>
        </div>
    )

}

export default CartWidget