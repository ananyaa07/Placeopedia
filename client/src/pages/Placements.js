import React, { useState } from 'react';
import NavbarP from '../components/NavbarP';
import Blog from '../components/Blog';
import { Modal, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import CreatePost from '../components/CreatePost';
const { TextArea } = Input;

export default function Placements() {
  const [blog, setBlog] = React.useState({
    title: "",
    brief: "",
    tags: [],
  });

  const [showCreatePost, setShowCreatePost] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCreatePostClick = () => {
    setShowCreatePost(true);
    setModalVisible(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavbarP />

      {showCreatePost && (
        <CreatePost blog={blog} setBlog={setBlog} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      )}

      <Blog />
      <Blog />
      <Blog />

      <button
        className="fixed bottom-4 text-2xl right-4 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg"
        onClick={handleCreatePostClick}
      >
        +
      </button>
    </div>
  );
}
