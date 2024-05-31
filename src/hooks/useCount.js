import { useState } from "react";

export default function useCount(initialValue=0){
    const [count, setCount] = useState(initialValue);

    const incrementar = ()=>{
        setCount(count+1);
    }

    const decrementar = ()=>{
        setCount(count-1);
    }

    const reset = ()=>{
        setCount(initialValue);
    }

    return {count, incrementar, decrementar, reset};
}