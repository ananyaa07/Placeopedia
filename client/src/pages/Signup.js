import React, { useState } from "react";
import image from "../assets/image.svg";
import { Link, useNavigate } from "react-router-dom";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FiUpload, FiX } from "react-icons/fi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../components/NavbarL";




function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  


 

  return (
    <div className="bg-gradient-to-br from-gray-100 to-white-400">
      <Navbar />

      <div className="block lg:flex items-center justify-center lg:justify-evenly overflow-y-hidden -mt-9">
        <div className="block lg:flex flex-col mt-20  ">
          
          <div className="ml-0 lg:-ml-16">
            <h1 className="text-4xl text-center lg:text-left lg:text-[2.9rem] tracking-wide leading-snug text-black  italic font-[670] ">
              Welcome to  <br /> Placeopedia
            </h1>
            <h2 className="text-center lg:text-left lg:text-lg font-[500] text-gray-500 mt-2 mb-6 whitespace-pre-line">
            A new and promising chapter of productivity <br /> unfolds before us!
            </h2>
          </div>

          {/* image */}
          <div className="relative">
            <img
              className="w-[60%] lg:w-[80%] mt-10 mr-auto ml-auto lg:ml-32 lg:mt-[-4rem] transform -rotate-[10deg]"
              src={image}
              alt="Login Image"
            />
          </div>
        </div>

        {/* form begins here */}

        <form
          className="flex  scale-90 flex-col gap-4 w-[23%] lg:w-[550px] lg:mt-[7.25rem] ml-auto mr-auto lg:ml-0 justify-center mb-4 lg:mr-0"
          style={{ transform: "scale(0.78)" }}
        >
          <div className="flex lg:w-[auto] gap-4 justify-between">
            <div className="flex flex-col w-full">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border bg-gray-200 border-gray-300 rounded-lg"
               
              />
            </div>
          </div>
        
          <div className="flex flex-col">
            <input
              type="text"
              id="branch"
              name="branch"
              placeholder="Branch"
              className="w-full px-4 border py-3 bg-gray-200 border-gray-300 rounded-lg"
              
            />
          </div>

        

          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Enter your email address"
              name="email"
              className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-lg"
             
            />
          </div>

          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Enter short info about yourself"
              name="title"
              className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-lg"
              
            />
          </div>

          <div className="flex flex-col relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Set a password"
              name="password"
              className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-lg pr-10"
             
            />
            <button
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

          <button
            
            type="submit"
            className="w-full mt-2 px-4 py-3 bg-gray-500 text-white font-semibold rounded-lg"
          >
            Create Account
          </button>

          <p className="text-left -mt-1 text-gray-500">
            Already have an account?{" "}
            <a href="#" className="text-black">
              <Link to="/login">Sign in</Link>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
