import React, { useEffect } from "react";
import { Modal, Button, Input, Upload } from "antd";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";

export default function EditUserModal({
	isModalVisible,
	setIsModalVisible,
	user,
	setUser,
}) {
	const [editUser, setEditUser] = useState({
		name: user.name,
		briefDescription: user.briefDescription,
		image: null,
	});

	useEffect(() => {
		fetchUser();
	}, []);

	const fetchUser = async () => {
		try {
			const response = await axios.get(
				`http://localhost:3000/api/v1/user/${user._id}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
					},
				}
			);

			console.log(response.data.user);
			setEditUser(response.data.user);
			setUser(response.data.user);
		} catch (error) {
			console.error(error);
		}
	};

	const handleEditClick = () => {
		setIsModalVisible(true);
	};

	const editUserCaller = async () => {
		try {
			const formData = new FormData();
			formData.append("name", editUser.name);
			formData.append("briefDescription", editUser.briefDescription);
			if (editUser.image) {
				formData.append("image", editUser.image);
			}

			const res = await axios.post(
				`http://localhost:3000/api/v1/user/${user._id}/edit`,
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
						Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
					},
				}
			);

			console.log(res);

			setIsModalVisible(false);
			fetchUser();
		} catch (error) {
			console.error(error);
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setEditUser((prevUser) => ({
			...prevUser,
			[name]: value,
		}));
	};

	const handleImageUpload = (file) => {
		setEditUser((prevUser) => ({
			...prevUser,
			image: file,
		}));
	};

	return (
		<Modal
			visible={isModalVisible}
			onCancel={() => setIsModalVisible(false)}
			onOk={editUserCaller}
			title="Edit User"
			className="rounded-md scale-95"
		>
			<div className="grid grid-cols-1 gap-4">
				<div className="flex flex-col">
					<label className="text-gray-700 font-bold mt-3 mb-2">
						User's Name
					</label>
					<Input
						name="name"
						placeholder="User's Name"
						value={editUser.name}
						onChange={handleInputChange}
						className="rounded"
					/>
				</div>
				<div className="flex flex-col">
					<label className="text-gray-700 font-bold mb-2">
						Brief Description
					</label>
					<Input.TextArea
						name="briefDescription"
						placeholder="Brief Description"
						value={editUser.briefDescription}
						onChange={handleInputChange}
						className="rounded"
					/>
				</div>
				<Upload
  accept="image/*"
  name="image"
  listType="picture-card"
  className="image-uploader"
  showUploadList={false}
  beforeUpload={handleImageUpload}
>
  {editUser.image ? (
    <div className="relative scale-95 rounded w-36 h-36 overflow-hidden">
      <img
        src={URL.createObjectURL(editUser.image)}
        alt="User"
        className="rounded w-[90%] mt-6 h-[70%] object-cover"
      />
      <div className="absolute top-2 right-2 cursor-pointer">
        <div className="bg-white rounded-full p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5 text-red-500"
            onClick={() => setEditUser({ ...editUser, image: null })}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center rounded border-dashed border-gray-300 border-2 p-4">
      <PlusOutlined className="text-4xl text-gray-500" />
      <div className="text-gray-500">Upload</div>
    </div>
  )}
</Upload>

			</div>
		</Modal>
	);
}
