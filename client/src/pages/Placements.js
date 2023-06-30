import React, { useState, useEffect } from 'react';
import NavbarP from '../components/NavbarP';
import Blog from '../components/Blog';
import { Modal, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import CreatePost from '../components/CreatePost';
import { getPosts } from "../utils/API/posts";
const { TextArea } = Input;

export default function Placements() {
  const [blogs, setBlogs] = React.useState([]);

  const getAllPosts = async () => {
    try {
      const response = await getPosts();
      console.log(response);
      setBlogs(response.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

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
        <CreatePost modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      )}

      {
        blogs?.map((post) => (
          <Blog
            blog = {post}
            key={post._id}
          />
        ))
      }
      
      <button
        className="fixed bottom-4 text-2xl right-4 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg"
        onClick={handleCreatePostClick}
      >
        +
      </button>
    </div>
  );
}
