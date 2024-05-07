import Item from "./Item"
import { Link } from "react-router-dom";


export default function ItemList({ products }){
 return(
    <div className="container--lista--de-productos">
        {products.map((product)=>(
            <Link to={`/product/${product.id}`} key={product.id}>
                <Item item={product}/>
            </Link>            
        ))}
    </div>
 );
}