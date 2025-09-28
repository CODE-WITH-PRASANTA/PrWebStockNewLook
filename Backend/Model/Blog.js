
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    quotes: { type: String },
    author: { type: String, required: true },
    email: { type: String, required: true },
    category: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: [String], default: [] },
    imageUrl: { type: String }, // Cloudinary URL
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
