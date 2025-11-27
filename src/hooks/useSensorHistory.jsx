import { useState, useEffect } from 'react';
import { ref, query, orderByChild, limitToLast, onValue, off } from 'firebase/database';
import { database } from '../config/firebase.js';
import { HISTORY_LIMIT } from '../utils/constants.js';

function useSensorHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Query last 100 entries ordered by timestamp
    const historyRef = ref(database, 'sensors/history');
    const historyQuery = query(
      historyRef,
      orderByChild('timestamp'),
      limitToLast(HISTORY_LIMIT)
    );

    const unsubscribe = onValue(
      historyQuery,
      (snapshot) => {
        const data = snapshot.val();

        if (data) {
          // Convert object to array and sort by timestamp
          const historyArray = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
          })).sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

          setHistory(historyArray);
        } else {
          setHistory([]);
        }
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching history:', error);
        setError(error);
        setLoading(false);
      }
    );

    // Cleanup function to prevent memory leaks
    return () => {
      off(historyRef, 'value', unsubscribe);
    };
  }, []);

  return { history, loading, error };
}

export default useSensorHistory;
