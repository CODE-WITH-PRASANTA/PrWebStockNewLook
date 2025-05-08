const Blog = require("../Model/Blog");
const cloudinary = require("../Config/Cloudinary");
const fs = require("fs");

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
