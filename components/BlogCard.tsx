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
  console.log(data);
  return (
    <section>
      <div>
        {data.map((data: any) => (
          <div key={data._id}>
            <p>{data._id}</p>
            <p>{data.title}</p>
            <p>{data.content}</p>
            <p>{data.slug}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogCard;
