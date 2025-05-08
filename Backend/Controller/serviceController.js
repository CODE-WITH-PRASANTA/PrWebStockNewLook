const cloudinary = require("../Config/Cloudinary");
const fs = require("fs");
const Service = require("../Model/Service");

// Add Service
const addService = async (req, res) => {
  try {
    const { title, description, price, features } = req.body;
    const parsedFeatures = JSON.parse(features);

    if (!req.file) return res.status(400).json({ error: "Cover photo is required" });

    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      folder: "services",
      resource_type: "image",
    });

    fs.unlinkSync(req.file.path); // Delete local file

    const service = new Service({
      title,
      description,
      price,
      coverPhoto: uploadResult.secure_url,
      features: parsedFeatures,
    });

    await service.save();
    res.status(201).json({ message: "Service added successfully", service });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error while adding service" });
  }
};

// Get All Services
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch services" });
  }
};

// Delete Service
const deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ error: "Service not found" });

    // Optional: Remove from Cloudinary using public_id if stored
    // const publicId = service.coverPhoto.split("/").pop().split(".")[0];
    // await cloudinary.uploader.destroy(`services/${publicId}`);

    await Service.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete service" });
  }
};

module.exports = {
  addService,
  getAllServices,
  deleteService,
};
