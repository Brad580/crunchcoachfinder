import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePageTitle } from '../PageTitleContext';
import '../styles.css';

const businessHours = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const MockCalendar = ({ title }) => {
  const { id } = useParams();
  const { setTitle } = usePageTitle(); 
  const [scheduleData] = useState([
    { day: 'Monday', time: '08:00 - 09:00', description: 'Personal Workout' },
    { day: 'Monday', time: '10:00 - 11:00', description: 'PT Meeting' },
    { day: 'Monday', time: '13:30 - 14:00', description: 'Express Session' },
    { day: 'Monday', time: '15:00 - 16:00', description: 'Exclusive Session' },
    
    
    { day: 'Tuesday', time: '09:00 - 09:30', description: 'Express Session' },
    { day: 'Tuesday', time: '11:00 - 12:00', description: 'Personal Workout' },
    { day: 'Tuesday', time: '14:00 - 15:00', description: 'PT Admin' },
    { day: 'Tuesday', time: '17:00 - 18:00', description: 'PT Meeting' },
    
    { day: 'Wednesday', time: '08:30 - 09:00', description: 'Express Session' },
    { day: 'Wednesday', time: '12:00 - 13:00', description: 'PT Meeting' },
    { day: 'Wednesday', time: '14:30 - 15:00', description: 'Express Session' },
    { day: 'Wednesday', time: '16:00 - 17:00', description: 'Personal Workout' },

    { day: 'Thursday', time: '08:00 - 09:00', description: 'PT Admin' },
    { day: 'Thursday', time: '10:00 - 10:30', description: 'Express Session' },
    { day: 'Thursday', time: '12:00 - 13:00', description: 'Exclusive Session' },
    { day: 'Thursday', time: '15:00 - 16:00', description: 'PT Meeting' },
    { day: 'Sunday', time: '09:00 - 10:00', description: 'Personal Workout' },
    { day: 'Sunday', time: '11:00 - 12:00', description: 'Exclusive Session' },
    { day: 'Sunday', time: '13:00 - 13:30', description: 'Express Session' },
    { day: 'Sunday', time: '15:00 - 16:00', description: 'PT Admin' },
  ]);

 

  useEffect(() => {
    setTitle('Schedule');   
    return () => {
      setTitle('Coach Finder');
    };
  }, [setTitle, id]); 

  if (!id) {
    return <div className="mock-calendar">No coach ID provided.</div>;
  }

  const renderTimeSlots = (day, isUnavailable) => {
    return businessHours.map((hour, index) => {
      const appointment = scheduleData.find(appt => appt.day === day && appt.time.startsWith(hour));
      return (
        <div key={index} className={`time-slot ${isUnavailable ? 'day-unavailable' : ''}`}>
          {appointment ? `${hour} - ${appointment.description}` : hour}
        </div>
      );
    });
  };
  return (
    <div className="mock-calendar">
      {/* */}
      <h1>{title || 'Weekly Schedule'}</h1>
      <div className="calendar-grid">
        {/* */}
        {daysOfWeek.map((day) => {
          const isUnavailable = day === 'Friday' || day === 'Saturday';
          return (
            <div key={day} className={`day-column ${isUnavailable ? 'day-unavailable' : ''}`}>
              {/*  */}
              <h2 className={`day-header ${isUnavailable ? 'day-unavailable' : ''}`}>{day}</h2>
              {/* */}
              {renderTimeSlots(day, isUnavailable)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MockCalendar;
