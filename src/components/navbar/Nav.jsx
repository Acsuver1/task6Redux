import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-800 via-gray-900 to-blue-800 p-4 shadow-lg">
    <div className="container mx-auto flex justify-between space-x-12 ">
      <Link
        to="/login"
        className="relative text-white text-lg font-semibold hover:text-pink-400 transition-all"
      >
        Login
        <span className="absolute inset-x-0 bottom-0 h-[2px] bg-pink-400 scale-x-0 transition-transform duration-300 ease-in-out origin-right group-hover:scale-x-100"></span>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-pink-400 rounded-full transform scale-0 transition-transform duration-300 group-hover:scale-100"></div>
      </Link>
  
      <Link
        to="/profile"
        className="relative text-white text-lg font-semibold hover:text-green-400 transition-all"
      >
        Profile
        <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-400 scale-x-0 transition-transform duration-300 ease-in-out origin-right group-hover:scale-x-100"></span>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full transform scale-0 transition-transform duration-300 group-hover:scale-100"></div>
      </Link>
    </div>
  </nav>
  
  );
};

export default Nav;
