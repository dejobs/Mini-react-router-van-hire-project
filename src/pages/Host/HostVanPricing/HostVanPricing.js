import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
    const {currentVan} = useOutletContext()
    return ( 
        <h3 className="Host-van-price">${currentVan.price}</h3>
     );
}
 
export default HostVanPricing;