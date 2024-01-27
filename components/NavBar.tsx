"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ModeToggle } from "./DarkMode";
import { Menu, X } from "lucide-react";
type Props = {};

const NavBar = (props: Props) => {
  const [open, setOpen] = useState(false);
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
    <div>
      <nav className="bg-gray-200 dark:bg-black py-4 border-b-2 border-black flex items-center justify-end">
        <ul
          className={`lg:flex items-start justify-end gap-4 mx-2 absolute top-0 left-[50%] -right-1  w-[full] h-full py-3 [&_li]:py-3 [&_li]:px-10 border-2 lg:border-0 bg-gray-500 dark:text-black
          ${!open ? "block" : "hidden"}`}
        >
          {Links.map((link) => (
            <li key={link.id} className="hover:text-orange-300">
              <Link href={link.Link}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <button className="px-3 lg:px-0 z-40">
          <ModeToggle />
        </button>
        <button
          className="lg:hidden cursor-pointer z-40 px-3"
          onClick={handleMenu}
        >
          {!open ? <Menu /> : <Menu />}
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
