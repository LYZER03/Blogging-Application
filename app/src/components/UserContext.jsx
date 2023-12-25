'use client';
import {createContext, useState, useEffect,useContext} from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'


const Context = createContext()

export function useUser() {
  return useContext(Context);
}

export function ContextProvider({ children ,session}) {
  const [user, setUser] = useState(null)
  const supabase = createClientComponentClient()
  const fetchUserData = async (userId) => {
    if (userId) {
      const { data, error, status } = await supabase
        .from('profiles')
        .select(`id,full_name,username,avatar_url,email`)
        .eq('id', userId)
        .single();
     
      if (error) {
        console.error('Error al obtener datos del usuario', error);   
      } else {
        setUser(data);
      }
    }
  };
  useEffect(() => {
    // Obtén los datos del usuario cuando se actualice la sesión de usuario
    if (session?.user?.id) {
      fetchUserData(session.user.id);
    }
  }, [session]);

  const value = {
    supabase,
    user
  };

  return (
    <Context.Provider
        value={value}
    >
      {children}
    </Context.Provider>
  )
}
