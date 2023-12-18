import { Link } from "react-router-dom";
import classes from "./NotFountpage.module.css"

const NotFoundPage = () => {
    return ( 
        <div className={classes["page-wrapper"]}>
            <h2>Sorry, the page you were looking was for not found</h2>
            <Link to="/">Return to home</Link>
        </div>
     );
}
 
export default NotFoundPage;