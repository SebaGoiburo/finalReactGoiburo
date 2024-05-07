import NavBar from "./NavBar/NavBar"
import Footer from "./Footer/Footer"
import "../css/Body.css"

export default function Layout({children}) {
    return (
        <div className="layout--container">
            <NavBar/>
            <main className="main--container">{children}</main>
            <Footer/>
        </div>
    );
}
