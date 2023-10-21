import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto font-inter">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <div className="font-semibold">
                <Toaster position="bottom-center" reverseOrder={true} />
            </div>
        </div>
    );
};

export default Root;