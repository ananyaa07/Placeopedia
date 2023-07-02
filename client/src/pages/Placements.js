import React, { useState, useEffect } from 'react';
import NavbarP from '../components/NavbarP';
import Post from '../components/Post';
import { Modal, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import CreatePost from '../components/CreatePost';
import { getPosts } from "../utils/API/posts";
const { TextArea } = Input;

export default function Placements() {
  const [posts, setPosts] = React.useState([]);

  const getAllPosts = async () => {
    try {
      const response = await getPosts();
      console.log(response);
      setPosts(response.posts);
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
      <NavbarP setPosts={setPosts}/>

      {showCreatePost && (
        <CreatePost modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      )}

      {
        posts?.map((post) => (
          <Post
            post = {post}
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
