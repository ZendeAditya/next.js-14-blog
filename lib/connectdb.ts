import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("db connected");
  } catch (error) {
    throw new Error("Failed to connect to db");
  }
};
