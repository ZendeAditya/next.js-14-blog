import { connectdb } from "@/lib/connectdb";
import { Types } from "mongoose";
import { NextResponse } from "next/server";
import Blog from "@/models/BlogModel";
export const GET = async () => {
  try {
    await connectdb();
    const allblogs = await Blog.find();
    return NextResponse.json({ allblogs });
  } catch (error) {
    return NextResponse.json({ msg: "Faild to fetch blogs" });
  }
};

export const POST = async (req: any) => {
  try {
    await connectdb();
    const { title, content, selectedImage, userId } = await req.json();

    const userIdObject = new Types.ObjectId(userId);
    if (!userId) {
      throw new Error("userId is required");
    }
    const blog = await Blog.create({
      coverImg: selectedImage,
      title,
      content,
      user: userIdObject,
    });
    console.log(blog);
    return NextResponse.json({ blog });
  } catch (error) {
    console.log("Failed to save the post", error);
  }
};
