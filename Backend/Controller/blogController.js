const express = require("express");
const router = express.Router();
const cloudinary = require("../Config/Cloudinary");
const fs = require("fs");
const Blog = require("../Model/Blog");

exports.createBlog = async (req, res) => {
  try {
    const {
      title,
      description,
      content,
      author,
      category,
      tags,
      postType,
      highlight
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "blogs"
    });

    fs.unlinkSync(req.file.path); // Remove local file

    const blog = new Blog({
      title,
      description,
      content,
      author,
      category,
      tags: tags ? JSON.parse(tags) : [],
      imageUrl: result.secure_url,
      postType,
      highlight: highlight === "true"
    });

    await blog.save();

    res.status(201).json({ message: "Blog created successfully", blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong", error });
  }
};
// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
};

// Get blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch blog" });
  }
};

// Delete blog
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Delete image from Cloudinary
    await cloudinary.uploader.destroy(blog.imageUrl.split("/").pop().split(".")[0]);

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete blog" });
  }
};