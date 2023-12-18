import { useLocation, Link, useLoaderData } from "react-router-dom";
import classes from "./VanDetail.module.css";
import { getVans } from "../../Api";

export function loader({ params }) {
  return getVans(params.id);
}

const VansDetail = () => {
  const van = useLoaderData();

  const location = useLocation();
  console.log(location);

  const search = location.state?.search || ""; //Read about optical chaining (?.)
  const type = location.state?.type || "all";

  return (
    <>
      <Link to={`/vans/${search}`} relative="path" className="back-button">
        &larr;<span>Back to {type} vans</span>
      </Link>

      <div className={classes["van-detail-container"]}>
        {
          <div className={classes["van-detail"]}>
            <img alt={van.name} src={van.imageUrl} />
            <i
              className={`${classes["van-type"]} ${van.type} ${classes.selected}`}
            >
              {van.type}
            </i>
            <h2>{van.name}</h2>
            <p className={classes["van-price"]}>
              <span>${van.price}</span>/day
            </p>
            <p>{van.description}</p>
            <button className={classes["link-button"]}>Rent this van</button>
          </div>
        }
      </div>
    </>
  );
};

export default VansDetail;

/**
 * 
 * 
  <h3 className={classes.navBack}
   onClick={() => navigate(`/vans/${location.state.search}`)}>
   <ArrowLeft size={15} /><span>Back to all vans</span></h3>
 */
