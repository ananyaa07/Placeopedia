import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [ismobileopen, setmobileopen] = useState(false);
  useEffect(()=>{
    console.log();
  },[])
  const toggle = () => {
    setmobileopen(!ismobileopen);
  };
  return (
		<div>
			<div className=" bg-transparent mt-0 hidden lg:block ">
				<nav className="bar mt-0  px-6 py-4 flex space-x-80 w-auto text-lg font-medium justify-end text-gray-600 ">
					
					<ul className="hidden lg:flex space-x-12 w-auto mr-64 justify-center items-center ">
						<li>
							{window.location.pathname === "/login" && (
								<button className="bg-white px-8 py-2 rounded-3xl text-black font-semibold">
									<Link to="/login">Login</Link>
								</button>
							)}
							{window.location.pathname !== "/login" && (
								<a className="text-black  px-8 py-2 font-semibold">
									<Link to="/login">Login</Link>
								</a>
							)}
						</li>
						<li>
							{window.location.pathname === "/signup" && (
								<button className="bg-white px-8 py-2 rounded-3xl text-black font-semibold">
									<Link to="/signup">Register</Link>
								</button>
							)}
							{window.location.pathname !== "/signup" && (
								<a className="text-black  px-8 py-2 font-semibold">
									<Link to="/signup">Register</Link>
								</a>
							)}
						</li>
					</ul>
				</nav>
			</div>
			<div>
				
			</div>
		</div>
	);
}