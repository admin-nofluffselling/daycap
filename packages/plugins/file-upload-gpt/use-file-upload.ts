// use-file-upload.ts
import { useState } from 'react';
import { useUserData } from './use-user-data';

export function useFileUpload() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const { userData, loading: userDataLoading, error: userDataError } = useUserData();

  const handleFileUpload = async (file: File) => {
    if (userDataLoading) {
      setError(new Error('User data is still loading. Please try again.'));
      return;
    }

    if (userDataError) {
      setError(new Error('Failed to load user data. Please refresh and try again.'));
      return;
    }

    if (!userData) {
      setError(new Error('No user data available. Please log in and try again.'));
      return;
    }

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const fileContent = await file.text();
      const res = await fetch('/api/proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userOrganizationUUID: userData.userOrganizationUUID,
          workflowUUID: userData.workflowUUID,
          variables: {
            internal: {
              platform: "api"
            },
            session: {
              latestUserMessage: fileContent
            }
          }
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      console.error('Error in handleFileUpload:', err);
      setError(err instanceof Error ? err : new Error('An unknown error occurred'));
    } finally {
      setLoading(false);
    }
  };

  return { handleFileUpload, response, loading: loading || userDataLoading, error: error || userDataError };
}
