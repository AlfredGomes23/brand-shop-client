import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLink from "../components/SocialLink";
import toast from "react-hot-toast";
import useMyContext from "../hooks/useMyContext";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Login = () => {
    const { emailSignIn } = useMyContext();
    
    useEffect(() => {
        AOS.init({
            duration: 400
        });
    }, []);

    //managing auto routing
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value, password = form.password.value;
        console.log(email, password);

        //log in by email
        emailSignIn(email, password)
            .then(r => {
                console.log(r.user);
                toast.success("Login Successful.");

                //navigate to previous route
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err);
                toast.error("Login Unsuccessful.");
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200 rounded-lg">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100" data-aos="flip-left">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            {/* email */}
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
                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-fit mx-auto">Login</button>
                        </div>
                    </form>
                    <div className='mx-auto'>
                        <SocialLink></SocialLink>
                        <p className="font-semibold">New Here? <Link to='/register' className="link link-primary text-lg">Register Here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;