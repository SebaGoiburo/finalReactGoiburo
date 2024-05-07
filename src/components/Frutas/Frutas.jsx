import { getProductByCategory } from "../../mock/asyncMock";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

export default function Frutas(){
    const {categoria} = useParams();
    const [frutas, setFrutas] = useState([]);
    const [cargando, setCargando] = useState(true);

    console.log(categoria)

    useEffect(()=>{
        getProductByCategory(categoria)
        .then((data) => setFrutas(data))
        .finally(() => setCargando(false));
}, []);

if (cargando) return <h1>Cargando...</h1>

console.log(frutas)

return(
    <div className="contenedor--principal">
        <ItemList products={frutas} />
    </div>
)
}