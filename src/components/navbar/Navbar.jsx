import Link from 'next/link'
import React from 'react'


async  function getData() {
  const apiUrl = "http://localhost:3000/api/profile";
  console.log("Fetching data from:", apiUrl);

  try {
    const res = await fetch(apiUrl, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Error response:", res.status, res.statusText);
      throw new Error("Failed to fetch data");
    }

    const dataProfile = await res.json();
    console.log("Data fetched successfully:", dataProfile);
    return dataProfile;
  } catch (error) {
    console.error("Error while fetching data:", error);
    throw error;
  }
}

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

const Navbar = async () => {
  const dataProfile = await getData();
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
      <div>
          <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
          </div>
          <span className="float-right">{dataProfile.userName}</span>
      </div>
    </div>
  );
};

export default Navbar

