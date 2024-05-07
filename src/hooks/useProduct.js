import { useEffect, useState } from "react";
import { getProductByCategory } from "../mock/asyncMock";


export default function useProduct(category){
const [product, setProduct] = useState(undefined);
const [isLoading, setIsLoading] = useState(true);

useEffect(()=>{
    getProductByCategory(category)
    .then((data)=>setProduct(data))
    .finally(setIsLoading(false));
},[]);

return {product, isLoading};

}