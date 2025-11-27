// Data fetching limits
export const HISTORY_LIMIT = 100;  // Last 100 history readings
export const ALERTS_LIMIT = 10;    // Last 10 alerts

// Bin fill level thresholds
export const BIN_THRESHOLDS = {
  LOW: 50,
  MEDIUM: 75,
  HIGH: 90,
};

// Refresh intervals (if needed for non-realtime fallback)
export const REFRESH_INTERVAL = 5000; // 5 seconds

// Chart configuration
export const CHART_COLORS = {
  weight: '#3b82f6',    // blue-500
  distance: '#10b981',  // green-500
};
