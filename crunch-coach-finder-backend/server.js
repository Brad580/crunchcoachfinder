const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const coachesRouter = require('./routes/coaches');

const app = express();

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
  next();
});

app.use(cors());
app.use(express.json()); 

// Prevent mongoose from connecting in test mode
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/crunchcoaches', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));
}

app.use('/api/coaches', coachesRouter);

app.get('/', (req, res) => {
  res.send('Hello from Crunch Coach Finder Backend!');
});

app.use((err, req, res, next) => {
  console.error(err.stack); 
  res.status(500).send({ message: 'Something went wrong on the server' });
});

const port = process.env.PORT || 5000;

// Only listen on a port if the server.js file is run directly
if (require.main === module) {
  app.listen(port, () => console.log(`Server running on port ${port}`));
}

module.exports = app;
