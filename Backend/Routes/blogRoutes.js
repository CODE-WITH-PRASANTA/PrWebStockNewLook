const express = require("express");
const router = express.Router();
const upload = require("../MiddleWare/Multer");
const { createBlog } = require("../Controller/blogController");

router.post("/post-blog", upload.single("image"), createBlog);

module.exports = router;
