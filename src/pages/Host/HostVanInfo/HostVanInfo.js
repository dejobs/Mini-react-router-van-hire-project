import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
    const { currentVan } = useOutletContext()

    return (
        <section>
            <h4>{currentVan.name}</h4>
            <h4>{currentVan.type}</h4>
            <h4>{currentVan.description}</h4>
            <h4>Visibility: Public</h4>
        </section>
    );
}

export default HostVanInfo;