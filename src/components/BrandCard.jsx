import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const BrandCard = ({ brand }) => {
    const { _id, brand_name, brand_img } = brand;

    useEffect(() => {
        AOS.init({
            duration: 200
        });
    }, []);

    return (
        <Link to={`/brandPage/${_id}`} className="card w-72 bg-base-100 shadow-xl mx-auto" data-aos="zoom-out">
            <figure className="px-5 pt-10">
                <img src={brand_img} alt={brand_name} className="rounded-xl h-28" />
            </figure>
                <h2 className="card-title mx-auto pb-5 text">{brand_name}</h2>
        </Link>
    );
};

export default BrandCard;