// app/api/user-data/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function GET(req: NextRequest) {
  try {
    // Initialize the Supabase client
    const supabase = createRouteHandlerClient({ cookies });

    // Check if the user is authenticated
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    // Fetch user data from Supabase
    const { data: userData, error } = await supabase
      .from('user_accounts')
      .select(`
        id,
        accounts_memberships (
          account:accounts (id)
        )
      `)
      .eq('id', session.user.id)
      .single();

    if (error || !userData) {
      console.error('Error fetching user data:', error);
      return NextResponse.json({ error: 'User data not found' }, { status: 404 });
    }

    // Extract the required UUIDs
    const userOrganizationUUID = userData.accounts_memberships[0]?.account?.id;

    if (!userOrganizationUUID) {
      return NextResponse.json({ error: 'Incomplete user data' }, { status: 404 });
    }

    // Note: We don't have a workflows table, so we're not returning a workflowUUID
    return NextResponse.json({ userOrganizationUUID });
  } catch (error) {
    console.error('Error in user data route:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
