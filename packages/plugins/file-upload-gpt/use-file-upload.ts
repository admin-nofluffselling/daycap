// use-file-upload.ts
import { useState } from 'react';
import axios from 'axios';

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
      const { data } = await axios.post(
        'https://dev.collaborative-dynamics.com/api/private/v0/workflow/execute',
        {
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
        },
        {
          headers: {
            'Authorization': 'Bearer sk-78aebe5a5b62463e9d8a56dd6da0d1b3c75a7ccc8e254ca4ab6d3e6eb45f7ae2',
            'Content-Type': 'application/json'
          }
        }
      );

      setResponse(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { handleFileUpload, response, loading, error };
}
