import { Fragment } from "react";
import classes from "./Home.module.css"

const Home = () => {
    return ( 
        <Fragment>
            <main className={classes["main-body"]}>
                <div className={classes["main-text"]}>
                    <h1>You got the travel plan, we<br /> got the travel vans.</h1>
                    <p>
                        Add adventure to your life by joining the #vanlife movement.
                    </p>
                    <p>
                        Rent the perfect van to make your perfect road trip.
                    </p>
                </div>
                <div className={classes["directory"]}>
                    <p>Find your van</p>
                </div>
            </main>
            <footer className={classes["footer"]}>
                <p>©2022 #VANLIFE</p>
            </footer>
            
        </Fragment>
        
     );
}
 
export default Home;