import classes from "./Vans.module.css";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { useState } from "react";
import { getVans } from "../../Api";

export function loader() {
  return getVans();
}

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const vans = useLoaderData();
  console.log(vans);

  const typeFilter = searchParams.get("type");

  const handleFilterChange = (key, value) => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  const vanElement = displayedVans.map((van) => (
    <div key={van.id} className={classes["van-tile"]}>
      <Link
        to={`/van/${van.id}`}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      >
        <img src={van.imageUrl} alt={van.name} />
        <div className={classes["van-info"]}>
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i
          className={`${classes["van-type"]} ${classes[van.type]}  ${
            classes.selected
          }`}
        >
          {van.type}
        </i>
      </Link>
    </div>
  ));

  // if (error) {
  //  return <h1>There was an error: {error.statusText}</h1>;
  //}

  return (
    <div className={classes["van-list-container"]}>
      <h1>Explore our van options</h1>
      <div className={classes["van-type-query-button"]}>
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`${classes["van-type"]} ${classes["simple"]} ${
            typeFilter === "simple" ? classes["selected"] : ""
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`${classes["van-type"]} ${classes["rugged"]} ${
            typeFilter === "rugged" ? classes["selected"] : ""
          }`}
        >
          Rugged
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`${classes["van-type"]} ${classes["luxury"]} ${
            typeFilter === "luxury" ? classes["selected"] : ""
          }`}
        >
          Luxury
        </button>

        {typeFilter ? (
          <button
            onClick={() => handleFilterChange("type", null)}
            className={classes["van-type"]}
          >
            Clear filter
          </button>
        ) : null}
      </div>
      <div className={classes["van-list"]}>{vanElement}</div>
    </div>
  );
};

export default Vans;

/**** ALTERNATIVE TO BUTTON*********/
/***
                <Link
                    to="?type=simple"
                    className="van-type simple"
                >Simple
                </Link>
                <Link
                to="?type=luxury"
                    className="van-type rugged"
                >Luxury
                </Link>
                <Link
                    to="?type=rugged"
                    className="van- type luxury"
                >Rugged</Link>
                <Link
                    to="."
                    className="van-type-clear"
                >clear</Link>
 */
