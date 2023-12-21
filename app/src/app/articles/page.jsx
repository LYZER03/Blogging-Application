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
    <div>
      {data.map((item) => (
        <Link 
          href={`/articles/${item.id}`}
          className="flex items-center gap-12 mb-12" 
          key={item.id} 
        >
          <div>
            <Image
              src={item.img}
              alt=""
              width={250}
              height={250}
              objectFit="cover"
            />
          </div>
          <div>
            <h1 className="text-4xl">{item.title}</h1>
            <p className="text-base text-gray-600" >{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default articles;