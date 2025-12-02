import React from "react";
import { Trash2 } from "lucide-react";
import StatsCard from "./StatsCard.jsx";

function TrashCountDisplay({ count }) {
  return (
    <StatsCard
      title="Trash Items"
      value={count !== null && count !== undefined ? count : "--"}
      unit="items"
      icon={Trash2}
    />
  );
}

export default TrashCountDisplay;
