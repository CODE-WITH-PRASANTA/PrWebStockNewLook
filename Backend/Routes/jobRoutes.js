// routes/jobRoutes.js
const express = require('express');
const { createJob, getJobs, deleteJob } = require('../Controller/jobController');
const router = express.Router();

// Route to create a new job
router.post('/create', createJob);

// Route to get all jobs
router.get('/', getJobs);

// Route to delete a job by ID
router.delete('/:id', deleteJob);

module.exports = router;
