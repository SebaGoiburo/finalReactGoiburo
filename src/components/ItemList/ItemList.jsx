import Item from "./Item"


export default function ItemList({ products }){
 return(
    <div className="container--lista--de-productos">
        {products.map((product)=>(
                <Item item={product}/>      
        ))}
    </div>
 );
}