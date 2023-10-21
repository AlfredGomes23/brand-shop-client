import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from '../components/ProductCard';
import Slider from '../components/Slider';

import { Helmet } from "react-helmet-async";


const BrandDetails = () => {
    let [brand, setBrand] = useState({});
    const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(true);

    const { b_id } = useParams();

    useEffect(() => {
        AOS.init({
            duration: 400
        });
        fetch('https://server-brand-shop-react-auth-mongodb.vercel.app/brands')
            .then(resp => resp.json())
            .then(data => {
                const brand = data.find(b => b._id === b_id);
                brand && setBrand(brand);
            });
        fetch('https://server-brand-shop-react-auth-mongodb.vercel.app/products')
            .then(resp => resp.json())
            .then(data => setProducts(data));
        // setLoading(false);
    }, [b_id]);

    const brandProducts = products.filter(product => product.brand_name == brand.brand_name) || [];


    // if (loading)
    //     return <h1 className="flex justify-center flex-col items-center h-[50vh]">
    //         <span className="loading loading-spinner loading-lg"></span>
    //         <p className="text-2xl">Loading...</p>
    //     </h1>;
    return (
        <div data-aos="zoom-in">
            <Helmet>
                <title>{brand.brand_name}</title>
            </Helmet>
            {
            brandProducts.length == 0 ?
                <div>
                    <h1 className='text-4xl font-semibold text-center'>{brand.brand_name}</h1>
                    <br />
                    <p className='text-4xl font-semibold text-center text-secondary'>No Product Available Yet.</p>
                </div> :
                <div>
                    <h1 className='text-4xl font-semibold text-primary text-center py-5'>{brand.brand_name}</h1>

                    <div className='mx-auto w-fit p-10  bg-base-300 rounded-lg'><Slider products={brandProducts}></Slider>
                    </div>

                    <h2 className='text-4xl text-center my-10'>All Products</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-base-200 gap-5 py-10 rounded-lg mx-auto'>{
                        brandProducts.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                    }</div>
                </div>
        }
        </div>
    );
};

export default BrandDetails;