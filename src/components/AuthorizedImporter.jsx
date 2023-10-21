import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AuthorizedImporter = () => {
    useEffect(() => {
        AOS.init({
            duration: 400
        });
    }, []);
    return (
        <div className="text-center my-5 bg-base-200 rounded-lg w-fit p-2 mx-auto">
            <h1 className="text-3xl">We are Authorized Importer of:</h1>
            <div className="grid grid-cols-2 max-w-xs mx-auto gap-5 py-5">
                <p className="text-xl py-1 px-2 bg-base-100 rounded-lg text-secondary font-semibold" data-aos="fade-in">Samsung</p>
                <p className="text-xl py-1 px-2 bg-base-100 rounded-lg text-secondary font-semibold" data-aos="fade-in">MicroSoft</p>
                <p className="text-xl py-1 px-2 bg-base-100 rounded-lg text-secondary font-semibold" data-aos="fade-in">Intel</p>
                <p className="text-xl py-1 px-2 bg-base-100 rounded-lg text-secondary font-semibold" data-aos="fade-in">AMD</p>
            </div>
        </div>
    );
};

export default AuthorizedImporter;