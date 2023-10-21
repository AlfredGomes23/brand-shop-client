import { FcGoogle } from 'react-icons/fc';
import useMyContext from '../hooks/useMyContext';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLink = () => {
    const { gmailSignIn } = useMyContext();

    //managing auto routing
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const handleSignIn = () => {
        gmailSignIn()
            .then(() => {
                toast.success("Sign In Successful.");

                //navigate to previous route
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err);
                toast.error("Sign In Unsuccessful.");
            })
    }
    return (
        <button className='text-3xl flex'>
            <p className='w-full'>Login with: </p>
            <FcGoogle className='text-7xl ml-5 btn' onClick={handleSignIn}></FcGoogle>
        </button>
    );
};

export default SocialLink;