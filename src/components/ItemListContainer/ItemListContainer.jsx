import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import { getProducts, getProductByCategory } from "../../mock/asyncMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer() {

    const {categoria} = useParams();
    const [products, setProducts] = useState([]);
    const [cargando, setCargando] = useState(true);

    if(categoria != null){
        console.log(categoria)

        useEffect(()=>{
            getProductByCategory(categoria)
            .then((data) => setProducts(data))
            .finally(() => setCargando(false));
        }, [categoria]);

        if (cargando) return <h1>Cargando...</h1>

        console.log(products)

        return(
        <div className="contenedor--principal">
            <ItemList products={products} />
        </div>)

    } else {

        useEffect(()=>{
            getProducts()
            .then((data) => setProducts(data))
            .finally(()=>setCargando(false));
        }, [categoria]);
    
        if(cargando) return <h1>Cargando...</h1>
    
        return (
            <div className="contenedor--principal">
            <ItemList products={products} />
            </div>
        )
    }

    
}

export default ItemListContainer;