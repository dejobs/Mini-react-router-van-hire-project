import { NavLink, Outlet, Link, useLoaderData } from "react-router-dom";
import "./HostVansDetail.css";
import { getHostVans } from "../../../Api";
import { requireAuth } from "../../../utilis";

export async function loader({ params, request }) {
  await requireAuth(request);
  return getHostVans(params.id);
}

export default function HostVanDetail() {
  //const { id } = useParams();

  const currentVan = useLoaderData();

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <section className="host-van-detail-section">
        <div className="host-van-detail-layout-container">
          <div className="host-van-detail">
            <img src={currentVan.imageUrl} />
            <div className="host-van-detail-info-text">
              <i className={`van-type van-type-${currentVan.type}`}>
                {currentVan.type}
              </i>
              <h3>{currentVan.name}</h3>
              <h4>
                ${currentVan.price}
                <span>/day</span>
              </h4>
            </div>
          </div>
        </div>
        <nav>
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Detail
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Photos
          </NavLink>
        </nav>

        <div>
          <Outlet context={{ currentVan }} />
        </div>
      </section>
    </>
  );
}
