import { useState, useEffect } from 'react';
import { ref, query, orderByChild, limitToLast, onValue, off } from 'firebase/database';
import { database } from '../config/firebase.js';
import { ALERTS_LIMIT } from '../utils/constants.js';

function useAlerts() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const alertsRef = ref(database, 'alerts');
    const alertsQuery = query(
      alertsRef,
      orderByChild('timestamp'),
      limitToLast(ALERTS_LIMIT)
    );

    const unsubscribe = onValue(
      alertsQuery,
      (snapshot) => {
        const data = snapshot.val();

        if (data) {
          // Convert to array and sort by timestamp (newest first)
          const alertsArray = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
          })).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

          setAlerts(alertsArray);
        } else {
          setAlerts([]);
        }
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching alerts:', error);
        setError(error);
        setLoading(false);
      }
    );

    // Cleanup function to prevent memory leaks
    return () => {
      off(alertsRef, 'value', unsubscribe);
    };
  }, []);

  return { alerts, loading, error };
}

export default useAlerts;
