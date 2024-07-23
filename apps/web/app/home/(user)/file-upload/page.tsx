// app/home/(user)/file-upload/page.tsx
'use client';

import React, { useState } from 'react';
import { useFileUpload } from './use-file-upload';
import { useUserWorkspace } from '@kit/accounts/hooks/use-user-workspace';

export default function FileUploadPage() {
  const { handleFileUpload, response, loading, error } = useFileUpload();
  const { account, user } = useUserWorkspace();
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (file && account) {
      handleFileUpload(file, account.id);
    }
  };

  if (!user) {
    return <div>Please log in to use this feature.</div>;
  }

  if (!account) {
    return <div>Unable to load account data. Please try again later.</div>;
  }

  return (
    <div>
      <h2>Upload File and Analyze</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".txt"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          disabled={loading}
        />
        <button type="submit" disabled={!file || loading}>
          {loading ? 'Processing...' : 'Upload and Analyze'}
        </button>
      </form>
      {loading && <div>Processing your file. This may take a few moments...</div>}
      {error && <div>Error: {error.message}</div>}
      {response && !loading && (
        <div>
          <h3>Analysis Result:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}