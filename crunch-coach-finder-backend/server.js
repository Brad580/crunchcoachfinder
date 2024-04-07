const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const coachesRouter = require('./routes/coaches');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/crunchcoaches')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Use routes
app.use('/api/coaches', coachesRouter);

app.get('/', (req, res) => {
  res.send('Hello from Crunch Coach Finder Backend!');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
