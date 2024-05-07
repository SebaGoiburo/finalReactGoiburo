import "./ItemCount.css"

export default function ItemCount ({stock, cantidad, incrementar, decrementar}){
    return (
        <div className="itemCount--container">
            <div className="itemCount--counter--container">
                <button className="itemCount--button" onClick={decrementar} disabled={cantidad<=0}>-</button>
                <span className="itemCount--button">{cantidad}</span>
                <button className="itemCount--button" onClick={incrementar} disabled={cantidad>=stock} >+</button>
            </div>
        </div>
    )
}