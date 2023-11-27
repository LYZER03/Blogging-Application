'use client'
import Image from 'next/image'
import  React from 'react'
import { useFormState, useFormStatus} from 'react-dom' 
import { createContact } from '@/app/actions'


const initialState = {
  msgResponse: null,
}

function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <button className="px-4 py-2 cursor-pointer bg-green-800 rounded-lg max-w-max text-white">
      Send
    </button>
  )
}

const contact = () => {
  const [state, formAction] = useFormState(createContact, initialState)
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
        <form className="flex-1 flex flex-col gap-5" action={formAction}>
          <input type='text' name='name' placeholder='name' className="p-5 bg-transparent border-3 border-black text-black text-xl font-bold" required/>
          <input type='text' name='email' placeholder='email'className="p-5 bg-transparent border-3 border-black text-black text-xl font-bold" required/>
          <textarea
            name='message'
            className="p-5 bg-transparent border-3 border-black text-black text-xl font-bold"
            placeholder='message'
            cols={30}
            rows={10}
            required
          >
          </textarea>
          <SubmitButton />  
          <p aria-live="polite" className="text-black text-lg	">
           {state?.msgResponse}
          </p>   
        </form>
      </div>
     
    </div>
  )
}

export default contact