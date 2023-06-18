const Opportunity = require("../models/opportunity");

//get all opportunities
const getAllOpportunities = async (req, res) => {
    const { category } = req.params;
    const opportunities = await Opportunity.find({ category });
    res.status(200).json({ opportunities });
};

//create opportunity
const createOpportunity = async (req, res) => {
    const opportunity = await Opportunity.create(req.body);
    res.status(201).json({ opportunity });
  };
  
//update opportunity
const updateOpportunity = async (req, res) => {
  const {
    params: {id: opportunityId },
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
  createOpportunity,
  updateOpportunity,
  deleteOpportunity,
};
