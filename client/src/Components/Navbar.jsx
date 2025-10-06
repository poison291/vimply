import { FaGithub } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="relative flex items-center h-16  max-w-7xl ml-30">
  
        <div className="flex items-center space-x-2">
          <img src="/icon.png" alt="Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-teal-600">Vimply</h1>
        </div>

        
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6 font-semibold text-gray-700 ">
          <Link to="#features" className="hover:text-teal-600">
            Features
          </Link>
          <Link to="/info" className="hover:text-teal-600">
            Info
          </Link>
          <Link to="/support" className="hover:text-teal-600">
            Support
          </Link>
        </div>

    
        <div className="flex ml-auto">
          <FaGithub className="w-7 h-7 hover:text-teal-600 cursor-pointer" />
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
