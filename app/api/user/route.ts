import { connectdb } from "@/lib/connectdb";
import { NextResponse } from "next/server";

export const POST = async (req: any) => {
  try {
    await connectdb();
    const { userId, email, userImg } = req.json();
    console.log(userId, email, userImg);
    return NextResponse.json({ userId, email, userImg });
  } catch (error) {
    console.log(error);
  }
};
