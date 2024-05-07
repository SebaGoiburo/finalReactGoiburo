import ItemCount from "../ItemCount/ItemCount";
import useCount from "../../hooks/useCount";
import "./Item.css"

export default function Item({ item }){
    const {count, incrementar, decrementar} = useCount(0);
    
    const agregarAlCarrito = (nombreDeItem, cantidadAComprar) =>{
        console.log("Nombre del Producto: "+ nombreDeItem.nombre)
        console.log("Cantidad a Comprar: "+cantidadAComprar)
    };

    console.log({count, item})

    return(
        <div className="card">
            <div className="imagen">
                <img className="imagen--producto" src={item.ubicacionImagen} alt={item.nombre} />
            </div>
            <div className="descripcion">
                <h3 className="tituloProducto">
                    {item.nombre}
                </h3>
                <h4 className="precio">
                    {item.precio}
                </h4>
                <div className="controlesCard">
                    <div className="contador">
                        <ItemCount stock={item.stock} cantidad={count} incrementar={incrementar} decrementar={decrementar}/>
                    </div>
                    <div className="agregar--producto">
                        <button className="boton--agregar--producto" onClick={()=>agregarAlCarrito(item, count)}>Agregar al carrito</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}