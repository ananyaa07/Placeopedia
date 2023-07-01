const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const crypto = require("crypto");
const dotenv = require("dotenv");
const Opportunity = require("../models/opportunity");

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

//get all opportunities
const getAllOpportunities = async (req, res) => {
  try {
    const { category } = req.params;
    let opportunities = await Opportunity.find({ category });
    await Promise.all(
      opportunities.map(async (opportunity) => {
        const getObjectParams = {
          Bucket: bucketName,
          Key: opportunity.imageName,
        };

        const command = new GetObjectCommand(getObjectParams);
        const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
        opportunity.imageUrl = url;
        return opportunity;
      })
    );

    res.status(200).json({ opportunities });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

 const getAllOpportunitiesAdmin = async (req, res) => {
  try {
    const { category } = req.params;
    let opportunities = await Opportunity.find({});
    await Promise.all(
      opportunities.map(async (opportunity) => {
        const getObjectParams = {
          Bucket: bucketName,
          Key: opportunity.imageName,
        };

        const command = new GetObjectCommand(getObjectParams);
        const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
        opportunity.imageUrl = url;
        await opportunity.save();
      })
    );

    const events = await Opportunity.find({ category: "events" });
    const internships = await Opportunity.find({ category: "internships" });
    const hackathons = await Opportunity.find({ category: "hackathons" });

    opportunities = {
      events,
      internships,
      hackathons,
    };

    res.status(200).json({ opportunities });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//create opportunity
const createOpportunity = async (req, res) => {
  try {
    const {
      name,
      category,
      location,
      date,
      registrationLink
    } = req.body;

    // Generate a random name for the image
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
    const result = await s3.send(command);

    // Create a new opportunity document in the database
    const opportunity = new Opportunity({
      name,
      category,
      location,
      date,
      registrationLink,
      imageName
    });
    await opportunity.save();

    res.status(201).json({ opportunity });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

//update opportunity
const updateOpportunity = async (req, res) => {
  const {
    params: { id: opportunityId },
    body,
  } = req;

  delete body.imageUrl;
  delete body.imageName;

  const opportunity = await Opportunity.findOneAndUpdate(
    { _id: opportunityId },
    body,
    { new: true }
  );

  if (!opportunity) {
    throw new NotFoundError(`No opportunity with id ${opportunityId}`);
  }

  res.status(200).json({ opportunity });
};

//delete opportunity
const deleteOpportunity = async (req, res) => {
  const {
    params: { id: opportunityId },
  } = req;
  const opportunity = await Opportunity.findByIdAndDelete({
    _id: opportunityId,
  });
  if (!opportunity) {
    throw new NotFoundError(`No opportunity with id ${opportunityId}`);
  }
  res.status(200).send();
};

module.exports = {
  getAllOpportunities,
  getAllOpportunitiesAdmin,
  createOpportunity,
  updateOpportunity,
  deleteOpportunity,
};
