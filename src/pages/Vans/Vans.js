import classes from "./Vans.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



const Vans = () => {
    const [vans, setVans] = useState([])
    
    useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])
 
   const vanElement = vans.map(van => (
    <div key={van.id} className={classes["van-tile"]}>
        <Link to={`/van/${van.id}`}>
            <img src={van.imageUrl} alt={van.name} />
            <div className={classes["van-info"]}>
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`${classes["van-type"]} ${van.type}  ${classes.selected}` } >{van.type}</i>
        </Link>
    </div>
   ))
   

    return ( 
      <div className={classes["van-list-container"]}>
        <h1>Explore our van options</h1>
            <div className={classes["van-list"]}>
                {vanElement}
            </div>
      </div>
     );
}
 
export default Vans;