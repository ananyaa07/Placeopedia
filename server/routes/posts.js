const express=require('express');
const router=express.Router();

const {getAllPosts, getPost, updatePost}=require('../controllers/post');

router.route('/').get(getAllPosts);
router.route('/:id').get(getPost).patch(updatePost);

module.exports=router;