import React from 'react';
import useSensorData from '../hooks/useSensorData.jsx';
import useSensorHistory from '../hooks/useSensorHistory.jsx';
import useAlerts from '../hooks/useAlerts.jsx';
import BinFillLevel from './BinFillLevel.jsx';
import WeightDisplay from './WeightDisplay.jsx';
import DistanceDisplay from './DistanceDisplay.jsx';
import LidStatus from './LidStatus.jsx';
import WeightChart from './WeightChart.jsx';
import DistanceChart from './DistanceChart.jsx';
import AlertsList from './AlertsList.jsx';
import LoadingSpinner from './LoadingSpinner.jsx';

function Dashboard() {
  const { currentData, loading: sensorLoading } = useSensorData();
  const { history, loading: historyLoading } = useSensorHistory();
  const { alerts, loading: alertsLoading } = useAlerts();

  const isLoading = sensorLoading || historyLoading || alertsLoading;

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          IoT Garbage Bin Monitor
        </h1>
        <p className="text-gray-600 mt-2">Real-time sensor data and analytics</p>
      </header>

      {/* Stats Grid - 4 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <BinFillLevel percentage={currentData?.bin_percentage} isFull={currentData?.bin_full} />
        <WeightDisplay weight={currentData?.weight} />
        <DistanceDisplay distance={currentData?.distance} />
        <LidStatus status={currentData?.lid_status} />
      </div>

      {/* Charts Grid - 2 charts side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <WeightChart data={history} />
        <DistanceChart data={history} />
      </div>

      {/* Alerts Section */}
      <AlertsList alerts={alerts} />
    </div>
  );
}

export default Dashboard;
