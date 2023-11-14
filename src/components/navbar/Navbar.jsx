import Link from 'next/link'
import React from 'react'
import OutlineUserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon'


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
          <OutlineUserCircleIcon />
          <span className="float-right">{dataProfile.userName}</span>
      </div>
    </div>
  );
};

export default Navbar

