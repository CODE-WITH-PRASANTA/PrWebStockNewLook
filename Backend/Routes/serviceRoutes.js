const express = require("express");
const router = express.Router();
const upload = require("../MiddleWare/Multer");
const {
  addService,
  getAllServices,
  deleteService,
} = require("../Controller/serviceController");

router.post("/add", upload.single("coverPhoto"), addService);
router.get("/all", getAllServices);
router.delete("/delete/:id", deleteService);

module.exports = router;
