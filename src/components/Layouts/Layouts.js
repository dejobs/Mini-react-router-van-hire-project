import { Outlet } from "react-router-dom"
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import classes from "./Layout.module.css"

const Layouts = () => {


   
    return (
        <nav className={classes["full-page"]}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />

        </nav>
    );
}

export default Layouts;