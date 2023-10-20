import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const BeAPart = () => {
    useEffect(() => {
        AOS.init({
            duration: 400
        });
    }, []);

    return (
        <div className="hero min-h-screen bg-base-200 rounded-lg">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Be a Part Of Us</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" data-aos="flip-right">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Message</span>
                            </label>
                            <textarea name="message" className="input input-bordered h-28"   id="" cols="30" rows="5"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Contact Us</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BeAPart;