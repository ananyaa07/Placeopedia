import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
	const [user, setUser] = useState(
        localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
    );
	const [isLoggedIn, setIsLoggedIn] = useState(
		localStorage.getItem("jwt_token") ? true : false
	);
	

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				isLoggedIn,
				setIsLoggedIn,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
