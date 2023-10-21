import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import useMyContext from '../hooks/useMyContext';


const Navbar = () => {
    const { user, logOut } = useMyContext();
    const [darkMood, setDarkMood] = useState(true);

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addProduct'>Add Product</NavLink></li>
        <li><NavLink to='/myCart'>My Cart</NavLink></li>
    </>

    const handleLogOut = () => {
        logOut()
        .then(() => {
            console.log("LogOut done.");
            toast.success("LogOut Successful.")
        })
        .catch(err => {
            console.log(err);
            toast.error("LogOut Failed.");
        })
    }
    return (
        <div className="navbar bg-base-100 flex justify-between font-semibold">
            {/* nav start */}
            <div className="">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="flex-1">
                    <Link to='/' className="normal-case text-2xl"><img className='w-48' src="https://i.ibb.co/XDknKWL/Main-LOGO.png" alt="" /></Link>
                </div>
            </div>
            {/* nav mid */}
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-3">
                    {links}
                </ul>
            </div>
            {/* nav end */}
            <div className='space-x-3'>
                <div onClick={() => setDarkMood(!darkMood)} className='text-3xl flex w-fit'>{
                    darkMood ?
                        <MdDarkMode></MdDarkMode> :
                        <MdLightMode></MdLightMode>
                }</div>
                <div className='menu'>{
                    user ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li className='mx-auto text-2xl'>{user.displayName}</li>
                                <li onClick={handleLogOut} className='btn btn-secondary'>Logout</li>
                            </ul>
                        </div>:
                        <li><NavLink to='/login'>Login</NavLink></li>
                }</div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>

    );
};

export default Navbar;