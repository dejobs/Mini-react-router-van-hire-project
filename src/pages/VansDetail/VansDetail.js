import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import classes from "./VanDetail.module.css";
import { ArrowLeft } from "phosphor-react";

const VansDetail = () => {
    const [van, setVan] = useState(null);

    const navigate = useNavigate();

    const params = useParams();
    console.log(params);

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    return (
        <>
            <h3 className={classes.navBack} onClick={() => navigate("/vans")}><ArrowLeft size={15} /><span>Back to all vans</span></h3>
            <div className={classes["van-detail-container"]}>

                {van ? (
                    <div className={classes["van-detail"]}>
                        <img alt={van.name} src={van.imageUrl} />
                        <i className={`${classes["van-type"]} ${van.type} ${classes.selected}`}>
                            {van.type}
                        </i>
                        <h2>{van.name}</h2>
                        <p className={classes["van-price"]}><span>${van.price}</span>/day</p>
                        <p>{van.description}</p>
                        <button className={classes["link-button"]}>Rent this van</button>
                    </div>

                ) : <h2>Loading...</h2>}

            </div>
            <footer className={classes["footer"]}>
                <p>©2022 #VANLIFE</p>
            </footer>
        </>



    );
}

export default VansDetail;