import Brand from "../Brand/Brand";
import List from "../List/List";
import RedesSociales from "../RedesSociales/RedesSociales";
import "./Footer.css"

export default function Footer(){
    return (
        <footer className="footer">
            <div className="columna1">
                <Brand/>
            </div>
            <div className="columna2">
                <List/>
            </div>
            <div className="columna3">
                <RedesSociales/>
            </div>
        </footer>
    );
}