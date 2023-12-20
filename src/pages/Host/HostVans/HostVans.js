import { Link, useLoaderData } from "react-router-dom";
import "./HostVans.css";
import { getHostVans } from "../../../Api";
import { requireAuth } from "../../../utilis";

export async function loader({request}) {
  await requireAuth(request)
  return getHostVans();
}

const HostVans = () => {
  const vans = useLoaderData();

  const hostVansElements = vans.map((van) => (
    <Link
      to={van.id} // to={`/host/vans/${van.id}`} Relative link
      key={van.id}
      className="host-van-link-wrapper"
    >
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`photo-Sof-${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {vans.length > 0 ? <div>{hostVansElements}</div> : <h2>Loading...</h2>}
      </div>
    </section>
  );
};

export default HostVans;
