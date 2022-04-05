import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsList } from 'react-icons/bs';
import { TiDeleteOutline } from 'react-icons/ti';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='py-5 bg-orange-400 flex justify-between items-center font-sans text-white'>
            <h4 className='text-2xl pl-10'>Furniture</h4>
            <div onClick={() => setOpen(!open)} className='text-2xl md:hidden'>
                {
                    !open ? <BsList /> : <TiDeleteOutline />
                }
            </div>
            <div className={`text-xl bg-orange-400 w-full lg:w-1/2 md:static absolute ${open ? 'top-12' : 'top-[-150px]'}`}>

                <NavLink className={({ isActive }) => {
                    const active = isActive ? 'text-blue-900' : 'text-white';
                    return `block md:inline px-5 ${active}`
                }
                } to="/">Home</NavLink>
                <NavLink className={({ isActive }) => {
                    const active = isActive ? 'text-blue-900' : 'text-white';
                    return `block md:inline px-5 ${active}`
                }
                } to="/reviews">Reviews</NavLink>
                <NavLink className={({ isActive }) => {
                    const active = isActive ? 'text-blue-900' : 'text-white';
                    return `block md:inline px-5 ${active}`
                }} to="/dashboard">Dashboard</NavLink>
                <NavLink className={({ isActive }) => {
                    const active = isActive ? 'text-blue-900' : 'text-white';
                    return `block md:inline px-5 ${active}`
                }} to="/blogs">Blogs</NavLink>
                <NavLink className={({ isActive }) => {
                    const active = isActive ? 'text-blue-900' : 'text-white';
                    return `block md:inline px-5 ${active}`
                }
                } to="/about">About</NavLink>
            </div>
        </div>
    );
};

export default Header;