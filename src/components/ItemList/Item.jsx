import ItemCount from "../ItemCount/ItemCount";
import useCount from "../../hooks/useCount";
import "./Item.css"
import CartContext from "../../context/CartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

export default function Item({ item }){
    const {count, incrementar, decrementar, reset} = useCount(0);
    const { addToCart } = useContext(CartContext);
    const [ stock, setStock] = useState(item.stock);

    
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
                    <h5>Stock: {stock}</h5>
                </div>
            </Link>
            <div className="controlesCard">
                <div className="contador">
                    <ItemCount stock={item.stock} cantidad={count} incrementar={incrementar} decrementar={decrementar}/>
                </div>
                <div className="agregar--producto">
                    <button className="boton--agregar--producto" onClick={() => {addToCart(item, count); reset(); setStock(item.stock-count)}} disabled={count === 0}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}