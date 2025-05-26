import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';

function DashboardOverview() {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="lg:w-1/2">
        <AnatomySection />
      </div>
      <div className="lg:w-1/2">
         <HealthStatusCards />
      </div>
    </div>
  );
}

export default DashboardOverview; 