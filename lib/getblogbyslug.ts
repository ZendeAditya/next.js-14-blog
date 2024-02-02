import Blog from "@/models/BlogModel";
import { connectdb } from "./connectdb";

export const getBlogBySlug = async (slug: string) => {
  await connectdb();
  const blogBySlug = await Blog.findOne({ slug: slug });
  console.log(blogBySlug);
  return blogBySlug;
};
