import { useState } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    const [darkMood, setDarkMood] = useState(true);
    const [user, setUser] = useState(true);
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addProduct'>Add Product</NavLink></li>
        <li><NavLink to='/myCart'>My Cart</NavLink></li>
    </>
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
                        <li><NavLink to='/login'>Login</NavLink></li> :
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://i.ibb.co/FmcfYpF/Education.png" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link>Name</Link></li>
                                <li><Link>Logout</Link></li>
                            </ul>
                        </div>
                }</div>
            </div>
        </div>

    );
};

export default Navbar;