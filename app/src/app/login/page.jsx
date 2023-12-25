
'use client'

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export default  function Login() {

    const supabase = createClientComponentClient()
    
    return (
      <div>
        <h1 className='wt-title'>
          Sign in
        </h1>
          <Auth supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['github']}
          redirectTo={`${process.env.NEXT_PUBLIC_VERCEL_URL}/auth/callback`}
           />
      </div>
    )
  }