// MockCalendar.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles.css';

const MockCalendar = () => {
  const { id } = useParams(); // Destructure 'id' directly
  const [scheduleData, setScheduleData] = useState([
    // This is mock data; replace it with actual data fetching logic as needed
    { day: 'Monday', time: '10:00 - 11:00', description: 'PT Meeting' },
    // ...more mock data if needed
  ]);

  useEffect(() => {
    if (id) {
      // Fetch schedule data based on the coach ID from the URL
      // Replace the URL with your actual API endpoint
      fetch(`/api/schedules/${id}`)
        .then(response => response.json())
        .then(data => setScheduleData(data))
        .catch(error => console.error('Error fetching schedule:', error));
    }
  }, [id]);

  if (!id) {
    return <div className="mock-calendar">No coach ID provided.</div>;
  }
  console.log("Rendering MockCalendar with ID:", id);

  return (
    <div className="mock-calendar">
      <h2>Weekly Schedule for Coach ID: {id}</h2>
      {scheduleData.length > 0 ? (
        scheduleData.map((slot, index) => (
          <div key={index} className="blocked-time">
            {slot.day} {slot.time} - {slot.description}
          </div>
        ))
      ) : (
        <p>No scheduled times available.</p>
      )}
    </div>
  );
};

export default MockCalendar;
