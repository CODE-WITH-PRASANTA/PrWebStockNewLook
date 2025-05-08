const Project = require('../Model/Project');
const cloudinary = require('../Config/Cloudinary');
const fs = require('fs');

exports.addProject = async (req, res) => {
  try {
    const { name, desc, link } = req.body;

    if (!req.file) return res.status(400).json({ error: 'Logo file is required.' });

    const ext = req.file.mimetype.split('/')[1];
    if (!['webp', 'avif'].includes(ext)) {
      fs.unlinkSync(req.file.path); // Delete invalid file
      return res.status(400).json({ error: 'Only .webp and .avif formats are allowed.' });
    }

    const cloudRes = await cloudinary.uploader.upload(req.file.path, {
      folder: 'project_logos',
      resource_type: 'image'
    });

    fs.unlinkSync(req.file.path); // Clean up local file

    const project = new Project({
      name,
      desc,
      logo: cloudRes.secure_url,
      link,
    });

    await project.save();

    res.status(201).json(project);
  } catch (err) {
    console.error('Add Project Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};



exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ error: 'Project not found' });

    // Extract public_id from Cloudinary URL
    const logoUrl = project.logo;
    const parts = logoUrl.split('/');
    const fileNameWithExtension = parts[parts.length - 1];
    const publicId = `project_logos/${fileNameWithExtension.split('.')[0]}`;

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(publicId);

    // Delete from MongoDB
    await Project.findByIdAndDelete(id);

    res.json({ message: 'Project deleted successfully from database and Cloudinary.' });
  } catch (err) {
    console.error('Delete Project Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
