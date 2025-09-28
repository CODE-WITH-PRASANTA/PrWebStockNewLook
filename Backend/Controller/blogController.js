const Blog = require("../Model/Blog");
const cloudinary = require("../Config/Cloudinary");
const fs = require("fs");

// ✅ Create Blog
exports.createBlog = async (req, res) => {
  try {
    const {
      title,
      description,
      quotes,
      author,
      email,
      category,
      content,
      tags,
    } = req.body;

    let imageUrl = "";
    if (req.file) {
      const upload = await cloudinary.uploader.upload(req.file.path, {
        folder: "blogs",
      });
      imageUrl = upload.secure_url;
      fs.unlinkSync(req.file.path); // delete temp file
    }

    const newBlog = new Blog({
      title,
      description,
      quotes,
      author,
      email,
      category,
      content,
      tags: tags ? tags.split(",") : [],
      imageUrl,
    });

    await newBlog.save();
    res.status(201).json({ success: true, blog: newBlog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get All Blogs
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get Latest 4 Blogs
exports.getLatestBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }).limit(4);
    res.status(200).json({ success: true, blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Delete Blog
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    // If image exists, delete from Cloudinary
    if (blog.imageUrl) {
      const publicId = blog.imageUrl.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(`blogs/${publicId}`);
    }

    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
