import { useContext } from "react";
import { collection, getFirestore, addDoc, updateDoc, doc } from "firebase/firestore";
import CartContext from "../../context/CartContext";
import { useState } from "react"
import "./order.css"

export default function Order(){

    const { cart, cartTotal, clearCartPostVenta } = useContext(CartContext);

    const [buyer, setBuyer] = useState({
        name: "",
        lastName: "",
        email: "",
    });

    const [idOrdenGuardada, setIdOrdenGuardada] = useState("");
    
    const handleInputChange = (e) =>{
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        const orden = {
            buyer,
            fecha: new Date(), 
            items: cart,
            total: cartTotal,
        }
        const db = getFirestore();
        const ordernesCollection = collection(db,"ordenes");

        addDoc(ordernesCollection, orden).then(({id})=>setIdOrdenGuardada(id));
        
        cart.map((item)=>{
      
            const updateItem= ()=> {
              const db = getFirestore();
              const itemDoc = doc(db, "productos", item.id);
              updateDoc(itemDoc, { stock: (item.stock - item.quantity)});
            }
      
            updateItem();
        })
        clearCartPostVenta();
    }

return(
    <>  
    {idOrdenGuardada&& (<p>Tu compra fue realizada con éxito. Tú número de orden de compra es {idOrdenGuardada}</p>)}
        <div className="ordenDeCompra">
            <div className="tituloOrden">
                <h1>Finaliza tu compra</h1>
                <h4>Completa tus datos personales</h4>
            </div>
            <div className="formularioOrden">
                <form>
                    <label>Nombre</label>
                    <input type="text" name="name" id="nombre" value={buyer.name} onChange={handleInputChange}/>
                    <label>Apellido</label>
                    <input type="text" name="lastName" id="apellido" value={buyer.lastName} onChange={handleInputChange}/>
                    <label>Correo</label>
                    <input type="text" name="email" id="correo" value={buyer.email} onChange={handleInputChange}/>
                    <button type="submit" onClick={handleSubmit}>Comprar</button>
                </form>
            </div>
        </div>
    </>
 )

}
