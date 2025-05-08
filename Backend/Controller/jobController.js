// controllers/jobController.js
const Job = require('../Model/Job');

// Create a new job post
const createJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json({
      message: 'Job posted successfully',
      job,
    });
  } catch (error) {
    res.status(400).json({ message: 'Error creating job', error });
  }
};

// Get all job posts
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching jobs', error });
  }
};

// Delete a job post by ID
const deleteJob = async (req, res) => {
  const { id } = req.params;
  try {
    const job = await Job.findByIdAndDelete(id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting job', error });
  }
};

module.exports = {
  createJob,
  getJobs,
  deleteJob,
};
