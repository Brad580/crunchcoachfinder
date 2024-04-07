import React from 'react';
import CoachCard from './CoachCard';

const CoachGrid = ({ coaches }) => {
  return (
    <div className="coach-grid">
      {coaches.map(coach => (
        <CoachCard
          key={coach.id}
          name={coach.name}
          bio={coach.bio}
          certifications={coach.certifications}
        />
      ))}
    </div>
  );
};
CoachGrid.defaultProps = {
  coaches: [],
};
export default CoachGrid;
