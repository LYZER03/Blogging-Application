import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/articles/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}


export async function generateMetadata({ params }) {

  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  };
}

const article = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div>
      <div className="flex">
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="text-2xl">{data.title}</h1>
          <p className="text-base font-light">
            {data.desc}
          </p>
          <div className="flex items-center space-x-4">
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className="flex-1 h-72 relative">
          <Image
            src={data.img}
            alt=""
            fill={true}
            objectFit="cover"
          />
        </div>
      </div>
      <div className="mt-12 text-lg font-light text-gray-600 text-justify">
        <p>
         {data.content}
        </p>
      </div>
    </div>
  );
};

export default article;