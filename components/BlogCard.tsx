import Link from "next/link";
import React from "react";

type Props = {};
const getallblogs = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data.allblogs);
  return data.allblogs;
};

const BlogCard = async (props: Props) => {
  const data = await getallblogs();
  return (
    <section>
      <div className="overflow-hidden">
        {data.map((data: any) => (
          <div
            key={data._id}
            className="minw border-2 p-3 mx-4 mt-2 rounded-lg"
          >
            <h1 className="text-xl font-semibold py-2">{data.title}</h1>
            <p
            className="py-2 line-clamp-3"
              dangerouslySetInnerHTML={{
                __html: data.content,
              }}
            />
            <button className="py-3 px-8 rounded-md bg-green-200 hover:bg-green-300 my-2">
              <Link href={`${data.slug}`}>Read More</Link>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogCard;
