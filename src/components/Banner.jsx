import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 400
        });
    }, []);
    return (
        <div className="hero min-h-fit bg-base-200 rounded-xl py-10" data-aos="zoom-in">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <p className="text-xl font-medium">Welcome to,</p>
                    <h1 className="text-5xl font-bold my-5">Brand_Shop</h1>
                    <p className="text-lg font-medium">Browser your favorite products from different different brands.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;