import "./NavBar.css"
import Brand from "../Brand/Brand"
import CartWidget from "../Cart/CartWidget"
import List from "../List/List"

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