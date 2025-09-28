const express = require("express");
const router = express.Router();
const upload = require("../MiddleWare/Multer");
const {
  createBlog,
  getBlogs,
  getLatestBlogs,
  deleteBlog,
} = require("../Controller/blogController");

// Routes
router.post("/create", upload.single("image"), createBlog);
router.get("/get-blogs", getBlogs);
router.get("/get-latest-blogs", getLatestBlogs);
router.delete("/delete/:id", deleteBlog);

module.exports = router;
