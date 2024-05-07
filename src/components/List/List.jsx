import "./List.css"
import {NavLink} from "react-router-dom"

function List() {
    return (
        <div className="list">
            <ul>
              <li><NavLink className={({isActive})=>(isActive)? "active-link": ""} to="/">Home</NavLink></li>
              <li><NavLink className={({isActive})=>(isActive)? "active-link": ""} to="/category/fruta">Frutas</NavLink></li>
              <li><NavLink className={({isActive})=>(isActive)? "active-link": ""} to="/category/verdura">Verduras</NavLink></li>
            </ul>
        </div>
    )
}

export default List