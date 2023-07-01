const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const crypto = require("crypto");
const dotenv = require("dotenv");
const path = require("path");
const Post = require("../models/post");


dotenv.config();
const bucketName = process.env.BUCKET_NAME;
const region = process.env.BUCKET_REGION;
const accessKeyId = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

const s3 = new S3Client({
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
  region
});

const getAllPosts = async (req, res) => {
    try {
		const temp = await Post.find();
		temp.map(async (post) => {
			const getObjectParams = {
				Bucket: bucketName,
				Key: post.bannerImage,
			};

			const command = new GetObjectCommand(getObjectParams);
			const bannerUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });
			post.bannerUrl = bannerUrl;
			await post.save();
		});
		const posts = await Post.find();
		res.status(200).json({ posts });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};



const getPost = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);

      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }

      const getObjectParams = {
        Bucket: bucketName,
        Key: post.bannerImage,
      }

      const command = new GetObjectCommand(getObjectParams);
      const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
      res.status(200).json({ post, url });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


const createPost = async (req, res) => {
    try {
        const { title, brief, content} = req.body;
        
        const randomImgName = (bytes = 16) => crypto.randomBytes(bytes).toString("hex");
        const imgName = randomImgName();
        const params = {
          Bucket: bucketName,
          Key: imgName,
          Body: req.file.buffer,
          ContentType: req.file.mimetype,
        };

        const command = new PutObjectCommand(params);
        const result = await s3.send(command);
        const post = new Post({
          title,
          ownerName : req.user.name,
          ownerId : req.user._id,
          brief,
          bannerImage: imgName,
          date : Date.now(),
          content
        })
        await post.save();
       
        res.status(201).json({ post });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
      }
};

const updatePost = async (req, res) => {
    try {
      const { title,owner, brief, date, content} = req.body;
      const post = await Post.findByIdAndUpdate(
        req.params.id,
        { title,owner, brief, date, content},
        { new: true }
      );
      res.status(200).json({ post });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }



module.exports = {
    getAllPosts,
    getPost,
    createPost,
    updatePost
}
