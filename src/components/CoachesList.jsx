import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CoachesList = () => {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/coaches`)
  .then(response => response.json())
  .then(data => setCoaches(data))
  .catch(error => console.log(error));

  }, []);

  return (
    <div>
      <h2>Coaches</h2>
      <div className="coaches-grid">
        {coaches.map(coach => (
          <div key={coach._id} className="coaches-grid-item">
            <img src={coach.imageUrl} alt={coach.name} className="coach-image" />
            <strong>{coach.name}</strong>
            <p>{coach.bio}</p>
            <div className="certifications">{coach.certifications.join(', ')}</div>
            <Link to={`/schedule/${coach._id}`} className="view-schedule-link">
                Schedule with this coach</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoachesList;

/*const CoachesList = ({ coaches }) => {
    console.log("Rendering CoachesList...", coaches);

  return (
    <div>
      <h2>Coaches</h2>
      <div className="coaches-grid">
        {coaches.map(coach => (
          <div key={coach.id} className="coaches-grid-item">
            <img src={coach.imageUrl} alt={coach.name} className="coach-image" />
            <strong>{coach.name}</strong>
            <p>{coach.bio}</p>
            <div className="certifications">
              {coach.certifications.join(', ')}
            </div>
            <Link to={`/schedule/${coach.id}`} className="view-schedule-link">
  Schedule with this coach 
</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
*/
