const getBlogBySlug = async (slug: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getBlogBySlug(params.slug);
  console.log(data);
  return <>My Post: {params.slug}</>;
}
