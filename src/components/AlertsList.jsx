import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { formatFullTimestamp } from '../utils/helpers.js';

function AlertsList({ alerts = [] }) {
  // Show last 10 alerts
  const recentAlerts = alerts.slice(0, 10);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-4">
        <AlertTriangle className="w-6 h-6 text-red-500" />
        <h3 className="text-lg font-semibold text-gray-900">Recent Alerts</h3>
      </div>

      {recentAlerts.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>No alerts</p>
        </div>
      ) : (
        <div className="space-y-3">
          {recentAlerts.map((alert) => (
            <div
              key={alert.id}
              className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-800">
                    {alert.message}
                  </p>
                  <p className="text-xs text-red-600 mt-1">
                    Type: {alert.type} | Value: {alert.value}
                  </p>
                </div>
                <span className="text-xs text-red-600 whitespace-nowrap ml-4">
                  {formatFullTimestamp(alert.timestamp)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AlertsList;
