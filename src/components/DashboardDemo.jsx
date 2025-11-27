import React from 'react';
import BinFillLevel from './BinFillLevel.jsx';
import WeightDisplay from './WeightDisplay.jsx';
import DistanceDisplay from './DistanceDisplay.jsx';
import LidStatus from './LidStatus.jsx';
import WeightChart from './WeightChart.jsx';
import DistanceChart from './DistanceChart.jsx';
import AlertsList from './AlertsList.jsx';

// Mock data for demo purposes
const mockCurrentData = {
  bin_percentage: 65,
  bin_full: false,
  weight: 2500,
  distance: 15.5,
  lid_status: 'closed',
  timestamp: new Date().toISOString()
};

const mockHistory = Array.from({ length: 20 }, (_, i) => ({
  id: `hist_${i}`,
  timestamp: new Date(Date.now() - (20 - i) * 60000).toISOString(),
  weight: 2000 + Math.random() * 1000,
  distance: 10 + Math.random() * 10
}));

const mockAlerts = [
  {
    id: 'alert_1',
    message: 'Bin is 90% full',
    type: 'bin_full_warning',
    value: 90,
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    acknowledged: false
  },
  {
    id: 'alert_2',
    message: 'Lid has been open for 5 minutes',
    type: 'lid_open_warning',
    value: 5,
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    acknowledged: false
  }
];

function DashboardDemo() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          IoT Garbage Bin Monitor
        </h1>
        <p className="text-gray-600 mt-2">Real-time sensor data and analytics (Demo Mode)</p>
        <p className="text-sm text-orange-600 mt-1">
          Configure Firebase in .env to connect to live data
        </p>
      </header>

      {/* Stats Grid - 4 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <BinFillLevel percentage={mockCurrentData.bin_percentage} isFull={mockCurrentData.bin_full} />
        <WeightDisplay weight={mockCurrentData.weight} />
        <DistanceDisplay distance={mockCurrentData.distance} />
        <LidStatus status={mockCurrentData.lid_status} />
      </div>

      {/* Charts Grid - 2 charts side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <WeightChart data={mockHistory} />
        <DistanceChart data={mockHistory} />
      </div>

      {/* Alerts Section */}
      <AlertsList alerts={mockAlerts} />
    </div>
  );
}

export default DashboardDemo;
