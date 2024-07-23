// app/home/(user)/file-upload/FileUploadForm.tsx
'use client';

import React, { useState } from 'react';
import { useFileUpload } from './use-file-upload';

interface FileUploadFormProps {
  accountId: string;
}

export function FileUploadForm({ accountId }: FileUploadFormProps) {
  const { handleFileUpload, response, loading, error } = useFileUpload();
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (file) {
      handleFileUpload(file, accountId);
    }
  };

  return (
    <div>
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
