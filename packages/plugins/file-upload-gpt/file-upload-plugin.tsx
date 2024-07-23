// file-upload-plugin.tsx
'use client';

import React, { useState } from 'react';
import { useFileUpload } from './use-file-upload';
import { useUserData } from './use-user-data';
import { useAuth } from '@/hooks/use-auth';
import AuthPanelWrapper from '@/app/auth/components/AuthPanelWrapper';

export function FileUploadPlugin() {
  const { handleFileUpload, response, loading, error } = useFileUpload();
  const { userData, loading: userLoading, error: userError } = useUserData();
  const [file, setFile] = useState<File | null>(null);
  const auth = useAuth();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (file && userData) {
      handleFileUpload(file, userData.userOrganizationUUID);
    }
  };

  if (!auth.user) {
    return (
      <AuthPanelWrapper>
        <div>Please log in to use this feature.</div>
      </AuthPanelWrapper>
    );
  }

  if (userLoading) {
    return <div>Loading user data...</div>;
  }

  if (userError) {
    return <div>Error: {userError.message}</div>;
  }

  if (!userData) {
    return <div>Unable to load user data. Please try again later.</div>;
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
