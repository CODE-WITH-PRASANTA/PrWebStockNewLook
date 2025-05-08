const mongoose = require("mongoose");

const FeatureSchema = new mongoose.Schema({
  info: { type: String, required: true },
  details: { type: String, required: true },
});

const ServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  coverPhoto: { type: String, required: true },
  features: [FeatureSchema],
}, { timestamps: true });

module.exports = mongoose.model("Service", ServiceSchema);
