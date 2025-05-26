import React from 'react';
import { healthCardsData } from '../data/healthData';

import lungsImage from '../assets/lungs1.png';
import teethImage from '../assets/teeth1.png';
import boneImage from '../assets/bone1.png';


const cardImages = {
  'lungs1.png': lungsImage,
  'teeth1.png': teethImage,
  'bone1.png': boneImage,
};

function HealthStatusCards() {
  return (
    <div className="space-y-4">
      {healthCardsData.map((card) => {
        const cardImageSrc = cardImages[card.image];
        return (
          <div key={card.id} className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
              {cardImageSrc && <img src={cardImageSrc} alt={card.label} className="w-full h-full object-contain" />}
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-800">{card.label}</h4>
              <p className="text-xs text-gray-500">Date: {card.date}</p>
        
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                <div className={`h-1.5 rounded-full ${card.color === 'green' ? 'bg-green-500' : 'bg-red-500'}`} style={{ width: `${card.progress}%` }}></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HealthStatusCards;
