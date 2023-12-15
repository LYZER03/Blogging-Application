'use client';
import {createContext, useState, useEffect} from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'


const Context = createContext()

export default Context

const ContextProvider = ({
  children,
  session
}) =>  {
  const supabase = createClientComponentClient()

  return (
    <Context.Provider
        value={{ supabase, session }}
    >
      {children}
    </Context.Provider>
  )
}

export {ContextProvider} 