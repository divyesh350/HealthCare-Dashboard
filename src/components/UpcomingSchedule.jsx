import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import { upcomingAppointments } from '../data/upcomingAppointments';

function UpcomingSchedule() {
  
  const appointmentsByDay = upcomingAppointments.reduce((acc, appointment) => {
    (acc[appointment.day] = acc[appointment.day] || []).push(appointment);
    return acc;
  }, {});

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">The Upcoming Schedule</h3>
      <div className="space-y-4">
        {Object.entries(appointmentsByDay).map(([day, appointments]) => (
          <div key={day}>
            <h4 className="text-md font-semibold text-gray-700 mb-3">On {day}</h4>
            <div className="grid grid-cols-1 gap-3">
              {appointments.map(appointment => (
                <SimpleAppointmentCard
                  key={appointment.id}
                  title={appointment.title}
                  time={appointment.time}
                  icon={appointment.icon}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingSchedule;
