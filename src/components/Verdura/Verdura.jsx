import { getProductByCategory } from "../../mock/asyncMock";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

export default function Verduras(){
    const {categoria} = useParams();
    const [verduras, setVerduras] = useState([]);
    const [cargando, setCargando] = useState(true);

    console.log(categoria)

    useEffect(()=>{
        getProductByCategory(categoria)
        .then((data) => setVerduras(data))
        .finally(() => setCargando(false));
}, []);

if (cargando) return <h1>Cargando...</h1>

console.log(verduras)

return(
    <div className="contenedor--principal">
        <ItemList products={verduras} />
    </div>
)
}