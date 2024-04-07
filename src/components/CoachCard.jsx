import React from 'react';

const CoachCard = ({ name, bio, certifications }) => {
  return (
    <div className="coach-card">
      <img src="#" alt={`${name}`} className="coach-image" />
      <h3 className="coach-name">{name}</h3>
      <p className="coach-bio">{bio}</p>
      <ul className="coach-certifications">
        {certifications.map(cert => <li key={cert}>{cert}</li>)}
      </ul>
    </div>
  );
};

export default CoachCard;
