import React from 'react';
import { Ruler } from 'lucide-react';
import StatsCard from './StatsCard.jsx';

function DistanceDisplay({ distance }) {
  return (
    <StatsCard
      title="Distance"
      value={distance?.toFixed(1) || '--'}
      unit="cm"
      icon={Ruler}
    />
  );
}

export default DistanceDisplay;
