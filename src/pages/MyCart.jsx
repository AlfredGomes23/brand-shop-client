import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import swal from 'sweetalert';



const MyCart = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cart')
            .then(resp => resp.json())
            .then(data => setProducts(data))
    }, []);

    const handleDelete = _id => {
        // console.log(_id);

        //sweetheart for confirmation
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    //delete for db by server
                    fetch(`http://localhost:5000/cart/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(resp => resp.json())
                        .then(data => {
                            if (data.deletedCount){
                                toast.error("Deleted.");
                            }
                        });
                        const remaining = products.filter(product => product._id !==_id);
                        setProducts(remaining);
                }
                else {
                    toast("Canceled.")
                }
            });

    }
    return (
        <div>
            <h1 className="text-accent text-4xl mb-10 text-center">Your Products:</h1>
            {/* cards */}
            <div className="flex flex-col gap-3">{
                products.map( product =>
                    //card start here
                    <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto" key={product._id}>
                        {/* card bg */}
                        <figure>
                            <img src={product.img} alt={product.name} />
                        </figure>
                        {/* texts */}
                        <div className="card-body">
                            <h2 className="card-title text-primary text-3xl">{product.name}</h2>

                            <p className="text-xl">
                                {product.product_type}
                                <span className="badge badge-accent ml-5">${product.price}</span>
                            </p>
                            {/* btn */}
                            <div className="card-actions justify-end">
                                <button onClick={() => handleDelete(product._id)} className="btn btn-secondary">Delete</button>
                            </div>
                        </div>
                    </div>)
            }</div>
        </div>
    );
};

export default MyCart;