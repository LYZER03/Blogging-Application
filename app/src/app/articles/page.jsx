import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

async function getData() {
  const apiUrl = `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/articles/`;

  try {
    const res = await fetch(apiUrl, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

const articles = async () => {
  const data = await getData();
  return (
     <div className="container mx-auto px-4 py-16">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
         {data.map((item) => (
           <Link 
             href={`/articles/${item.id}`}
             className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
             key={item.id} 
           >
             <div className="relative h-64">
               <Image
                 src={item.img}
                 alt=""
                 layout="fill"
                 objectFit="cover"
                 className="rounded-lg"
               />
             </div>
             <div className="p-4">
               <h1 className="text-xl font-semibold mb-2">{item.title}</h1>
               <p className="text-gray-600">{item.desc}</p>
             </div>
           </Link>
         ))}
       </div>
     </div>
  );
 }
 
 export default articles;