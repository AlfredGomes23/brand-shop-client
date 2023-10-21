import useMyContext from "../hooks/useMyContext";
import { Navigate,  useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user, loading } = useMyContext();
    const location = useLocation();

    //loading
    if (loading)
        return <h1 className="flex justify-center flex-col items-center h-[50vh]">
            <span className="loading loading-spinner loading-lg"></span>
            <p className="text-2xl">Loading...</p>
        </h1>;
    
    if (user) {
        return <>{children}</>
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;