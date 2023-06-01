import {
	faCamera,
	faPlusCircle
	
} from "@fortawesome/free-solid-svg-icons";
import {
	


} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Modal, Input, Select, Upload, Button } from "antd";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { BlogContext } from "../utils/BlogContext";
import Tiny from "../pages/Tiny";
const { Option } = Select;
const { TextArea } = Input;

const CreatePost = (props) => {
	const [show, setShow] = useState(false);
	
	const [data, setData] = useState({});
	const [tags, setTags] = useState([]);
	const { newBlog, setNewBlog } = useContext(BlogContext);

	const navigate = useNavigate();
	const handleTagChange = (newTags) => {
		setTags(newTags);
	
	};

	const handleUploadChange = (info) => {
		console.log(info.fileList[0]);
		props.setBanner(info.fileList[0]);
	};
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
		localStorage.setItem("newBlog", JSON.stringify(data));
		props.setBlog({
			...props.blog,
			...data,
			tags,
		});
		setNewBlog(data);
		props.setModalVisible(false);
		console.log(
		"Blog Object in Local Storage : ",newBlog);
		navigate(`/tiny`);
	};

	useEffect(() => {
		
			setData({ ...data, tags });
	}, [tags]);

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
						placeholder="Blog Title"
						className="mb-4"
						name="title"
						onChange={handleChange}
					/>
					<TextArea
						placeholder="Blog Description"
						name="brief"
						onChange={handleChange}
						rows={4}
						className="mb-4"
					/>
					<Select
						mode="tags"
						style={{ width: "100%" }}
						value={tags}
						onChange={handleTagChange}
						placeholder="Blog Tags"
						className="mb-4 bg-white"
					>
						<Option key="JavaScript">JavaScript</Option>
						<Option key="React">React</Option>
						<Option key="App Development">App Development</Option>
						<Option key="Web Development">Web Development</Option>
						<Option key="Web Development">Blockchain</Option>
					</Select>

					
				</Modal>
			</>
		</>
	);
};

export default CreatePost;
