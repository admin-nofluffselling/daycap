import { useMutation } from '@tanstack/react-query';

import { useSupabase } from './use-supabase';

export function useSignOut() {
  const client = useSupabase();

  return useMutation({
    mutationFn: () => {
      return client.auth.signOut();
    },
  });
}
