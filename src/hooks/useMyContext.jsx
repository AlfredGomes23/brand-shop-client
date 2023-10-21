import { useContext } from "react";
import { AuthContext } from "../Provider/authProvider";


const useMyContext = () => {
    const all = useContext(AuthContext);
    return all;
};

export default useMyContext;