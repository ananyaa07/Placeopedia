import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";
import Opportunities from "./pages/Opportunities";
import Placements from "./pages/Placements";
import NewPost from "./pages/NewPost";
import PostContextProvider from "./utils/PostContext";
import Profile from "./pages/Profile";
import { UserContext } from "./utils/UserContext";
import { useContext } from "react";
import Admin from "./pages/adminOpportunities";
import { useEffect } from "react";
import IndividualPost from "./pages/IndividualPost";

const App = () => {
	const { isLoggedIn, user } = useContext(UserContext);
	
	return (
		<BrowserRouter>
			<PostContextProvider>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/opportunities" element={<Opportunities />} />

					{isLoggedIn ? (
						<>
							<Route path="/signup" element={<Signup />} />
							<Route path="/home" element={<Placements />} />
							<Route path="/newpost" element={<NewPost />} />
							<Route path="/user/:id" element={<Profile />} />
							<Route path="/post/:id" element={<IndividualPost />} />
						</>
					) : null}

					{isLoggedIn && user.isAdmin===true ? (
						<>
							<Route path="/admin" element={<Admin />} />
						</>	
					) : null}
					<Route path="*" element={<Homepage />} />
				</Routes>
			</PostContextProvider>
		</BrowserRouter>
	);
};

export default App;
