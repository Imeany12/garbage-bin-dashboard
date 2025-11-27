import { useState, useEffect } from 'react';
import { ref, onValue, off } from 'firebase/database';
import { database } from '../config/firebase.js';

function useSensorData() {
  const [currentData, setCurrentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const sensorRef = ref(database, 'sensors/current');

    // Set up real-time listener
    const unsubscribe = onValue(
      sensorRef,
      (snapshot) => {
        const data = snapshot.val();
        setCurrentData(data);
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching sensor data:', error);
        setError(error);
        setLoading(false);
      }
    );

    // Cleanup function to prevent memory leaks
    return () => {
      off(sensorRef, 'value', unsubscribe);
    };
  }, []);

  return { currentData, loading, error };
}

export default useSensorData;
