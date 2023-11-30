import { Link, Outlet } from "react-router-dom";
import classes from "./HostLayouts.module.css";

const HostLayouts = () => {
    return (
        <>
            <nav className={classes["nav-bar"]}>
                <Link to="/host" >Dashboard</Link>
                <Link to="/host/income" >Income</Link>
                <Link to="/host/reviews" >Reviews</Link>
            </nav>
            <Outlet />
        </>

    );
}

export default HostLayouts;