import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";


const MyCart = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cart')
            .then(resp => resp.json())
            .then(data => setProducts(data))
    }, []);
    const handleDelete = id => {
        fetch(`http://localhost:5173/myCart/${id}`,{
            method: 'DELETE'
        })
        .then(resp=>resp.json())
        .then(data=>{
            if(data.deletedCount) toast.error("Deleted."); 
        })
    }
    return (
        <div>
            <h1 className="text-accent text-4xl mb-10 text-center">Your Products:</h1>
            {/* cards */}
            <div className="flex flex-col gap-3">{
                products.map(product =>
                    <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto" key={product._id}>
                        <figure><img src={product.img} alt={product.name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-primary text-3xl">{product.name}</h2>
                            <p className="text-xl">{product.product_type}<span className="badge badge-accent ml-5">${product.price}</span></p>
                            <div className="card-actions justify-end">
                                <button onClick={()=> handleDelete(product._id)} className="btn btn-secondary">Delete</button>
                            </div>
                        </div>
                        <div><Toaster
                            position="top-right"
                            reverseOrder={false}/></div>
                    </div>)
            }</div>
        </div>
    );
};

export default MyCart;