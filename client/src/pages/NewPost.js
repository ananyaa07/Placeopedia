import React, { useEffect, useState, useRef, useContext } from "react";
import { Editor } from "@tinymce/tinymce-react";
import {
	faFacebook,
	faTwitter,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router";
import { PostContext } from "../utils/PostContext";
import {UserContext} from "../utils/UserContext.js"; 

export default function NewPost() {
	const editorRef = useRef(null);
	const { newPost } = useContext(PostContext);
	const { baseUrl } = useContext(UserContext);
	const [selectedFile, setSelectedFile] = useState(null);
	const token = localStorage.getItem("jwt_token");

	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
		console.log(event.target.files[0]);
	};

	const log = async () => {
		if (editorRef.current) {
			const newPostData = {
				...newPost,
				content: editorRef.current.getContent(),
			};
			if (selectedFile) {
				newPostData.bannerImage = selectedFile;
			}
			await submitForm(newPostData);
		}
	};

	const navigate = useNavigate();

	const submitForm = async (data) => {
		try {
			const formData = new FormData();
			for (let key in data) {
				formData.append(key, data[key]);
			}

			console.log("formData : ", formData);

			const response = await axios.post(
				`${baseUrl}/posts/new`,
				formData,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (response.status === 200)
				message.success("Milestone Posted Successfully!");

			navigate("/home");
		} catch (error) {
			message.error("Something went wrong");
			console.error(error);
		}
	};

	return (
		<>
			<div className=" lg:w-[70%] mr-auto ml-auto mt-12">
				{selectedFile && (
					<img
						src={URL.createObjectURL(selectedFile)}
						alt="Selected file"
						className="object-contain ml-auto mr-auto w-[95%] max-h-96"
					/>
				)}
				<div className="flex justify-end">
					<label class="block mt-4">
						<span class="sr-only">Choose profile photo</span>
						<input
							type="file"
							class="block w-full text-sm text-slate-500
							file:mr-4 file:py-2 file:px-4
							file:rounded-full file:border-0
							file:text-sm file:font-semibold
							file:bg-violet-50 file:text-violet-700
							hover:file:bg-violet-100
							"
							onChange={handleFileChange}
							accept="image/*"
						/>
					</label>
				</div>
				{/* <div className="flex items-center mt-4 lg:mt-12 lg:mb-6 mb-4 px-24"></div> */}
				<div className="lg:flex lg:place-items-start mt-2">
					<div className="flex hidden lg:flex-col lg:space-y-3 pb-4 lg:pt-2 lg:pb-2 justify-center">
						<FontAwesomeIcon
							icon={faFacebook}
							className="mr-5 text-blue-600 text-lg lg:text-base"
						/>
						<FontAwesomeIcon
							icon={faTwitter}
							className="mr-5 text-blue-600 text-lg lg:text-base"
						/>
						<FontAwesomeIcon
							icon={faInstagram}
							className="mr-5 text-blue-600 text-lg lg:text-base"
						/>
						<FontAwesomeIcon
							icon={faLinkedin}
							className="mr-5 text-blue-600 text-lg lg:text-basegit"
						/>
					</div>
					<div className="justify-center ml-auto mr-auto">
						<h2 className="font-extrabold text-2xl lg:text-5xl text-slate-800 lg:leading-[1.25] mr-12 lg:mr-auto">
							{newPost.title}
						</h2>
						<p className="text-slate-600 mt-4 mr-12 lg:mr-auto mb-10">
							{newPost.brief}
						</p>

						<Editor
							apiKey="ah9w9dtmhnrt5yhzobg11p0jj9sdldd1x64lj89aipllnqn6"
							onInit={(evt, editor) => (editorRef.current = editor)}
							initialValue="<p>This is the initial content of the editor.</p>"
							init={{
								height: "100vh",
								plugins: [
									"autolink lists advlist link image charmap print preview anchor",
									"searchreplace visualblocks code fullscreen",
									"insertdatetime media table paste code help wordcount quickbars",
								],
								menubar: "file edit view insert format tools table tc help",
								toolbar: [
									"undo redo | styles| bold italic backcolor | " +
										"alignleft aligncenter alignright alignjustify | " +
										"bullist numlist outdent indent | removeformat | code | help",
								],

								content_style:
									"body { font-family:Helvetica,Arial,sans-serif; font-size:17px }",
							}}
						/>
						<div className="flex justify-end">
							<button
								onClick={log}
								class="mt-8 mb-32 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
							>
								Post your Blog
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
