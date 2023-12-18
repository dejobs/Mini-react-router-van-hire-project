import classes from "./Header.module.css"
import { Link, NavLink } from "react-router-dom";
import {IdentificationBadge} from "phosphor-react"
import imgIcon from "../../Assets/avatar-icon.png"

const Header = () => {

/* You can use either inline style like the one bellow or className to style a Navlink */
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    const fakeLogout = () => {
        localStorage.removeItem("loggedin")
    }

    return (
        <header className={classes["main-nav"]}>
            <Link to="/vans"><h3>#vanlife</h3></Link>
            <div className={classes.link}>
                <NavLink
                    to="/host"
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Host
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    About
                </NavLink>
                <NavLink
                    to="/"
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/login"
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    <img src={imgIcon} />
                </NavLink>
                <button onClick={fakeLogout}>x</button>
            </div>
        </header>
    );
}

export default Header;