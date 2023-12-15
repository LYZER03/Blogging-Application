'use client'
import Link from 'next/link'
import  { React,useContext }  from 'react'
import OutlineUserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon'
import UserContext from '../UserContext'


const links = [
  {
    id:1,
    title:"Home",
    url:"/"
  },
  {
    id:2,
    title:"articles",
    url:"/articles"
  },
  {
    id:3,
    title:"about",
    url:"/about"
  },
  {
    id:4,
    title:"contact",
    url:"/contact"
  }
];

const Navbar =
 () => {
  const {session} = useContext(UserContext)
  const user = session?.user
  console.log('user',user)
  return (
    <div className="h-16 flex justify-between items-center">
      <Link className="font-bold text-2xl" href='/'>
        WEBTECH BLOG
      </Link>
      <div className="font-bold flex items-center gap-5">
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
      {user && (
          <div className="rounded py-1 px-2 text-slate-600 border border-cyan-700 hover:bg-cyan-500 hover:text-slate-50">
            <Link href="/profile" className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6">
            {user.user_metadata.user_name}
              <OutlineUserCircleIcon />
            </Link>
          </div>
        )}
        <div className="py-1 px-2 text-slate-800 hover:text-slate-500">
          <form method="post">
          {user ?
          
            <button className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6" formAction="/auth/signout">
              Sing out
            </button>
            :
            <button className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6">
              Sing in
            </button>
          }
          </form>
        </div>
    </div>

  );
};

export default Navbar

