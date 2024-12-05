import React from 'react';
import { NavLink } from 'react-router-dom';

const Headers = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allVisa'>All Visas</NavLink></li>
        <li><NavLink to='/addVisa'>Add Visa</NavLink></li>
        <li><NavLink to='/myAddedVisa'>My Added Visa</NavLink></li>
        <li><NavLink to='/visaApplication'>My visa Application</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Visa</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to='/login' className='mr-3 bg-orange-500 text-white py-1 px-5 rounded-sm '>Login</NavLink>
                <NavLink to='/register' className=' bg-orange-500 text-white py-1 px-5 rounded-sm'>Register</NavLink>
            </div>
        </div>
    );
};

export default Headers;