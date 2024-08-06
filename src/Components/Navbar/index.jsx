import React from 'react'
import './Navbar.css'
import { BiEnvelope, BiCog, BiBell, BiMenu, BiSearch  } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
export default function Navbar() {
    return (
        <>
        <div className='hamburger-wrapper flex items-center sm:hidden pl-2 sm:pl-4'>
            <BiMenu className='hamburger-icon'/>
        </div>
        <div className='navbar p-4 sm:p-5 w-full flex justify-between'>
            <div className='searchbar w-[160px] sm:w-[280px]'>
                <div className="relative flex items-center w-full rounded-lg p-1.5 focus-within:shadow-lg bg-[#292B2F] overflow-hidden">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                        <BiSearch className='h-5 w-5'/>
                    </div>
                    <input
                        className="peer h-full w-full outline-none text-sm bg-[#292B2F] pr-2"
                        type="text"
                        id="search"
                        style={{ color: 'var(--text-color)' }}
                        placeholder="Search" />
                </div>
            </div>
            <div className='navbar-content flex gap-1 sm:gap-4'>
                <NavLink to="#" className="navbar-link">
                    <BiEnvelope />
                </NavLink>
                <NavLink to="#" className="navbar-link">
                    <BiCog />
                </NavLink>
                <NavLink to="#" className="navbar-link relative">
                    <BiBell />
                    <span className='bell-notification'></span>
                </NavLink>
                <NavLink to="#" className='profile-wrapper flex gap-2 items-center'>
                    <div className='profile ml-2 sm:ml-3'>
                        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" className='profile-image' />
                    </div>
                </NavLink>
            </div>
        </div>
        </>
    )
}
