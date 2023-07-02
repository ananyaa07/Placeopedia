import {
	faCamera,
	faPlusCircle
	
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Modal, Input, Select, Upload, Button } from "antd";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { PostContext } from "../utils/PostContext";
import Tiny from "../pages/NewPost";
const { Option } = Select;
const { TextArea } = Input;

const CreatePost = (props) => {
	const [show, setShow] = useState(false);
	
	const [data, setData] = useState({});
	const [tags, setTags] = useState([]);
	const { newPost, setNewPost } = useContext(PostContext);

	const navigate = useNavigate();

	const showModal = () => {
		props.setModalVisible(true);
	};

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleCancel = () => {
		props.setModalVisible(false);
	};

	const handleSubmit = () => {
		setNewPost({
			...data,
		});
		props.setModalVisible(false);
		navigate(`/newpost`);
	};

	useEffect(() => {
		console.log(
		"Post Object in Context : ",newPost);
	}, [newPost]);

	const uploadButton = (
		<div>
			<FontAwesomeIcon icon={faCamera} className="text-gray-400" />
			<div className="style mt-2  ">Upload</div>
		</div>
	);

	return (
		<>
			<>
			

				<Modal
					title="Create Post"
					visible={props.modalVisible}
					onCancel={handleCancel}
					footer={[
						<Button key="back" onClick={handleCancel}>
							Cancel
						</Button>,
						<Button key="submit" onClick={handleSubmit}>
							Proceed
						</Button>,
					]}
				>
					<Input
						placeholder="Post Title"
						className="mb-4"
						name="title"
						onChange={handleChange}
					/>
					<TextArea
						placeholder="Post Description"
						name="brief"
						onChange={handleChange}
						rows={4}
						className="mb-4"
					/>
				</Modal>
			</>
		</>
	);
};

export default CreatePost;
