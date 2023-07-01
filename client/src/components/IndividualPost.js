import React, { useContext, useEffect, useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
// import post from "../assets/post.png"
import post from "../assets/post.png";
import blank from "../assets/blank_profile.jpeg";
import profile from "../assets/profile.png";
import axios from "axios";
import {
	faFacebook,
	faTwitter,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbarhome from "./Navbarhome";
import { Link, useParams } from "react-router-dom";
import { Divider, message } from "antd";
import ArticleLoader from "./Skeleton_Post";
import moment from "moment";
import { UserContext } from "../utils/context/UserContext";
import { getPost } from "../utils/API/posts";

export default function IndividualPost() {

	const [user, setUser] = useState({});
	let postId = useParams().id;
	const [post, setPost] = useState({});
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
		const getUser = async (id) => {
			try {
				// console.log(`Owner ID : ${id}`);
				axios({
					method: "get",
					url: `http://localhost:3001/user/${post.post.ownerId}`,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}).then((response) => {
					setUser(response.data);
				});
			} catch (error) {
				console.error(error);
			}
		};

		if (post.post) getUser(post.post.owner);
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
			<Navbarhome />
			{loading && <ArticleLoader />}
			{post.post && (
				<div className=" lg:w-[70%] mr-auto ml-auto mt-12">
					<img
						src={post.url}
						className=" ml-auto mr-auto w-[95%] max-h-96 object-contain"
					></img>
					<div className="flex items-center space-x-4 mt-4 lg:mt-12 lg:mb-6 mb-4 px-24">
						{user.url && (
							<img src={user.url} alt="" className="h-8 w-8 rounded-full" />
						)}
						<p className="text-xs lg:text-sm text-slate-600">
							{user.user && (
								<Link to={`/user/${user.user._id}`}>{user.user.name}</Link>
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
