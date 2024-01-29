import Image from "next/image";
import React from "react";
import BlogCard from "./BlogCard";

const Hero = () => {
  return (
    <section className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
      <BlogCard />
    </section>
  );
};

export default Hero;
