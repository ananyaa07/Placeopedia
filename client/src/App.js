import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";
import Opportunities from "./pages/Opportunities";
import Placements from "./pages/Placements";
import NewPost from "./pages/NewPost";
import BlogContextProvider from "./utils/BlogContext";
import Profile from "./components/Profile";
import { UserContext } from "./utils/UserContext";
import { useContext } from "react";

const App = () => {
	const { isLoggedIn } = useContext(UserContext);

	return (
		<BrowserRouter>
			<BlogContextProvider>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/opportunities" element={<Opportunities />} />

					{isLoggedIn ? (
						<>
							<Route path="/signup" element={<Signup />} />
							<Route path="/home" element={<Placements />} />
							<Route path="/newpost" element={<NewPost />} />
							<Route path="/profile" element={<Profile />} />
						</>
					) : null}
					<Route path="*" element={<Homepage />} />
				</Routes>
			</BlogContextProvider>
		</BrowserRouter>
	);
};

export default App;
