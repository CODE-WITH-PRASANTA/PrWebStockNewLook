const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  tags: [String],
  date: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  postType: { type: String, required: true },
  highlight: { type: Boolean, default: false }
});

module.exports = mongoose.model("Blog", blogSchema);
