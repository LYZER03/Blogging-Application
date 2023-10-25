"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";

async function fetchData(id) {
  try {
    const apiUrl = `http://localhost:3000/api/articles/${id}`;
    const res = await fetch(apiUrl, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    console.log(res.json())
    return res.json();
  } catch (error) {
    throw error;
  }
}

const Article = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex">
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="text-2xl">{data.title}</h1>
          <p className="text-base font-light">{data.desc}</p>
        </div>
        <div className="flex-1 h-72 relative">
          <Image src={data.img} alt={data.altText} fill={true} objectFit="cover" />
        </div>
      </div>
      <div className="mt-12 text-lg font-light text-gray-600 text-justify">
        <p>{data.content}</p>
      </div>
    </div>
  );
};

const ArticlePage = ({ params }) => {
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    fetchData(params.id)
      .then((data) => setArticleData(data))
      .catch((error) => console.error("Error while fetching data:", error));
  }, [params.id]);

  return <Article data={articleData} />;
};

export default ArticlePage;
