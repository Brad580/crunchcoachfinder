// ScheduleView.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ScheduleView = () => {
  let { id } = useParams(); // Extracting the coach ID from the URL

  // Here, you would fetch the schedule for the coach with the given ID
  // For demonstration, we will use a mock schedule
  const coachSchedule = [
    // Replace this with a dynamic fetch based on the coach's ID
    { id: 1, day: 'Monday', time: '10:00 - 12:00' },
    // ...other schedule slots
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
