'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
export default function Login() {

    const supabase = createClientComponentClient()

    return (
      <div>
        <h1 className='wt-title'>
          Sign in
        </h1>
          <Auth supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['github']}
          redirectTo={`http://localhost:3000/auth/callback`}
           />
      </div>
    )
  }