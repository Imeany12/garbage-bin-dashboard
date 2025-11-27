/**
 * Format timestamp for display
 * @param {string} timestamp - ISO timestamp string
 * @returns {string} Formatted time string
 */
export const formatTimestamp = (timestamp) => {
  if (!timestamp) return '--';

  const date = new Date(timestamp);

  // Check if date is valid
  if (isNaN(date.getTime())) return '--';

  // Format as HH:MM
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

/**
 * Format full date and time
 * @param {string} timestamp - ISO timestamp string
 * @returns {string} Formatted date and time string
 */
export const formatFullTimestamp = (timestamp) => {
  if (!timestamp) return '--';

  const date = new Date(timestamp);

  if (isNaN(date.getTime())) return '--';

  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

/**
 * Calculate bin fill percentage color class
 * @param {number} percentage - Fill percentage (0-100)
 * @returns {object} Color classes for bg and text
 */
export const getBinColor = (percentage = 0) => {
  if (percentage >= 90) return { bg: 'bg-bin-full', text: 'text-bin-full' };
  if (percentage >= 75) return { bg: 'bg-bin-high', text: 'text-bin-high' };
  if (percentage >= 50) return { bg: 'bg-bin-medium', text: 'text-bin-medium' };
  return { bg: 'bg-bin-low', text: 'text-bin-low' };
};

/**
 * Safely parse numeric value
 * @param {any} value - Value to parse
 * @param {number} defaultValue - Default if parsing fails
 * @returns {number} Parsed number or default
 */
export const safeParseNumber = (value, defaultValue = 0) => {
  const parsed = parseFloat(value);
  return isNaN(parsed) ? defaultValue : parsed;
};
