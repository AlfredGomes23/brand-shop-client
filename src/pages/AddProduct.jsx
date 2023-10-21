import toast from "react-hot-toast";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const AddProduct = () => {
    useEffect(() => {
        AOS.init({
            duration: 400
        });
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;

        const url = form.url.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.url.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const product = { img: url, name, brand_name: brand, product_type: type, price, rating, description };

        fetch('https://server-brand-shop-react-auth-mongodb.vercel.app/products', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                if (data.insertedId)
                    toast.success("Product Added Successfully.");
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col md:flex-row -col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Add Product</h1>
                </div>
                <div className="card flex flex-col md:flex-row -shrink-0 w-full shadow-2xl bg-base-100" data-aos="flip-up">
                    <form onSubmit={handleSubmit} className="card-body">
                        {/* url & name */}
                        <div className="flex flex-col md:flex-row  gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Image</span>
                                </label>
                                <input type="text" placeholder="url" name="url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* brand & type */}
                        <div className="flex flex-col md:flex-row  gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="text" placeholder="Brand" name="brand" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Type</span>
                                </label>
                                <input type="text" placeholder="Type" name="type" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* price & rating */}
                        <div className="flex flex-col md:flex-row  gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="Price" name="price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" placeholder="Rating" name="rating" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* description */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" placeholder="short description" name="description" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;