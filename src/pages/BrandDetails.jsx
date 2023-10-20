import { useParams } from "react-router-dom";


const BrandDetails = () => {
    const {id} = useParams();
    return (
        <div>
            Brand Details: {id}
        </div>
    );
};

export default BrandDetails;