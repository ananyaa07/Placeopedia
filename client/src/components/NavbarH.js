import React, { useState } from 'react';
import image from "../assets/logohome.png"
import { Link } from 'react-router-dom';

const NavbarH = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <body className="bg-blue-500">
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">

      <div class="flex items-center sm-hidden">
    <img class="h-16" src={image} alt="Logo"/>
    <Link to="/"><a class="text-lg font-medium hover:text-gray-600 text-black leading-none ml-2" href="#">
        Placeopedia
    </a></Link>
    
</div>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={toggleMenu}
          >
            <svg
              className="block h-4 w-4  text-black fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>


        <ul
          className={`${
            isMenuOpen ? 'hidden' : 'absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'
          } lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6`}
        >
          <li className='hidden sm:block'>
            <Link to="/"><a className="text-lg font-medium text-black hover:text-gray-600" href="#">
              Home
            </a></Link>
            
          </li>
          <li className="text-gray-300">
           
          </li>

          <li className='hidden sm:block'>
            <Link to="/opportunities"> <a className="text-lg font-medium hover:text-gray-600 text-black" href="#">
            Opportunities
            </a></Link>
           
          </li>
          <li className="text-gray-300">
           
          </li>
          <li className='hidden sm:block'>
            <Link to="/placements"> <a className="text-lg font-medium text-black hover:text-gray-600" href="#">
              Placements
            </a></Link>
           
          </li>
        
          
          
        </ul>

        <a
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
          href="#"
        >
          <Link to="/login"> Sign In</Link>
         
        </a>
       
       <Link to="/signup"> 
       <a
          className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
          href="#"
        >
          Sign up
        </a>
        </Link>
       
      </nav>
      <div className={`navbar-menu relative z-50 ${isMenuOpen ? '' : 'hidden'}`}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <button className="navbar-close" onClick={toggleMenu}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link to="/"> <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  Home
                </a></Link>
               
              </li>
              <li className="mb-1">
                <Link to="/opportunities"><a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  Opportunities
                </a></Link>
                
              </li>
              <li className="mb-1">
                <Link to="/placements"> <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  Placements
                </a></Link>
               
              </li>
              
              
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <Link to="/login">
                 <a
                className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                href="#"
              >
                Sign in
              </a></Link>
             
             <Link to="/signup">
              <a
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                href="#"
              >
                Sign Up
              </a>
              </Link>
              
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2021</span>
            </p>
          </div>
        </nav>
      </div>
    </body>
  );
}

export default NavbarH;