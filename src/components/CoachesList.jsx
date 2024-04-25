import React from 'react';
import { Link } from 'react-router-dom';

const CoachesList = ({ coaches }) => {
  return (
    <div>
      <h2>Coaches</h2>
      <div className="coaches-grid">
        {coaches.map(coach => (
          <div key={coach._id} className="coaches-grid-item">
            <img src={coach.imageUrl} alt={coach.name} className="coach-image" />
            <div className="coach-details">
              <h3 className="coach-name">{coach.name}</h3>
              <p className="coach-bio">{coach.bio}</p>
              <div className="coach-certifications">
                {coach.certifications.join(', ')}
              </div>
              <Link to={`/schedule/${coach._id}`} className="schedule-link">
                Schedule with this coach
              </Link>
              {/* New link for buying sessions */}
              <Link to={`/buy-sessions/${coach._id}`} className="buy-sessions-link">
                Buy Sessions
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoachesList;
