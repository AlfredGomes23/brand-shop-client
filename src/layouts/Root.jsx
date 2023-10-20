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
            <div><Toaster
                position="top-right"
                reverseOrder={false}
            /></div>
        </div>
    );
};

export default Root;