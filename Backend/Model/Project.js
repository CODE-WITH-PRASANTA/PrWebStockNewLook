const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  logo: { type: String, required: true }, // Cloudinary URL
  link: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
