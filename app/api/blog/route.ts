import { connectdb } from "@/lib/connectdb";
import { NextResponse } from "next/server";
import Blog from "@/models/BlogModel";
export const GET = async () => {
  return NextResponse.json({ msg: "Message" });
};

export const POST = async (req: any) => {
  try {
    await connectdb();
    const { title, content } = await req.json();
    // console.log("title route", title, "content route", content);
    const blog = await Blog.create({ title, content });
    return NextResponse.json({ blog });
  } catch (error) {
    console.log("Failed to save the post", error);
  }
};
