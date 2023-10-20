import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from '../components/slider';
import ProductCard from '../components/ProductCard';


const BrandDetails = () => {
    const { b_id } = useParams();
    let [brand, setBrand] = useState({});
    const [products, setProducts] = useState([]);
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
        fetch('http://localhost:5000/products')
            .then(resp => resp.json())
            .then(data => setProducts(data));
    }, [b_id]);

    const brandProducts = products.filter(product => product.brand_name === brand.brand_name) || [];

    return (
        <div data-aos="zoom-in">
            <div className='flex flex-col lg:flex-row my-10'>
                <h1 className='text-4xl font-semibold text-center text-primary lg:w-1/3'>{brand.brand_name}</h1>
                <div className='border lg:w-2/3'><Slider product={brandProducts}></Slider>
                </div>
            </div>
            <h2 className='text-2xl text-center'>All Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-base-200 gap-5 py-10 rounded-lg'>{
                brandProducts.map(product => <ProductCard key={product._id} product={product}></ProductCard>)

            }</div>
        </div>
    );
};

export default BrandDetails;