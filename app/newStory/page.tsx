"use client";
import React, { useState, useRef, useMemo, FormEvent } from "react";
import JoditEditor from "jodit-react";
import { ArrowLeft } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
type Props = {};
const JoditEditors = dynamic(() => import("jodit-react"), { ssr: false });

const EditorPage = () => {
  const editor = useRef(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  console.log("title", title, "content", content);
  const router = useRouter();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
      if (!res.ok) {
        console.log("Something went wrong!", res.statusText);
      }
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log("Failed to publish blog", error);
    }
  };
  return (
    <>
      <section className="flex items-center justify-center flex-col gap-4">
        <Link href={"/"}>
          <button className="py-2 px-8 flex items-center justify-start bg-white border-2 m-2 rounded-md text-black gap-3">
            <ArrowLeft /> Back to home
          </button>
        </Link>
        <h2 className="text-2xl p-2">Write Your Story</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="text"
            id="title"
            className="py-2 px-2 w-full h-14 border-b-2 bg-transparent mb-4 rounded-md text-lg outline-none "
            placeholder="Write title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* <span className="text-xs pb-3">
            *write meaningful title beacuse this is your slug for the blog
          </span> */}
          <JoditEditor
            ref={editor}
            value={content}
            onBlur={(newContent) => setContent(newContent)}
            onChange={(newContent) => setContent(newContent)}
            className="dark:text-black"
          />
          <button
            type="submit"
            className="py-2 px-10 cursor-pointer rounded-md bg-green-400 m-2"
          >
            Publish
          </button>
        </form>
      </section>
    </>
  );
};

export default EditorPage;
