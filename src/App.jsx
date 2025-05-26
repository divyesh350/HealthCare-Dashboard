import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';

function App() {
  return (
    <div className="flex min-h-screen bg-lightBlue">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6">
          <DashboardMainContent />
        </main>
      </div>
    </div>
  );
}

export default App;
