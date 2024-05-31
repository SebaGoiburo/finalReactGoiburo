import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer() {

    const {categoria} = useParams();
    const [products, setProducts] = useState([]);
    const [cargando, setCargando] = useState(true);

    if(categoria != null){

        useEffect(()=>{
            const db = getFirestore();
            const q = query(collection(db , "productos"),where("categoria", "==" , categoria));

            getDocs(q).then((snapshot)=>{
                if(snapshot.size === 0){
                    console.log("No hay productos en la base de datos");
                }
                setProducts(snapshot.docs.map((doc)=> ({
                    id: doc.id,
                    ...doc.data(),
                  })))
            })
            .finally(() => setCargando(false));
        }, [categoria]);

        if (cargando) return <h1>Cargando...</h1>

    } else {

        useEffect(()=>{
            const db = getFirestore();
            const productsCollection = collection(db, "productos");
            getDocs(productsCollection).then((snapshot)=>{
                if(snapshot.size === 0){
                    console.log("No hay productos en la base de datos");
                }
                setProducts(snapshot.docs.map((doc)=> ({
                    id: doc.id,
                    ...doc.data(),
                  })))
            })
            .finally(()=> setCargando(false));
        }, [categoria]);
    
        if(cargando) return <h1>Cargando...</h1>
    
        
    }

    console.log(products);

    return (
        <div className="contenedor--principal">
        <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;