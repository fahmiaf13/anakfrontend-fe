"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { Input } from "./ui/input";
import { Icon } from "@iconify/react";
import Image from "next/image";

type NavlistType = {
  title: string;
  link: string;
};

export default function Navbar() {
  const navList: NavlistType[] = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Articles",
      link: "/articles",
    },
  ];
  return (
    <nav className="border h-14">
      <div className="container mx-auto flex justify-between items-center h-full">
        <Link className="flex items-center gap-3" href="/">
          <Image src="/logo.svg" alt="logo" width={28} height={28} />
          <div className="font-bold text-xl">Anak Front-End</div>
        </Link>
        <ul className="flex items-center gap-5 w-5/12">
          {navList.map((nav, index) => (
            <li key={index}>
              <Link href={nav.link}>{nav.title}</Link>
            </li>
          ))}
          <li className="flex w-full items-center relative">
            <Icon icon="ri:search-line" className="absolute left-3" width={20} />
            <Input className="pl-10" placeholder="search something..." />
          </li>
          <li>
            <Button className="">Login</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
