import { connectdb } from "@/lib/connectdb";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest) => {
  try {
    await connectdb();
    const slug = req.query;
    console.log("slug", slug);
    return NextResponse.json({ slug: slug });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong!" });
  }
};
