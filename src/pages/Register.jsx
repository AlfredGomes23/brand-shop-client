import SocialLink from "../components/SocialLink";


const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200 rounded-xl">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form className="card-body flex flex-col">
                        {/* name, url */}
                        <div className="flex flex-col md:flex-row gap-5">
                            {/* name */}
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            {/* url */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="url" placeholder="URL" className="input input-bordered" required />
                            </div>
                            {/* checkbox */}
                        </div>
                        {/* email, password */}
                        <div className="flex flex-col md:flex-row  gap-5">
                            {/* email */}
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            {/* checkbox */}
                        </div>
                        <div className="mt-3">
                            <input type="checkbox" name="checkbox" id="" required /> <span>Accept our terms and condition</span></div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className='px-4 py-2 mx-auto'>
                        <SocialLink></SocialLink>
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Register;