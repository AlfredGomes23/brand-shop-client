/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ProductCard = ({product}) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="h-56"><img className="rounded-xl" src={product.img} alt={product.name}/></figure>
            <div className="flex flex-col px-5">
                <h2 className="card-title h-14">{product.name}<div className="badge badge-secondary ml-5">${product.price}</div>
                <div className="card-actions">
                    <div className="badge badge-outline">{product.brand_name}</div>
                    <div className="badge badge-outline">{product.product_type}</div>
                </div>
                </h2>
                <p className="h-20">{product.description}</p>
                <div className="flex justify-around mb-5">
                    <Link to={`/addProduct/${product._id}`} className="btn btn-primary">Details</Link>
                    <Link to={`/updateProduct/${product._id}`} className="btn btn-secondary">Update</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;