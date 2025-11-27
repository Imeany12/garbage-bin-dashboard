import React from 'react';
import { Trash2 } from 'lucide-react';
import StatsCard from './StatsCard.jsx';

function BinFillLevel({ percentage = 0, isFull = false }) {
  // Determine color based on fill level
  const getColor = (pct) => {
    if (pct >= 80) return { bg: 'bg-red-500', text: 'text-red-500' };
    return { bg: 'bg-green-500', text: 'text-green-500' };
  };

  const color = getColor(percentage);

  return (
    <StatsCard title="Bin Fill Level" icon={Trash2}>
      <div className="space-y-3">
        <div className="flex items-baseline justify-between">
          <p className={`text-3xl font-bold ${color.text}`}>
            {percentage?.toFixed(1) || '0.0'}%
          </p>
          {isFull && (
            <span className="text-xs font-semibold px-2 py-1 bg-red-100 text-red-800 rounded">
              FULL
            </span>
          )}
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${color.bg} transition-all duration-500`}
            style={{ width: `${Math.min(percentage || 0, 100)}%` }}
          ></div>
        </div>
      </div>
    </StatsCard>
  );
}

export default BinFillLevel;
