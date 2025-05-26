import React from 'react';
import { anatomicalStatuses } from '../data/healthData';
import anatomyImage from '../assets/anatomy.jpeg';

const colorClasses = {
  blue: 'bg-blue-600', 
  cyan: 'bg-cyan-400', 
  
};

function AnatomySection() {
  return (
    <div className="relative w-full max-w-sm mx-auto">

      <img src={anatomyImage} alt="Human Anatomy" className="w-full h-auto" />

      {anatomicalStatuses.map((item) => (
        <div
          key={item.id}
          className={`absolute px-3 py-1 rounded-full text-white text-xs font-semibold ${colorClasses[item.color] || 'bg-gray-500'}`}
          style={{ top: item.position.top, left: item.position.left, transform: 'translate(-50%, -50%)' }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default AnatomySection;
