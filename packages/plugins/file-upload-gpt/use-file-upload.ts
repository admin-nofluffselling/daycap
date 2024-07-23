// use-file-upload.ts
import { useState } from 'react';

export function useFileUpload() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const handleFileUpload = async (file: File, accountId: string) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const fileContent = await file.text();
      const res = await fetch('/api/file-upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileContent, accountId }),
      });

      if (!res.ok) {
        if (res.status === 401) {
          throw new Error('Authentication failed. Please log in and try again.');
        }
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

  return { handleFileUpload, response, loading, error };
}
