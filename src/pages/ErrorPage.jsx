import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const ErrorPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 200
        });
    }, []);

    return (
        <div>
            <Navbar></Navbar>
            <img className="rounded-lg lg:w-[100vh] mx-auto" src="https://i.ibb.co/jVTZ7QT/404-error-img.jpg" alt="404 Error" data-aos="zoom-in" />
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;