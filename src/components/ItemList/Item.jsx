import ItemCount from "../ItemCount/ItemCount";
import useCount from "../../hooks/useCount";
import "./Item.css"
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Item({ item }){
    const {count, incrementar, decrementar, reset} = useCount(0);
    const { addToCart } = useContext(CartContext);

    return(
        <div className="card">
            <Link to={`/product/${item.id}`} key={item.id}>
                <div className="imagen">
                    <img className="imagen--producto" src={item.ubicacionImagen} alt={item.nombre} />
                </div>
                <div className="descripcion">
                    <h3 className="tituloProducto">
                        {item.nombre}
                    </h3>
                    <h4 className="precio">
                        ${item.precio}
                    </h4>
                    <h6>Stock: {item.stock}</h6>
                </div>
            </Link>
            <div className="controlesCard">
                <div className="contador">
                    <ItemCount stock={item.stock} cantidad={count} incrementar={incrementar} decrementar={decrementar}/>
                </div>
                <div className="agregar--producto">
                    <button className="boton--agregar--producto" onClick={() => {addToCart(item, count); reset()}} disabled={count === 0}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}