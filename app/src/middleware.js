import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const {
    data: { user },
  } = await supabase.auth.getUser()


   
   const protectedRoutes = ['/profile', '/articles/create'];


  
  // if user is signed in and the current path is /login redirect the user to /profile
  if (user && req.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/profile', req.url))
  }

  // if user is not signed in and the current path is  protected route
  if (protectedRoutes.includes(req.nextUrl.pathname) && !user) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return res
}

export const config = {
  matcher: ['/login','/profile','/articles/create'],
};