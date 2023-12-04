import { Params, useParams } from "react-router-dom";
import { useState, useEffect } from "react";




const HostVansDetail = () => {
    const param = useParams()

    const [van, setVan] = useState({})

    useEffect(() => {
        fetch(`/api/host/vans/${param.id}`)
        .then(res => res.json())
        .then(data => setVan(data.van))
    }, [param.id])
    return (
        <>
            <h1>HostVansDetail</h1>
            
            

        </>

    );
}

export default HostVansDetail;