import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Homepage from './pages/Homepage';
import Opportunities from './pages/Opportunities';
import Placements from './pages/Placements';
import Tiny from './pages/Tiny';
import BlogContextProvider from './utils/BlogContext';
import Profile from './components/Profile';

const App = () => {
  return (

  
    <BrowserRouter>
      <BlogContextProvider>
      <Routes>
      <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/opportunities" element={<Opportunities/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/placements" element={<Placements/>} />
        <Route path="/tiny" element={<Tiny/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      </BlogContextProvider>
    </BrowserRouter>
  );
};

export default App;

