const mongoose = require('mongoose');

const coachSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Making 'name' a required field
  bio: { type: String, required: true }, // Assuming 'bio' is also required; adjust as necessary
  certifications: { type: [String], required: true }, // Making 'certifications' an array of strings and required
  // You can add additional fields here as needed. For example:
  // specialty: { type: String, required: false },
  // available: { type: Boolean, default: true },
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
  collection: 'coaches' // Explicitly specifying the collection name
});

const Coach = mongoose.model('Coach', coachSchema);

module.exports = Coach;
