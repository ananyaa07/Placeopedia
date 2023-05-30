import React, { useContext, useState } from "react";
import image from "../assets/image.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../components/NavbarL";


function Login({ setLoggedIn }) {
	

  const [showPassword, setShowPassword] = useState(false);


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  

  return (
    <div className="bg-gradient-to-br from-gray-100 to-white-400 ">
        <Navbar/>
      <div className="block lg:flex items-center justify-center min-h-[90vh] overflow-y-hidden">
        <div className="block lg:flex flex-col mt-5 ">
         
          <div className="ml-0 lg:-ml-16 ">
            <h1 className="text-4xl text-center lg:text-left lg:text-[2.9rem] tracking-wide leading-snug text-black  italic font-[670] ">
              Welcome to  <br />Placeopedia
            </h1>
            <h2 className="text-center lg:text-left lg:text-lg font-[500] text-gray-500 mt-2 mb-6 whitespace-pre-line">
            A new and promising chapter of productivity <br /> unfolds before us!
            </h2>
          </div>

        
          <div className="relative">
            <img
              className="w-[60%] lg:w-[80%] transform -rotate-[10deg] mt-10 mr-auto ml-auto lg:ml-32 lg:mt-[-4rem]"
              src={image}
              alt="Login Image"
            />
          </div>
        </div>

        
        <div className="ml-auto lg:mt-0 mr-auto lg:w-[23%] flex justify-center lg:block lg:ml-[17.5rem] lg:mr-0">
          <form className="flex flex-col gap-4 mb-4">
            <div className="flex flex-col">
              <input
                type="text"
                id="email"
                name="email"
               
                placeholder="Enter your email address"
                className="w-full px-4 py-3 bg-gray-200 border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-gray-200 border-gray-300 rounded-lg"
              />
              <button
                type="button"
                className="absolute top-1/2 transform -translate-y-1/2 right-7"
                onClick={handleTogglePassword}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-600" />
                ) : (
                  <FaEye className="text-gray-600" />
                )}
              </button>
            </div>

            <div className="flex justify-between items-center">
              <div className="items-center hidden lg:flex">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                <label>Keep me logged in</label>
              </div>
              
                Forgot password?
             
            </div>
           
            <button
              type="submit"
              className="w-full mt-1 lg:mt-3 px-4 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-lg"
            >
              SIGN IN
            </button>

           
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

