"use client"
import React from 'react'
import { useState } from 'react'

const contact = () => {
    const [count, setCount] = useState(0);

    function handleClick() {
        console.log(count)
        setCount(count + 1);
    }

  return (
    <div>
      <button className="px-4 py-2 font-semibold text-sm text-white rounded-full bg-slate-400"
              onClick={handleClick}>Click Here
      </button>
      <p>Number Clicks: {count}</p>
    </div>
  )
}

export default contact