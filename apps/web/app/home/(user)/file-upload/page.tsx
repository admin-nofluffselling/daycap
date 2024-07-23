// app/home/(user)/file-upload/page.tsx
import { loadUserWorkspace } from '~/home/_lib/server/load-user-workspace';
import { FileUploadForm } from './FileUploadForm';

export default async function FileUploadPage() {
  const { account, user } = await loadUserWorkspace();

  if (!user) {
    return <div>Please log in to use this feature.</div>;
  }

  if (!account) {
    return <div>Unable to load account data. Please try again later.</div>;
  }

  return (
    <div>
      <h2>Upload File and Analyze</h2>
      <FileUploadForm accountId={account.id} />
    </div>
  );
}
