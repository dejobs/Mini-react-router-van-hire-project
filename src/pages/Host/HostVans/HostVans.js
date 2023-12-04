import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./HostVans.css"

const HostVans = () => {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const hostVansElements = vans.map(van => (
        <Link
            to={`/host/vans/${van.id}`}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}</p>
                </div>
            </div>

        </Link>
    ))

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {vans.length > 0 ? (
                    <div>
                        {hostVansElements}
                    </div>
                ) : (
                    <h2>Loading...</h2>
                )}
            </div>
        </section>

        
    );
}

export default HostVans;