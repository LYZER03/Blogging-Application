'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AccountForm({ session }) {
    const user = session?.user

    return (
      <div>
        <h1 className='wt-title'>
          Profile
        </h1>
        <div className="mb-8">
          <form action="/auth/signout" method="post">
            <button className="rounded px-3 py-2 text-white bg-slate-500 hover:bg-blue-500" type="submit">
              Sign out
            </button>
          </form>
        </div>
        <pre><code>{JSON.stringify(user, null, 2)}</code></pre>
        </div>
    )
}