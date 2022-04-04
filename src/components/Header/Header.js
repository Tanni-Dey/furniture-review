import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='py-5 bg-orange-400 flex justify-between px-10 items-center font-sans text-white'>
            <h4 className='text-2xl'>Furniture</h4>
            <div className='text-xl'>
                <NavLink className='px-5' to="/">Home</NavLink>
                <NavLink className='px-5' to="/reviews">Reviews</NavLink>
                <NavLink className='px-5' to="/dashboard">Dashboard</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
                <NavLink className='px-5' to="/about">About</NavLink>
            </div>
        </div>
    );
};

export default Header;