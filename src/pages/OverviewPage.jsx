import React from 'react';
import Overview from '../components/Overview/Overview';

const OverviewPage = () => {
  return (
    <div className="p-4 bg-[#f2f2f2] min-h-screen">
      <h1 className="text-3xl font-semibold mb-6">Welcome to the Overview Page</h1>
      <Overview />
    </div>
  );
};

export default OverviewPage;