// use-file-upload.ts
'use client';

import { useState } from 'react';

export function useFileUpload() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const handleFileUpload = async (file: File) => {
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
          userOrganizationUUID: "aa7d5a12-66d6-4f18-b906-310e990ad796",
          workflowUUID: "2eadf7b4-d869-4dcb-9cd6-8a8c64ab1359",
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

  return { handleFileUpload, response, loading, error };
}
