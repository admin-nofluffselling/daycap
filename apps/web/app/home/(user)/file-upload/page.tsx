// app/home/(user)/file-upload/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useUserWorkspace } from '@kit/accounts/hooks/use-user-workspace';
import { useFileUpload } from './use-file-upload';

export default function FileUploadPage() {
  const { account, user, accounts } = useUserWorkspace();
  const { handleFileUpload, response, loading, error } = useFileUpload();
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('useEffect triggered');
    console.log('User:', user);
    console.log('Account:', account);
    console.log('Accounts:', accounts);

    // Add a small delay to ensure the data has time to load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [user, account, accounts]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (file && accounts && accounts.length > 0) {
      const accountId = account?.id || accounts[0].id;
      if (accountId) {
        handleFileUpload(file, accountId);
      } else {
        console.error('No valid account ID found');
      }
    }
  };

  if (isLoading) {
    return <div>Loading user data...</div>;
  }

  console.log('Rendering component');
  console.log('User:', user);
  console.log('Account:', account);
  console.log('Accounts:', accounts);

  if (!user) {
    return <div>Please log in to use this feature.</div>;
  }

  if (!account && (!accounts || accounts.length === 0)) {
    return <div>Unable to load account data. Please try reloading the page.</div>;
  }

  return (
    <div>
      <h2>Upload File and Analyze</h2>
      {!account && accounts && accounts.length > 0 ? (
        <p>Using first available account: {accounts[0].name}</p>
      ) : account ? (
        <p>Using account: {account.name}</p>
      ) : (
        <p>No account data available. Please try reloading the page.</p>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".txt"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          disabled={loading}
        />
        <button type="submit" disabled={!file || loading || (!account && (!accounts || accounts.length === 0))}>
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
