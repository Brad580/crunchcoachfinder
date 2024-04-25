import React from 'react';
import { useParams } from 'react-router-dom';

const ScheduleView = () => {
  let { id } = useParams(); 

  const coachSchedule = [
    { id: 1, day: 'Monday', time: '10:00 - 12:00' },
  ];

  return (
    <div className="schedule-view">
      <h2>Schedule for Coach {id}</h2>
      {coachSchedule.map(slot => (
        <div key={slot.id} className="schedule-slot">
          {slot.day}: {slot.time}
        </div>
      ))}
    </div>
  );
};

export default ScheduleView;
