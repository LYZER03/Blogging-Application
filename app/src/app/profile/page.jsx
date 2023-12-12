'use client'
import { useRouter } from 'next/navigation'
import { createClientComponentClient} from '@supabase/auth-helpers-nextjs'

export default function Page() {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const onClickLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }
  return (
    <div>
      <h1 className='wt-title'>
        Profile
      </h1>
      <div className="mb-8">
        <button
          className="rounded px-3 py-2 text-white bg-slate-500 hover:bg-blue-500"
          onClick={onClickLogout}
        >
          Sign out
        </button>
      </div>
     {/*  <pre><code>{JSON.stringify(user, null, 2)}</code></pre> */}
      </div>
  )
}