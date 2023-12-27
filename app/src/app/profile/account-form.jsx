'use client'
import { useCallback, useEffect, useState} from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useUser }  from '../../components/UserContext'
import { useTheme } from 'next-themes'

export default function AccountForm({ session }) {
  const supabase = createClientComponentClient()
  const [loading, setLoading] = useState(false)
  const [fullname, setFullname] = useState(null);
  const [username, setUsername] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)
  
  
  const { user } = useUser();


  useEffect(() => {
    if (user) {
      setFullname(user.full_name || null);
      setUsername(user.username || null);
      setAvatarUrl(user.avatar_url || null);
    }
  }, [user]);

  async function updateProfile( {fullname, username}) {
    try {
      setLoading(true)

      const { error } = await supabase
        .from('profiles')
        .update({ full_name: fullname, username:username})
        .eq('id', user?.id)

      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }

  const [mounted, setMounted] = useState(false)
  const {theme, setTheme } = useTheme();

  useEffect(() =>{
    setMounted(true);
  }, [])

  if (!mounted){
    return null
  }
  
    return (
      <div className={`mx-auto max-w-xl px-4 py-24 sm:px-6 xlg:px-8 min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className="space-y-12">
          <div className="pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Welcome {username || user?.email }.</p>
            <p className="mt-1 text-sm leading-6 text-gray-600">This is your profile, update your info if required.</p>
            <div className="mt-10 grid grid-cols-1 gap-x-6">
              <div className="mb-6">
                <label className="block text-sm font-medium leading-6 text-gray-900"  htmlFor="email">Email</label>
                <span className="flex select-none items-center pl-3 font-bold  text-gray-700 text-sm">{user?.email} </span>
              </div>

              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-700">Full name</label>
                <input type='text'
                        name='fullName' 
                        id='full-name'
                        value={fullname || ''}
                        onChange={(e) => setFullname(e.target.value)}
                        className="w-full p-3 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"/>
              </div>
              <div className="mb-6">
                  <label htmlFor="user-name" className="block mb-2 text-sm font-bold text-gray-700">Username</label>
                  <input type='text'
                        name='user-name' 
                        id='username' 
                        value={username || ''}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"/>
              </div>
              <div className="mt-6 flex items-center col-span-1 justify-end gap-x-6">
              <button 
              type="submit" 
              className="rounded-md bg-green-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
              onClick={() => updateProfile({ fullname, username})}
              disabled={loading}
              >
                {loading ? 'Loading ...' : 'Update'}
              </button>
            </div>
            </div>
          </div>
        </div>   
      </div>
    )
}