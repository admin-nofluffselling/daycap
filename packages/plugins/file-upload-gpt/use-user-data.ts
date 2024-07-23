// use-user-data.ts
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/use-auth';

interface UserData {
  userOrganizationUUID: string;
  // Note: workflowUUID has been removed as it's not in our schema
}

export function useUserData() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const auth = useAuth();

  useEffect(() => {
    async function fetchUserData() {
      if (!auth.user) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('/api/user-data');
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch user data');
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
  }, [auth.user]);

  return { userData, loading, error };
}
