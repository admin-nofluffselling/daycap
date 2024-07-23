'use client';

import React, { useState } from 'react';
import { useFileUpload } from './use-file-upload';

export function FileUploadPlugin() {
  const { handleFileUpload, response, loading, error } = useFileUpload();
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (file) {
      handleFileUpload(file);
    }
  };

  return (
    <div>
      <h2>Upload File and Analyze</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".txt"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
        <button type="submit" disabled={!file || loading}>
          {loading ? 'Processing...' : 'Upload and Analyze'}
        </button>
      </form>
      {error && <div>Error: {error.message}</div>}
      {response && (
        <div>
          <h3>Analysis Result:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
