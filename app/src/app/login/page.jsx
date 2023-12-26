
'use client'

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export default  function Login() {

    const supabase = createClientComponentClient()
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
          <div className="mb-6 text-2xl font-bold text-center text-gray-800">
            Your Login Title
          </div>

          <Auth supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['github']}
          redirectTo={`${process.env.NEXT_PUBLIC_VERCEL_URL}/auth/callback`}
          />
        </div>
    )
  }