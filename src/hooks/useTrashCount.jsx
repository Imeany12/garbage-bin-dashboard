import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../config/firebase.js";

function useTrashCount() {
  const [trashCount, setTrashCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const trashCountRef = ref(database, "bin/trash_count");

    // Set up real-time listener
    const unsubscribe = onValue(
      trashCountRef,
      (snapshot) => {
        const data = snapshot.val();
        setTrashCount(data);
        console.log("Fetched trash count:", data);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching trash count:", error);
        setError(error);
        setLoading(false);
      }
    );

    // Cleanup function to prevent memory leaks
    return () => {
      unsubscribe();
    };
  }, []);
  console.log("Returning trash count:", trashCount);

  return { trashCount, loading, error };
}

export default useTrashCount;
