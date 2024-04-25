import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCoachById, updateCoach, deleteCoach } from '../api'; // Import API functions

const EditCoach = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [coachData, setCoachData] = useState({
    name: '',
    bio: '',
    certifications: [],
    imageUrl: '',
  });

  useEffect(() => {
    fetchCoachById(id).then(data => {
      if (data) {
        setCoachData(data);
      }
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoachData({ ...coachData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCoach(id, coachData);
    navigate('/');
  };

  const handleDelete = async () => {
    await deleteCoach(id);
    navigate('/');
  };
  return (
    <div>
      <h2>Edit Coach</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={coachData.name} onChange={handleChange} />
        </label>
        {/* Add inputs for bio, certifications, and imageUrl */}
        <button type="submit">Save Changes</button>
      </form>
      <button onClick={handleDelete}>Delete Coach</button>
    </div>
  );
};

export default EditCoach;
