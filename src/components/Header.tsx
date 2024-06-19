import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type HeaderProps = {
    bgColor: string,
    textColor: string
};

const Header = ({ bgColor, textColor }: HeaderProps) => {
    const location = useLocation();

    // Function to determine if the link is active
    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <div className={`flex flex-row items-center justify-center sm:justify-between px-20 py-2 ${bgColor ? `bg-${bgColor}` : ''} ${textColor ? `text-${textColor}` : ''}`}>
            {/* Logo container with link to homepage */}
            <div className="flex">
                <Link to={'/'} className="hover:skew-x-1 transition-all duration-200 ease-in-out">
                    <img src="./images/logo3.png" alt="Logo" className="hidden sm:flex sm:h-auto sm:w-52" />
                </Link>
            </div>
            {/* Navbar */}
            <div className={`flex space-x-6 text-xs sm:text-base`}>
                <Link to={'/'} className={`underline-navbar ${isActive('/') ? 'font-extrabold text-gray-50' : ''}`}>Home</Link>
                <Link to={'/about'} className={`underline-navbar ${isActive('/about') ? 'font-extrabold text-gray-50' : ''}`}>About</Link>
                <Link to={'/upcoming'} className={`underline-navbar ${isActive('/upcoming') ? 'font-extrabold text-gray-50' : ''}`}>Upcoming</Link>
                <Link to={'/past'} className={`underline-navbar ${isActive('/past') ? 'font-extrabold text-gray-50' : ''}`}>Past</Link>
            </div>
        </div>
    );
};

export default Header;
