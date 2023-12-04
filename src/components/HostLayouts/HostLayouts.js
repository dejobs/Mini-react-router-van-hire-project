import { NavLink, Outlet } from "react-router-dom";
import "./HostLayouts.css";

const HostLayouts = () => {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <>
            <nav className="nav-bar">
                <NavLink to="/host"
                    end
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Dashboard
                </NavLink>
                <NavLink to="/host/income"
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Income
                </NavLink>
                <NavLink to="/host/vans"
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Vans
                </NavLink>
                <NavLink to="/host/reviews"
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>

    );
}

export default HostLayouts;