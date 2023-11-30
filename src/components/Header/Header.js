import classes from "./Header.module.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className={classes["main-nav"]}>
            <Link to="/vans"><h3>#vanlife</h3></Link>
            <div className={classes.link}>
                <Link to="/host" >Host</Link>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
            </div>
        </header>
    );
}

export default Header;