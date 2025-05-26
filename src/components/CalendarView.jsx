import React from 'react';
import { calendarData } from '../data/calendarData';
import { ChevronLeft, ChevronRight, Stethoscope, Hand } from 'lucide-react';    

const appointmentIcons = {
  Tooth: Stethoscope, 
  Hand: Hand,

};

function CalendarView() {
  

  const displayDates = [
      null, null, null, null, 25, 26, 27, 
      28, 29, 30, 31, null, null, null, 
      null, null, null, null, null, null, null, 
  ];


  const getAppointmentsForDate = (date) => {
    const dayData = calendarData.dates.find(item => item.date === date);
    return dayData ? dayData.appointments : [];
  };

  const getAppointmentDetails = (type) => {
    return calendarData.appointmentDetails.find(item => item.type === type);
  };


  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{calendarData.month}</h3>
        <div className="flex items-center space-x-2 text-gray-400">
          <ChevronLeft size={20} className="cursor-pointer" />
          <ChevronRight size={20} className="cursor-pointer" />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-500 mb-2">
        {calendarData.daysOfWeek.map(day => <div key={day} className="font-medium">{day}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-800">
        {displayDates.map((date, index) => {
          const appointments = getAppointmentsForDate(date);

          return (
            <div key={index} className={`p-1 rounded-md h-26 flex flex-col items-center overflow-hidden ${
              date === 26 ? 'bg-blue-600 text-white' : 
              date === 28 ? 'bg-blue-100 text-blue-700' : 
              date === 30 ? 'bg-blue-100 text-blue-700' : 
              date === 31 ? 'bg-blue-100 text-blue-700' : 
              date ? 'bg-gray-100' : '' 
            }`}>
              {date && <span className="font-semibold text-sm mb-1">{date}</span>}
              {date && appointments.map((time, i) => (
                <div key={i} className={`text-[10px] px-1 py-0.5 rounded-sm mb-1 ${date === 26 ? 'bg-white text-blue-600' : 'bg-blue-500 text-white'}`}> 
                  {time}
                </div>
              ))}
            </div>
          );
        })}
      </div>

   
      <div className="mt-6 space-y-3">
          {calendarData.appointmentDetails.map(appointment => {
            const Icon = appointmentIcons[appointment.icon];
            return (
              <div key={appointment.id} className={`p-4 rounded-lg shadow-md flex items-center space-x-4 ${
                appointment.type === 'Dentist' ? 'bg-blue-700 text-white' : 'bg-blue-100 text-blue-800'
                 }`}> 
                <div className="flex-shrink-0">
                   {Icon && <Icon size={20} className={appointment.type === 'Dentist' ? 'text-white' : 'text-blue-600'}/>} 
                </div>
                <div>
                  <h4 className="text-sm font-semibold">{appointment.type}</h4>
                  <p className="text-xs">{appointment.time}</p>
                  <p className="text-xs">{appointment.doctor}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CalendarView;
