import { NextResponse } from "next/server";
import { mockData } from "../mockdata";

export const GET = async (request) => {
  const { id } = request.params; // Get the article ID from the URL
  console.log(params)
  // Find the article with the matching ID
  const article = mockData.find((item) => item.id === Number(id));

  if (!article) {
    return new NextResponse("Article not found", { status: 404 });
  }

  return new NextResponse(JSON.stringify(article), { status: 200 });
};
