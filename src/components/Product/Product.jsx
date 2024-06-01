import { useParams, Link } from "react-router-dom"
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import "./Product.css"
import { useContext} from "react";
import CartContext from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import useCount from "../../hooks/useCount";


export default function Product(){

    const {productId} = useParams();
    const [product, setProduct] = useState({});
    const [cargando, setCargando] = useState(true);
    const { addToCart } = useContext(CartContext);
    const {count, incrementar, decrementar, reset} = useCount(0);

    useEffect(()=>{
        const db = getFirestore();
        const productRef = doc(db, "productos", productId);

        getDoc(productRef).then((snapshot) => {
            if (!snapshot.exists()) {
                console.log("No hay productos en la base de datos");
                setProduct(null); // Maneja el caso donde no existe el producto
            } else {
                setProduct({ id: snapshot.id, ...snapshot.data() });
            }
        })
        .catch((error) => {
            console.error("Error obteniendo el producto: ", error);
        })
        .finally(() => setCargando(false));
}, [productId]);

if (cargando) return <h1>Cargando...</h1>

console.log(product)

return(
    <div className="card-single-product">
        <div className="img-single-product">
            <img className="img-single-product-single" src={product.ubicacionImagen} alt={product.nombre} />
        </div>
        <div className="description-single-product">
            <div className="title-single-product">
                <h2>{product.nombre}</h2>
            </div>
            <div className="price-single-product">
                <h3>${product.precio}</h3>
                <h4>Stock:{product.stock}</h4>
            </div>
            <div className="controlesCard">
                <div className="contador">
                    <ItemCount stock={product.stock} cantidad={count} incrementar={incrementar} decrementar={decrementar}/>
                </div>
                <div className="agregar--producto">
                    <Link to="/cart">
                        <button className="boton--agregar--producto" onClick={() => {addToCart(product, count); reset(); setProduct(product.stock-count)}} disabled={count === 0}>Agregar al carrito</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

}