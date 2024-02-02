import { getBlogBySlug } from "@/lib/getblogbyslug";

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getBlogBySlug(params.slug);
  const blog = data._doc;
  console.log(data._doc);
  return (
    <section>
      <p>{blog.title}</p>
      <p>{blog.coverImg}</p>
      <p
        className="py-2 line-clamp-3"
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      />
      <p>{blog._id}</p>
    </section>
  );
}
