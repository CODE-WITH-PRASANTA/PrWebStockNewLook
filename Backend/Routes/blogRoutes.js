const express = require("express");
const router = express.Router();
const upload = require("../MiddleWare/Multer");
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  deleteBlog
} = require("../Controller/blogController");

router.post("/post-blog", upload.single("image"), createBlog);
router.get("/get-blogs", getAllBlogs);
router.get("/get-blog/:id", getBlogById);
router.delete("/delete-blog/:id", deleteBlog);

module.exports = router;