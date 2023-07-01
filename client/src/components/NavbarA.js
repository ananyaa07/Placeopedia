import React, { useState } from "react";
import image from "../assets/logohome.png";
import { Link } from "react-router-dom";
import { useContext,useEffect } from "react";
import { UserContext } from "../utils/UserContext";
import { useNavigate } from "react-router-dom";


const NavbarH = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const {user, setIsLoggedIn} = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
  }, []);

  const logOut = () => {
    localStorage.removeItem("jwt_token");
    setIsLoggedIn(false);
    navigate("/");
  };

  

  return (
    <body className="bg-blue-500">
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <div class="flex items-center sm-hidden">
          <img class="h-16" src={image} alt="Logo" />
          <Link to="/">
            <a
              class="text-lg font-medium hover:text-gray-600 text-black leading-none ml-2"
              href="#"
            >
              Placeopedia
            </a>
          </Link>
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
            isMenuOpen
              ? "hidden"
              : "absolute top-1/2 right-5 transform -translate-y-1/2 -translate-x-1/2"
          } lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6`}
        >
          <li className="hidden sm:block">
            <Link to="/home">
              <a
                className="text-lg font-medium text-black hover:text-gray-600"
                href="#"
              >
                Home
              </a>
            </Link>
          </li>
          <li className="text-gray-300"></li>

          <li className="hidden sm:block">
          

              <a
                className="text-lg font-medium hover:text-gray-600 text-black"
                href="#"
                onClick={logOut}
              >
                Logout
              </a>
           
          </li>
          <li className="text-gray-300"></li>
        </ul>
      </nav>
      <div
        className={`navbar-menu relative z-50 ${isMenuOpen ? "" : "hidden"}`}
      >
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link to="/">
                  {" "}
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/login">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Logout
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </body>
  );
};

export default NavbarH;
