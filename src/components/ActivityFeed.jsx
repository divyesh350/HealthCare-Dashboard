import React from 'react';
import { activityData } from '../data/activity';

function ActivityFeed() {
  const colorClasses = {
    blue: 'bg-primary',
    grey: 'bg-gray-700',
  };

  const backgroundLineHeight = 'h-20';

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Activity</h3>
        <span className="text-sm text-gray-500">3 appointment on this week</span>
      </div>
      <div className="flex items-end justify-between h-32 mt-4 px-2 relative">
        <div className="absolute inset-x-0 bottom-0 flex justify-between px-2">
           {activityData.map((_, index) => (
             <div key={index} className={`w-px bg-gray-200 ${backgroundLineHeight}`}></div>
           ))}
        </div>
        {activityData.map((dayData, index) => (
          <div key={dayData.day} className="flex flex-col items-center justify-end flex-1 z-10">
            <div className={`w-4 rounded-t-sm ${colorClasses[dayData.color]} ${dayData.topHeight} mb-1`}></div>
            <div className={`w-4 ${colorClasses[dayData.color]} ${dayData.bottomHeight}`}></div>
            <span className="text-xs text-gray-600 mt-1">{dayData.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
