import React, { useEffect, useState } from "react";
import image from "../assets/logohome.png";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import { useContext } from "react";
import axios from "axios";


export default function NavbarP({setPosts}) {
  const { user, setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.log(user);
  }, []);

  const logOut = () => {
    localStorage.removeItem("jwt_token");
    setIsLoggedIn(false);
    navigate("/");
  };

  const executeSearch = async () => {
    axios
      .get(`http://localhost:3000/api/v1/search/${searchQuery}`, {
        headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
				},
      })
      .then((response) => {
        setPosts(response.data.posts);
        console.log(response.data.posts);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <a href="https://flowbite.com/">
              <img src={image} className="h-16 mr-3" alt="Logo" />
            </a>
            <Link to={`/user/${user._id}`}>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                {user.name}
              </span>
            </Link>
          </div>

          <div className="flex items-center flex-grow">
            <ul className="flex justify-center flex-grow space-x-6">
              <li>
                <Link to="/home">
                  <a
                    href="#"
                    className="text-gray-900 hover:text-blue-700 dark:text-white"
                  >
                    Home
                  </a>
                </Link>
              </li>

              {user.isAdmin && (
                <li>
                  <Link to="/admin">
                    <a
                      href="#"
                      className="text-gray-900 hover:text-blue-700 dark:text-white"
                    >
                      Admin
                    </a>
                  </Link>
                </li>
              )}

              <li>
                <Link to="/opportunities">
                  <a
                    href="#"
                    className="text-gray-900 hover:text-blue-700 dark:text-white"
                  >
                    Opportunities
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div
                    className="text-gray-900 hover:text-blue-700 dark:text-white"
                    onClick={logOut}
                  >
                    Logout
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div className="ml-3">
            <input
              type="text"
              className="px-2 py-1 border rounded-md"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  executeSearch();
                }
              }
              }
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
