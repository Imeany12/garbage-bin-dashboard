import React from 'react';

function StatsCard({ title, value, unit, icon: Icon, color = "text-gray-900", children }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        {Icon && <Icon className="w-6 h-6 text-gray-400" />}
      </div>

      {children ? (
        children
      ) : (
        <div className="flex items-baseline">
          <p className={`text-3xl font-bold ${color}`}>{value || '--'}</p>
          {unit && <span className="ml-2 text-gray-500 text-lg">{unit}</span>}
        </div>
      )}
    </div>
  );
}

export default StatsCard;
