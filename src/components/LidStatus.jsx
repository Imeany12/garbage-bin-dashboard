import React from 'react';
import { Lock, LockOpen } from 'lucide-react';
import StatsCard from './StatsCard.jsx';

function LidStatus({ status }) {
  const isOpen = status === 'open';
  const Icon = isOpen ? LockOpen : Lock;
  const color = isOpen ? 'text-yellow-500' : 'text-green-500';

  return (
    <StatsCard title="Lid Status">
      <div className="flex items-center space-x-3">
        <Icon className={`w-10 h-10 ${color}`} />
        <span className={`text-2xl font-bold ${color} capitalize`}>
          {status || 'Unknown'}
        </span>
      </div>
    </StatsCard>
  );
}

export default LidStatus;
