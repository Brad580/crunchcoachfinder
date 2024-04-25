const mongoose = require('mongoose');

const coachSchema = new mongoose.Schema({
  name: String,
  bio: String,
  certifications: [String],
  imageUrl: String, 
});

const Coach = mongoose.model('Coach', coachSchema);

module.exports = Coach;

