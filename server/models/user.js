const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNumber: {
    type: String,
    required: true,
    unique: true,
  },
  admissionYear: {
    type: Number,
    required: true,
  },
  program: {
    type: String,
    required: true,
  },
  posts: {
    type: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    default: [],
  },
  imageName: {
    type: String,
    default: "",
  },
  imageUrl: {
    type: String,
    default: "",
  },
  briefDescription: {
    type: String,
    default: "",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
