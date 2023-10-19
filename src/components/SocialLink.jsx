import { AiFillGoogleCircle as AiFillGoogleCircle, AiTwotoneMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SocialLink = () => {
    return (
        <button className='text-3xl flex'>
            <p className='w-full'>Login with: </p>
            <div className='flex'>
                <Link to='/login'><AiTwotoneMail className='text-5xl ml-5'></AiTwotoneMail></Link>
                <AiFillGoogleCircle className='text-5xl ml-5'></AiFillGoogleCircle>
            </div>
        </button>
    );
};

export default SocialLink;