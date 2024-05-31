import { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./CartContainer.css";
import { Link } from "react-router-dom";



export default function CartContainer(){
    const { cart, clearCart, cartTotal, removeFromCart, addToCart } = useContext(CartContext);

    return(
        <div className="cartContainer">
            <div className="tituloTicket">
                <h1>***fresco***</h1>
                <h2>Frutas y Verduras a Domicilio</h2>
                <button className="borrarTicket" onClick={clearCart}>Borrar Ticket</button> 
            </div>
            <hr />
            <div className="itemTicket">
                {cart.length === 0 ? (
                    <p>No hay productos en el carrito.</p>
                    ) : (
                    cart.map((item) => (
                        <>
                            <div key={item.id} className="cartItem">
                            <img src={item.ubicacionImagen} alt={item.ubicacionImagen} className="imgCart" />
                            <div>
                                <p>Nombre: {item.nombre}</p>
                                <p>Precio: ${item.precio}</p>
                                <p>Cantidad: {item.quantity} {item.medida}</p>
                            </div>
                            <button className="modificarCantidad" onClick={() => addToCart(item, 1)}>+</button>
                            <button className="modificarCantidad" onClick={() => removeFromCart(item.id, 1)}>-</button>
                            </div>
                            <hr />
                        </>
                    ))
                )}
            </div>
            <hr />
            <div className="totalCarrito">
                <h3>***TOTAL***</h3>
                <h3>${cartTotal}</h3>
                <Link to="/ordenDeCompra">
                    <button className="botonComprar">Comprar</button>
                </Link>
            </div>
        </div>    
    )


 }