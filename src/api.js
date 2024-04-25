const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Fetch a single coach by their ID
export const fetchCoachById = async (coachId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/coaches/${coachId}`);
    if (!response.ok) {
      throw new Error('Could not fetch coach data');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch coach:', error);
  }
};

// Update a coach by their ID
export const updateCoach = async (coachId, coachData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/coaches/${coachId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(coachData),
    });
    if (!response.ok) {
      throw new Error('Could not update coach');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to update coach:', error);
  }
};

// Delete a coach by their ID
export const deleteCoach = async (coachId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/coaches/${coachId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Could not delete coach');
    }
    return 'Coach deleted successfully';
  } catch (error) {
    console.error('Failed to delete coach:', error);
  }
};
  