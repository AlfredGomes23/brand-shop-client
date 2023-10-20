/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
    return (
        <div className="card w-80 lg:w-auto mx-auto bg-base-100 shadow-xl">
            <figure className="h-56"><img className="rounded-xl" src={product.img} alt={product.name} /></figure>
            <div className="flex flex-col px-5">
                <h2 className="card-title h-20">{product.name}
                    <div className="badge badge-secondary ml-5">${product.price}</div>
                    <div className="card-actions">
                        <div className="badge badge-outline">{product.brand_name}</div>
                        <div className="badge badge-outline w-fit h-fit">{product.product_type}</div>
                    </div>
                </h2>
                <div className="flex justify-around mb-5 items-center">
                    <Link to={`/productDetails/${product._id}`} className="btn btn-primary">Details</Link>
                    <Link to={`/updateProduct/${product._id}`} className="btn btn-secondary">Update</Link>
                    <span className="text-primary-focus border border-primary rounded-lg p-1">Rating: {product.rating}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;