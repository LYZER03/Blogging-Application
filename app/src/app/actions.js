'use server'
import React from "react";
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function createContact(prevState, formData) {

    try {
      const cookieStore = cookies()
      const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
      
      const dataForm = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
      }
      const { data,error } = await supabase
            .from('contacts')
            .insert({ firstname: `${dataForm.name}`, email: `${dataForm.email}`, message: `${dataForm.message}`})

      if (error) throw error
      return { msgResponse: `Added contact ${dataForm.name}`}
    } catch (error) {
      return { msgResponse: `Fail to add contact`}
    }
}