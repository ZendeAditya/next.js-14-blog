import { connectdb } from "@/lib/connectdb";
import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ msg: "Message" });
};

export const POST = async (req: any) => {
  await connectdb();

  const { title, content } = req.json();
  console.log(title, content);
  return NextResponse.json({ t: title, c: content });
};
