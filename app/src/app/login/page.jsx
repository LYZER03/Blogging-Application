
'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export default function Login() {

    const router = useRouter()
    const supabase = createClientComponentClient()

    return (
      <div>
        <h1 className='wt-title'>
          Sign in
        </h1>
          <Auth supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['github']} />
      </div>
    )
  }