import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import { Avatar, Divider, message } from "antd";
import ArticleLoader from "../components/Post_Skeleton";
import { getPost } from "../utils/API/posts";
import NavbarP from "../components/NavbarP";
import {UserContext} from "../utils/UserContext.js"; 

export default function IndividualPost() {

	const [user, setUser] = useState({});
	let postId = useParams().id;
	const [post, setPost] = useState({});
	const { baseUrl } = useContext(UserContext);
	const token = localStorage.getItem("jwt_token");

	const [loading, setLoading] = useState(true);

	const getPostCaller = async (id) => {
		try {
			const res = await getPost(id);
			setPost(res);
			setLoading(false);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getPostCaller(postId);
	}, []);

	useEffect(() => {
		const getUser = async () => {
			try {
				axios({
					method: "get",
					url: `${baseUrl}/user/${post.post.ownerId}`,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}).then((response) => {
					setUser(response.data.user);
				});
			} catch (error) {
				console.error(error);
			}
		};

		if (post.post) getUser();
	}, [post]);

	const [isCopied, setIsCopied] = useState(false);
	async function copyTextToClipboard(text) {
		if ("clipboard" in navigator) {
			return await navigator.clipboard.writeText(text);
		} else {
			return document.execCommand("copy", true, text);
		}
	}
	const handleCopyClick = () => {
		copyTextToClipboard(window.location.href)
			.then(() => {
				setIsCopied(true);
				setTimeout(() => {
					setIsCopied(false);
				}, 1500);

				message.success("Post Url copied to clipboard");
			})
			.catch((err) => {
				message.error("Some Error Occured");
				console.log(err);
			});
	};

	return (
		<>
			<NavbarP/>
			{loading && <ArticleLoader />}
			{post.post && (
				<div className=" lg:w-[70%] mr-auto ml-auto mt-12">
					<img
						src={post.url}
						className=" ml-auto mr-auto w-[95%] max-h-96 object-contain"
					></img>
					<div className="flex items-center space-x-4 mt-4 lg:mt-12 lg:mb-6 mb-4 px-24">
						{user.name && (
							<Avatar>
								{user.name.substring(0, 1).toUpperCase()}
							</Avatar>
						)}
						<p className="text-xs lg:text-sm text-slate-600">
							{user.name && (
								<Link to={`/user/${user._id}`}>{user.name}</Link>
							)}
						</p>
					</div>
					<div className="lg:flex space-x-12 lg:place-items-start ">
						<div className="flex lg:flex-col lg:space-y-3 pb-4 lg:pt-2 lg:pb-2 justify-center">
							<FontAwesomeIcon
								icon={faShareNodes}
								className="text-4xl font-thin"
								onClick={handleCopyClick}
							/>
						</div>
						<div className="justify-center ml-auto mr-auto">
							<h2 className="font-extrabold text-2xl lg:text-5xl text-slate-800 lg:leading-[1.25] mr-12 lg:mr-auto">
								{post.post.title}
							</h2>
							<p className="text-slate-600 italic mt-4 mr-12 lg:mr-auto mb-2">
								{post.post.brief}
							</p>

							<Divider></Divider>

							<div
								className="content mb-10"
								dangerouslySetInnerHTML={{ __html: post.post.content }}
							></div>

							{/* comment section */}
						</div>
					</div>
				</div>
			)}
		</>
	);
}
