const mongoose = require("mongoose");

const opportunitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    trim: true,
    maxlength: [20, "name cannot be more than 20 characters"],
  },
  category: {
    enum: ["events", "internships", "hackathons"],
    type: String,
    required: [true, "Please provide category"],
  },
  location: {
    type: String,
    required: false,
    trim: true,
    maxlength: [20, "location cannot be more than 20 characters"],
  },
  imageUrl: {
    type: String,
    required: false,
    trim: true,
  },
  imageName: {
    type: String,
    required: false,
    trim: true,
  },
  date: {
    type: String,
    required: [true, "Please provide date"],
    trim: true,
  },
  registrationLink: {
    type: String,
    required: [true, "Please provide registrationLink"],
  },
});

module.exports = mongoose.model("Opportunity", opportunitySchema);
