'use client';

import { useRouter } from 'next/navigation';
import { useEffect,useContext } from 'react';
import { useUser }  from './UserContext'

export default function SupabaseListener({
  serverAccessToken
}) {
  const {supabase} = useUser()
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