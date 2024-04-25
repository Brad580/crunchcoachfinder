const mongoose = require('mongoose');
const Coach = require('../Coach'); // Update the path to your Coach model as necessary
const app = require('../../server'); // Update the path to your server as necessary
const request = require('supertest'); // You'll need to install supertest

beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI_TEST, { useNewUrlParser: true, useUnifiedTopology: true });
  await mongoose.connection.dropDatabase();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('/api/coaches', () => {
  it('should update the coach with the given ID', async () => {
    // Add a coach to the database
    const coach = await new Coach({
      name: 'Test Coach',
      bio: 'Test Bio',
      certifications: ['Test Certification'],
      imageUrl: 'TestUrl.png'
    }).save();

    // Update the coach
    const updatedBio = 'Updated Bio';
    const response = await request(app)
      .put(`/api/coaches/${coach._id}`)
      .send({ bio: updatedBio });

    // Assertions
    expect(response.statusCode).toBe(200);
    expect(response.body.bio).toBe(updatedBio);
  });

  it('should delete the coach with the given ID', async () => {
    // Add a coach to the database
    const coach = await new Coach({
      name: 'Test Coach',
      bio: 'Test Bio',
      certifications: ['Test Certification'],
      imageUrl: 'TestUrl.png'
    }).save();

    // Delete the coach
    const response = await request(app)
      .delete(`/api/coaches/${coach._id}`);

    // Assertions
    expect(response.statusCode).toBe(200);
    const deletedCoach = await Coach.findById(coach._id);
    expect(deletedCoach).toBeNull();
  });
});
afterAll(async () => {
  await mongoose.disconnect();
});
