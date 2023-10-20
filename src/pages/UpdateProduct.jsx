import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";


const UpdateProduct = () => {
    const { id } = useParams();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;

        const url = form.url.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.url.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const updatedProduct = { url, name, brand, type, price, rating };

        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(resp => resp.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    toast.success("Product updated successfully.");
                }
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Update Product</h1>
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        {/* url & name */}
                        <div className="flex gap-5">
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
                        <div className="flex gap-5">
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
                        <div className="flex gap-5">
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
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
            <div><Toaster
                position="top-right"
                reverseOrder={false}
            /></div>
        </div>
    );
};

export default UpdateProduct;