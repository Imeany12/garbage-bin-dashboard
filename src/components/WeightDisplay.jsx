import React from 'react';
import { Scale } from 'lucide-react';
import StatsCard from './StatsCard.jsx';

function WeightDisplay({ weight }) {
  return (
    <StatsCard
      title="Current Weight"
      value={weight?.toFixed(0) || '--'}
      unit="g"
      icon={Scale}
    />
  );
}

export default WeightDisplay;
