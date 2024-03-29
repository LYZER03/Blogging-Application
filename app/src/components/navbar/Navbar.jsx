'use client'
import Link from 'next/link'
import { React, useEffect } from 'react'
import OutlineUserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon'
import { useUser } from '../UserContext'
import { useState } from 'react'
import Image from "next/image";
import logo_blog from "/public/images/logo_blog.png"
import { Search } from 'lucide-react'
import { Sun } from 'lucide-react'
import { Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

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

const Navbar = () => {
  const { user } = useUser()
  const profileName = user
  ? user.username && user.username.trim() !== ''
    ? user.username
    : user.email
  : null;

  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false)

  const [mounted, setMounted] = useState(false)
  const {theme, setTheme } = useTheme();

  useEffect(() =>{
    setMounted(true);
  }, [])

  if (!mounted){
    return null
  }

  return (
    <nav className={`z-10 sticky top-0 flex items-center justify-between w-full px-5vw py-5 h-[80px] ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <Link href='/'>
        <Image src={logo_blog} alt='logo' className='flex-none w-20'/>
      </Link>

      <div className={`absolute w-full left-0 top-full mt-0 py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:opacity-100 pointer-events-auto ${theme === "dark" ? "bg-dark-gray text-white" : "bg-white text-black"} ` + (searchBoxVisibility?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none duration-100")}>
        <input
          type="text"
          placeholder="Search"
          className="w-full md:w-auto bg-gray-200 p-4 pl-6 pr-12 md:pr-6 rounded-full placeholder:text-gray-600 md:pl-12"
        />
        <Search className='absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-black'/>
      </div>

      <div className='flex items-center gap-3 md:gap-6 ml-auto px-[3vw]'>
        <button className='md:hidden bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center'
          onClick={()=>setSearchBoxVisibility(currentVal => !currentVal)}
        >
          <Search/>
        </button>


        {theme === "dark" ? (
          <Sun className={`rounded-full ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}`} cursor="pointer" onClick={() => setTheme('light')}/>
        ) : (
          <Moon className={`rounded-full ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}`} onClick={() => setTheme('dark')}/>
        )}


        {links.map((link) => (
          <Link  key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}

        {profileName&& (
          <div className="rounded py-1 px-2 text-slate-600 border border-cyan-700 hover:bg-cyan-500 hover:text-slate-50">
            <Link href="/profile" className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6">
            {profileName}
              <OutlineUserCircleIcon />
            </Link>
          </div>
        )}
        <div className={`whitespace-nowrap rounded-full py-3 px-6 text-xl capitalize hover:bg-opacity-80 ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}`}>
          <form method="post">
          {profileName ?
          
          <button className={`flex gap-2 [&_svg]:h-6 [&_svg]:w-6 ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}`} formAction="/auth/signout">
              Sing out
            </button>
            :
            <Link href="/login">
              <button className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6">
                Sign in
              </button>
            </Link>
          }
          </form>
        </div>
      </div>
  
    </nav>


  );
};

export default Navbar

