const express = require('express');
const router = express.Router();
const Coach = require('../models/Coach');

router.get('/', async (req, res) => {
  try {
    const coaches = await Coach.find();
    res.json(coaches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  console.log(req.body); 
  const coach = new Coach({
    name: req.body.name,
    bio: req.body.bio,
    certifications: req.body.certifications,
  });

  try {
    const newCoach = await coach.save();
    res.status(201).json(newCoach);
  } catch (err) {
    console.error(err); 
    res.status(400).json({ message: err.message });
  }
});

// Updating a coach
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedCoach = await Coach.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updatedCoach) {
      return res.status(404).send({ message: 'Coach not found with id ' + id });
    }
    res.json(updatedCoach);
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(400).send({ message: 'Invalid ID format' });
    }
    res.status(500).send({ message: error.message });
  }
});

// Deleting a coach
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCoach = await Coach.findByIdAndDelete(id);
    if (!deletedCoach) {
      return res.status(404).send({ message: 'Coach not found with id ' + id });
    }
    res.send({ message: 'Coach deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});



module.exports = router;
