import React from "react";

type Props = {};

const BlogCard = (props: Props) => {
  return (
    <section className="z-40">
      <div className="bg-white border-2 md:w-[32rem] md:h-80 w-[28rem] h-80 ms-3 rounded-lga group shadow-lg m-2">
        <div className="bg-[url('https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp')] bg-center relative w-full h-full object-cover overflow-hidden ">
          <div className="absolute bottom-0">
            <p className="text-orange-400 line-clamp-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              sunt repellat magnam! Corrupti suscipit in esse ea accusamus totam
              quasi dignissimos vel nisi, tempora asperiores quos sapiente ullam
              perspiciatis sint?
            </p>
            <button className="py-2 px-6 border-2 m-2 rounded-md bg-green-400 border-none">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
