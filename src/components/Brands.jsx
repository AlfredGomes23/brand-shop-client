
import { useEffect, useState } from "react";
import BrandCard from "../components/BrandCard";

const Brands = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('https://server-brand-shop-react-auth-mongodb.vercel.app/brands')
            .then(resp => resp.json())
            .then(data => setBrands(data));
    }, []);
    return (
        <div className='my-5 bg-base-200 rounded-xl'>
            <h1 className='text-3xl md:text-4xl font-semibold text-center pt-5'>Brands</h1>
            <div className='border w-1/5 mx-auto'></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5">{
                brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
            }</div>
        </div>
    );
};

export default Brands;