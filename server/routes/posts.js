const express=require('express');
const router=express.Router();

const {getAllPosts, getPost, updatePost,getAllPostsByUser}=require('../controllers/post');

router.route('/').get(getAllPosts);
router.route('/:id').get(getPost).patch(updatePost);
router.route('/user/:id').get(getAllPostsByUser);

module.exports=router;