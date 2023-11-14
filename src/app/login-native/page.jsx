"use client"
import React, {useState} from 'react'

const contact = () => {
    const [message, setMessage] = useState(null)
    const onSubmit = function(e){
    e.preventDefault()
    const data = new FormData(e.target)
    setMessage(
      <div>
        <h2 className="text-center mt-3">Form data</h2>
        <pre><code>{JSON.stringify(Object.fromEntries(data.entries()), null, 2)}</code></pre>
      </div>
    )
    }
      return (
        <div>
            <form onSubmit={onSubmit}>
            <h2>Login Form</h2>
            <div className="mt-10">
                <label className="mr-5">Username</label>
                <input className="border-solid border-black border-2 px-2 py-2"  type="text" name="username" />
            </div>
            <div className="mt-10">
                <label className="mr-5">Password</label>
                <input className="border-solid border-black border-2 px-2 py-2" type="text" name="password" />
            </div>
            <div className="mt-10">
                <button type="submit" className="px-4 py-2 font-semibold text-sm text-white rounded-full bg-slate-400">Submit</button>
            </div>
            </form>
            {message &&
            <div
                aria-label="Overlow below the drawer dialog"
                className="fixed inset-0 bg-black/80 flex items-center justify-center"
                onClick={() => setMessage(null)}
                role="dialog"
            >
            <div
                aria-label="Alert pane"
                className="max-h-[90vh] max-w-[95vw] overflow-auto p-4 prose bg-white">
                {message}
            </div>
        </div>
      }
        </div>
    )
}

export default contact