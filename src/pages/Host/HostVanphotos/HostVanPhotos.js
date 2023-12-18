import { useOutletContext } from "react-router-dom";
import "./HostVanPhotos.css"

const HostVanPhotos = () => {
    const {currentVan} = useOutletContext()

    return ( 
        <img src={currentVan.imageUrl} className="host-van-detail-image" />
     );
}
 
export default HostVanPhotos;