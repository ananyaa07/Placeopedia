const Post=require('../models/post');
const User=require('../models/user');

const searchAll=async(req,res)=>{
    try{
        const {query}=req.params;
        const posts=await Post.find({
            $or:[
                {title:{$regex:query,$options:'i'}},
                {brief:{$regex:query,$options:'i'}},
                {date:{$regex:query,$options:'i'}},
                {content :{$regex:query,$options:'i'}},
                {ownerName: { $regex: query, $options: "i" } },
            ],
        });

        res.status(200).json({ posts });
    }catch(error){
        res.status(500).json({error:error.message});
    }       
}

module.exports={searchAll};