const express = require('express');
const router = express.Router();
const upload = require('../MiddleWare/Multer');
const {
  addProject,
  getAllProjects,
  deleteProject
} = require('../Controller/projectController');

router.post('/add', upload.single('logo'), addProject);
router.get('/all', getAllProjects);
router.delete('/delete/:id', deleteProject);

module.exports = router;
