"use client"
import React, {useState} from 'react'

const pageLoginControlled = () => {
  const [data, setData] = useState({})
  const [message, setMessage] = useState(null)
  const onSubmit = function(e){
    e.preventDefault()
    setMessage(
      <div>
        <h2 className="text-center mt-3">Form data</h2>
        <pre><code>{JSON.stringify(data, null, 2)}</code></pre>
      </div>
    )
  }
  return (
    <div>
      <div>
        <h1 className='wt-title'>
          Login with native elements
        </h1>
        <form className="[&_span]:block [&_div]:py-3" onSubmit={onSubmit}>
          <div className="mt-10">
            <label>
              <span className="mr-5">Username</span>
              <input 
                className="border-solid border-black border-2 px-2 py-2"
                type="text"
                name="username"
                value={data.username}
                onChange={e => setData({...data, ...{username: e.target.value}})}
              />
            </label>
          </div>
          <div className="mt-10">
            <label>
              <span className="mr-5">Password</span>
              <input
                className="border-solid border-black border-2 px-2 py-2"
                type="password"
                name="password"
                value={data.password}
                onChange={e => setData({...data, ...{password: e.target.value}})}
              />
            </label>
          </div>
          <div className="mt-10">
            <button className="px-4 py-2 font-semibold text-sm text-white rounded-full bg-slate-400">
              Login
            </button>
          </div>
        </form>
      </div>
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

export default pageLoginControlled