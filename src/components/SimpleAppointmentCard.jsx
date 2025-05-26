import React from 'react';
import { Heart, Eye, User } from 'lucide-react';

const appointmentIcons = {
  Heart,
  Eye,
  User,
};

function SimpleAppointmentCard({ title, time, icon }) {
  const Icon = appointmentIcons[icon];
  return (
    <div className="bg-lightBlue p-4 rounded-lg shadow-sm flex items-center justify-between">
      <div>
        <h4 className="text-sm font-semibold text-gray-800">{title}</h4>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
      <div className="flex-shrink-0">
        {Icon && <Icon size={20} className="text-purple-600" />}
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;
