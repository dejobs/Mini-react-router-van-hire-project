import { useOutletContext } from "react-router-dom";
import "./HostVanPricing.css"

const HostVanPricing = () => {
    const {currentVan} = useOutletContext()
    return ( 
        <h3 className="Host-van-price">${currentVan.price}<span>/day</span></h3>
     );
}
 
export default HostVanPricing;