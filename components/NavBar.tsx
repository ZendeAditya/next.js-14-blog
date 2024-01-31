"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ModeToggle } from "./DarkMode";
import { Menu, Pencil, X } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const NavBar = () => {
  const [open, setOpen] = useState(true);
  const Links = [
    {
      id: 1,
      label: "Home",
      Link: "/home",
    },
    {
      id: 2,
      label: "About",
      Link: "/about",
    },
    {
      id: 3,
      label: "Contact",
      Link: "/contact",
    },
    {
      id: 4,
      label: "SignUp",
      Link: "/signup",
    },
  ];
  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <header>
      <nav
        className={`bg-gray-200 dark:bg-black py-4 border-b-2 border-black flex items-center lg:justify-between justify-between sticky top-0 `}
      >
        <h2 className="px-3 text-3xl text-orange-500 cursor-pointer">
          {"<DevBlog/>"}
        </h2>
        <ul
          className={`lg:flex items-start justify-end  lg:gap-1 mx-2 absolute top-0  -right-1  w-60 h-full py-3 [&_li]:py-3 [&_li]:px-10 lg:[&_li]:-px-5 border-2 lg:border-0  dark:text-white  
          ${!open ? "block" : "hidden"}`}
        >
          {Links.map((link) => (
            <li key={link.id} className="hover:text-orange-300 text-orange-500">
              <Link href={link.Link}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="px-3 lg:px-0 z-40 absolute right-8 lg:right-[32rem] flex items-center gap-2 lg:gap-7 ps-2 ">
          <ModeToggle />
          <UserButton afterSignOutUrl="/" />
          <Link href="/newStory">
            <Pencil className="w-6 h-6 cursor-pointer" />
          </Link>
        </div>
        <button
          className="lg:hidden cursor-pointer z-40 px-3"
          onClick={handleMenu}
        >
          {!open ? <Menu /> : <Menu />}
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
