import React from 'react'
import './Sidebar.css'
import { BiLogoMicrosoft, BiSolidHome, BiBarChartSquare, BiWalletAlt } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { BsBagCheck } from "react-icons/bs";
import { HiClipboardCheck } from "react-icons/hi";
export default function Sidebar() {

    return (
        <div className='sidebar py-3'>
            <NavLink to="#">
                <BiLogoMicrosoft className='logo pl-1' />
            </NavLink>
            <nav className='nav mt-8 flex flex-col gap-9'>
                <div className='nav-link active flex flex-col items-center'>
                    <NavLink to="#">
                        <BiSolidHome className='nav-icon' />
                    </NavLink>
                </div>
                <div className='nav-link flex flex-col items-center'>
                    <NavLink to="#">
                        <BiBarChartSquare className='nav-icon' />
                    </NavLink>
                </div>
                <div className='nav-link flex flex-col items-center'>
                    <NavLink to="#">
                        <HiClipboardCheck className='nav-icon' />
                    </NavLink>
                </div>
                <div className='nav-link flex flex-col items-center'>
                    <NavLink to="#">
                        <BiWalletAlt className='nav-icon' />
                    </NavLink>
                </div>
                <div className='nav-link flex flex-col items-center'>
                    <NavLink to="#">
                        <BsBagCheck className='nav-icon' />
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}
