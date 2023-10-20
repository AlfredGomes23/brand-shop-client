import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast"

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const { p_id } = useParams();
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(resp => resp.json())
            .then(data => {
                setProduct(data.find(p => p._id === p_id) || {});
            });
    }, [p_id]);
    const handleAddCart = () => {
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.insertedId)
                    toast.success("Product Added.")
            });
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${product.img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <p className="text-2xl border-secondary border p-2 rounded-lg mr-3 w-fit">{product.brand_name}</p>
                    <h1 className="mb-5 text-5xl font-bold">
                        {product.name}
                        <span className="badge badge-secondary ml-3">${product.price}</span>
                        <span className="text-primary text-xl border border-primary p-1 rounded-lg ml-3">{product.product_type}</span>
                        <span className="text-base text-amber-400 ml-10">Rating: {product.rating}</span>
                    </h1>
                    <p className="mb-5 text-lg">{product.description}</p>
                    <button onClick={handleAddCart} className="btn btn-accent">Add To Cart</button>
                </div>
            </div>
            <div><Toaster
                position="top-right"
                reverseOrder={false}
            /></div>
        </div>
    );
};

export default ProductDetails;