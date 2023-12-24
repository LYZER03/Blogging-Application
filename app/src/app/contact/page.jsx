"use client"
import Image from 'next/image'
import React from 'react'
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

const ContactForm = () => {
 const [state, formAction] = useFormState(createContact, initialState)

 return (
    <div className="container mx-auto">
      <h1 className="text-5xl mb-24 text-center">Let's Keep in Touch</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="/images/book.jpg" 
            alt="contact illustration" 
            layout='fill' 
            objectFit="cover"
          />
        </div>
        <form className="bg-white rounded-lg shadow-lg p-8" action={formAction}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-700">Name</label>
            <input type='text' name='name' id='name' placeholder='Your Name' className="w-full p-3 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" required/>
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700">Email</label>
            <input type='text' name='email' id='email' placeholder='Your Email' className="w-full p-3 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" required/>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-700">Message</label>
            <textarea name='message' id='message' rows='5' placeholder='Your Message' className="w-full p-3 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" required></textarea>
          </div>
          <SubmitButton />
        </form>
      </div>
    </div>
 )
}

export default ContactForm