import React, { createContext, useContext, useState } from "react";

export const PostContext = createContext();

export default function PostContextProvider({ children }) {
	const [posts, setPosts] = useState([]);
	const [newPost, setNewPost] = useState({});
	const [banner, setBanner] = useState({});

	return (
		<PostContext.Provider value={{ posts, setPosts, newPost, setNewPost, banner, setBanner }}>
			{children}
		</PostContext.Provider>
	);
}