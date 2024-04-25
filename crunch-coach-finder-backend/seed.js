const mongoose = require('mongoose');
const Coach = require('./models/Coach'); // Ensure this path is correct

mongoose.connect('mongodb://127.0.0.1:27017/crunchcoaches', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch((err) => console.log(err));

const seedCoaches = [
  {
    name: 'Sean Gray',
    bio: 'Strength and conditioning specialist with a passion for transforming lives.',
    certifications: ['CPT', 'CSCS'],
    imageUrl: '/SeanGray.png' 
  },
  {
    name: 'TerriWare',
    bio: 'Experienced yoga instructor focused on mindful and restorative practices.',
    certifications: ['RYT-200', 'RYT-500'],
    imageUrl: '/TerriWare.png'
  },
  {
    name: 'Michaela Yerse',
    bio: 'Certified nutrition coach and personal trainer specializing in holistic health.',
    certifications: ['CNC', 'CPT'],
    imageUrl: '/MichaelaYerse.png'
  }
];

const seedDB = async () => {
  await Coach.deleteMany({});
  await Coach.insertMany(seedCoaches);
  console.log('Database seeded with coaches.');
};

seedDB().then(() => {
  mongoose.connection.close();
});
