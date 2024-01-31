import { connectdb } from "@/lib/connectdb";
import { NextResponse } from "next/server";

export const POST = async (req: any) => {
  try {
    await connectdb();
    const slug = await req.json();
    console.log("slug", slug);
    return NextResponse.json({ slug: slug });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong!" });
  }
};
