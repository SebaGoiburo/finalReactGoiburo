import "./Brand.css"
import { Link } from "react-router-dom";

function Brand(){

    return (
        <Link to="/">
            <img className="marca" src="https://github.com/SebaGoiburo/redFresco/blob/main/src/main/resources/static/img/fresco.png?raw=true"/>
        </Link>
    )
}

export default Brand