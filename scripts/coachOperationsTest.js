const fetch = require('node-fetch'); // Ensure 'node-fetch' is installed

async function updateCoach() {
  const coachId = '661439eb0384fb96d116c9b9'; // Ensure this is an existing coach ID
  const updatedData = {
    name: "Michaela Yerse Updated",
    bio: "Updated bio with a focus on wellness and nutrition.",
    certifications: ["CNC", "CPT", "Advanced Nutrition"],
    imageUrl: "MichaelaYerse.png"
  };

  try {
    const response = await fetch(`http://localhost:5000/api/coaches/${coachId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData)
    });

    if (!response.ok) throw new Error('Could not update coach');
    const data = await response.json();
    console.log('Coach updated:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function deleteCoach() {
  const coachId = '661439eb0384fb96d116c9b9'; // Ensure this is the same coach ID or adjust as needed

  try {
    const response = await fetch(`http://localhost:5000/api/coaches/${coachId}`, {
      method: 'DELETE'
    });

    if (!response.ok) throw new Error('Could not delete coach');
    console.log('Coach deleted successfully');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Sequentially execute updateCoach followed by deleteCoach
async function testCoachOperations() {
  await updateCoach(); // Wait for updateCoach to finish
  await deleteCoach(); // Then, proceed with deleteCoach
}

testCoachOperations().catch(console.error);
