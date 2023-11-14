import Image from 'next/image'
import React from 'react'

const contact = () => {
  return (
    <div>
      <h1 className="text-5xl mb-16 text-center gap-11">Let's Keep in Touch</h1>
      <div className="flex items-center gap-16">
        <div className="flex-1 h-80 relative overflow-hidden">
          <Image
            src ="/images/book.jpg" 
            alt="contact illustration" 
            layout='fill' 
            objectFit="cover"
          />
        </div>
        <form className="flex-1 flex flex-col gap-5">
          <input type='text' placeholder='name' className="p-5 bg-transparent border-3 border-black text-black text-xl font-bold"/>
          <input type='text' placeholder='email'className="p-5 bg-transparent border-3 border-black text-black text-xl font-bold"/>
          <textarea
            className="p-5 bg-transparent border-3 border-black text-black text-xl font-bold"
            placeholder='message'
            cols={30}
            rows={10}
          >
          </textarea>
          <button className="px-4 py-2 cursor-pointer bg-green-800 rounded-lg max-w-max text-white">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default contact