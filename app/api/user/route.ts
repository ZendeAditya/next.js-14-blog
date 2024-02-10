import { connectdb } from "@/lib/connectdb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const POST = async (req: any) => {
  try {
    await connectdb();
    const { userId, username, email, userImg } = await req.json();
    const currentUser = await User.create({ userId, username, email, userImg });
    return NextResponse.json({ currentUser });
  } catch (error) {
    console.log(error);
  }
};
