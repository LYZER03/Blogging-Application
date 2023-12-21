import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/articles/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}

const Article = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div>
      <div className="flex">
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="text-2xl">{data.title}</h1>
          <p className="text-base font-light">{data.desc}</p>
        </div>
        <div className="flex-1 h-72 relative">
          <Image src={data.img} alt="" fill={true} objectFit="cover" />
        </div>
      </div>
      <div className="mt-12 text-lg font-light text-gray-600 text-justify">
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default Article;
