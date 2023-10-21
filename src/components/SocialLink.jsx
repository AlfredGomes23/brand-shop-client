import { FcGoogle } from 'react-icons/fc';

const SocialLink = () => {
    return (
        <button className='text-3xl flex'>
            <p className='w-full'>Login with: </p>
            <FcGoogle className='text-5xl ml-5'></FcGoogle>
        </button>
    );
};

export default SocialLink;