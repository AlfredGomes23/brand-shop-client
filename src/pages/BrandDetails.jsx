import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from '../components/slider';
import ProductCard from '../components/ProductCard';


const BrandDetails = () => {
    const { b_id } = useParams();
    let [brand, setBrand] = useState({})
    useEffect(() => {
        AOS.init({
            duration: 400
        });
        fetch('http://localhost:5000/brands')
            .then(resp => resp.json())
            .then(data => {
                const brand = data.find(b => b._id === b_id);
                brand && setBrand(brand);
            });
    }, [b_id]);


    return (
        <div data-aos="zoom-in">
            <div className='flex flex-col lg:flex-row my-10'>
                <h1 className='text-4xl font-semibold text-center lg:w-1/3'>{brand.brand_name}</h1>
                <div className='border lg:w-2/3'><Slider></Slider></div>
            </div>
            <h2 className='text-2xl text-center'>All Products</h2>
            <div>{
                <ProductCard></ProductCard>
            }</div>
        </div>
    );
};

export default BrandDetails;