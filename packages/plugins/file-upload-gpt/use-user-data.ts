// use-user-data.ts
import { useState, useEffect } from 'react';

interface UserData {
  userOrganizationUUID: string;
  workflowUUID: string;
}

export function useUserData() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        // Replace this with your actual API call to fetch user data
        const response = await fetch('/api/user-data');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  return { userData, loading, error };
}