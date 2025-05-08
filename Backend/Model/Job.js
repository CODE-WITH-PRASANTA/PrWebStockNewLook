// models/Job.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  jobPosition: {
    type: String,
    required: true,
  },
  experienceFrom: {
    type: Number,
    required: true,
  },
  experienceTo: {
    type: Number,
    required: true,
  },
  salaryFrom: {
    type: Number,
    required: true,
  },
  salaryTo: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
    enum: ['Full Time', 'Part Time', 'Hybrid'],
  },
  vacancy: {
    type: Number,
    required: true,
  },
  dateOfPublish: {
    type: Date,
    required: true,
  },
  skillsRequired: {
    type: String,
    required: true,
  },
  whatsappNumber: {
    type: String,
    required: true,
  },
});

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;
