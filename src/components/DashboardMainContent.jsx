import React from 'react';
import DashboardOverview from './DashboardOverview';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

function DashboardMainContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <div className="lg:col-span-2 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Dashboard</h2>
         <DashboardOverview />
         <ActivityFeed />
      </div>

      
      <div className="lg:col-span-1 flex flex-col gap-6">
          <CalendarView />
          <UpcomingSchedule />
      </div>
    </div>
  );
}

export default DashboardMainContent; 