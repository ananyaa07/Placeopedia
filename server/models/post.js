const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	ownerId: {
		type : Schema.Types.ObjectId,
		ref : 'User',
		required:true,
	},
	ownerName: {
		type: String,
		required: true,
	},
	brief: {
		type: String,
		required: true,
	}
	,
	bannerImage: {
		type: String,
		required: true,
	},
	bannerUrl : {
		type: String,
		required: false
	},
	content: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	}
});

module.exports = mongoose.model("Post", postSchema);