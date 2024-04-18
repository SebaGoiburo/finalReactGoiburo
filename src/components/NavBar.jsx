import "../css/NavBar.css"
import Brand from "./Brand"
import CartWidget from "./CartWidget"
import List from "./List"

function NavBar() {
    return (
        <nav>
            <Brand/>
            <List />
            <CartWidget/>
        </nav>
    )
}

export default NavBar 