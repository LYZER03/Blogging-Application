'use client';

import { useRouter } from 'next/navigation';
import { useEffect,useContext } from 'react';
import UserContext from './UserContext'

export default function SupabaseListener({
  serverAccessToken
}) {
  const {supabase} = useContext(UserContext)
  const router = useRouter()
  useEffect(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== serverAccessToken) {
        router.refresh();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [serverAccessToken, router, supabase]);

  return null;
}