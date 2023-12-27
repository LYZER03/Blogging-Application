
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import AccountForm from './account-form'
import { useTheme } from 'next-themes'

export default async function Profile() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme } = useTheme();

  useEffect(() =>{
    setMounted(true);
  }, [])

  if (!mounted){
    return null
  }

  return <AccountForm className={`${theme === 'dark' ? ' text-white' : 'text-black'}`} session={session} />
  
}