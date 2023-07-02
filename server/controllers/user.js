const User=require('../models/user');

const {
    S3Client,
    PutObjectCommand,
    GetObjectCommand,
    DeleteObjectCommand,
  } = require("@aws-sdk/client-s3");
  const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
  const crypto = require("crypto");
  const dotenv = require("dotenv");
  
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
    region,
  });


  const editUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { briefDescription, name } = req.body;
      let user = await User.findById(id);
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      user.briefDescription = briefDescription;
      user.name = name;
  
      if (req.file) {
        // Delete previous image if it exists
        if (user.imageName) {
          const deleteParams = {
            Bucket: bucketName,
            Key: user.imageName,
          };
          const deleteCommand = new DeleteObjectCommand(deleteParams);
          await s3.send(deleteCommand);
        }
  
        const randomImgName = (bytes = 16) =>
          crypto.randomBytes(bytes).toString("hex");
        const imageName = randomImgName();
  
        // Upload the image to S3
        const params = {
          Bucket: bucketName,
          Key: imageName,
          Body: req.file.buffer,
          ContentType: req.file.mimetype,
        };
  
        const command = new PutObjectCommand(params);
        await s3.send(command);
        
  
        user.imageName = imageName;
  
        const getObjectParams = {
          Bucket: bucketName,
          Key: user.imageName,
        };
  
        const getCommand = new GetObjectCommand(getObjectParams);
        const url = await getSignedUrl(s3, getCommand, { expiresIn: 3600 });
  
        user.imageUrl = url;
      }
  
      const updatedUser = await user.save();
  
      res
        .status(200)
        .json({ message: "User updated successfully", user: updatedUser });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  
  
  const getUser = async (req, res) => {
    try {
      const user = await User.findOne(req.params.username);
  
      if (user.length === 0) {
        res.status(404).json({ message: "User not found" });
      } else {
        res.status(200).json({ user });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  };

    module.exports = { getUser, editUser };