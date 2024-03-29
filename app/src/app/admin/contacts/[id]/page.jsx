'use client'
import React from "react";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import md from 'markdown-it'


const Contact = ({ params }) => {
    const [contact, setContact] = useState()
    const supabase = createClientComponentClient()
  
    useEffect(() => {
      const getData = async () => {
        const { data } = await supabase.from('contacts').select().eq('id', params.id).limit(1).single()
        setContact(data)
      }
  
      getData()
    }, [])

  return (
    <div className="min-h-screen">
       <h1 className='wt-title'>
        View a contact message
      </h1>
      {contact && (
        <div className="overflow-hidden divide-y divide-slate-200 shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <div className="bg-slate-50">
            <dl className="grid grid-cols-[auto_1fr] px-3 py-4 [&_dt]:italic [&_dt]:text-slate-500 [&_dt]:pr-3">
              <dt>Name</dt>
              <dd>{contact.lastname}, {contact.firstname}</dd>
              <dt>Email</dt>
              <dd>{contact.email}</dd>
            </dl>
          </div>
          <div className="px-3 py-10 bg-white">
            <div dangerouslySetInnerHTML={{ __html: md().render(contact.message) }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
