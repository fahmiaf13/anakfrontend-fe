import Image from "next/image";
import React from "react";
import LogoWhite from "@/assets/icon/logo-white.svg";
import { lexend } from "@/assets/fonts";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto py-5 flex justify-center items-center flex-col">
        <Link href="/" className="flex flex-col items-center my-5">
          <Image src={LogoWhite} alt="logo" width={28} height={28} />
          <h4 className="text-center text-xl">Anak Front-End</h4>
        </Link>
        <p className={`${lexend.className} text-xs`}>Copyright © 2023 Fahmi Achmad Fahrudin. All rights reserved.</p>
      </div>
    </footer>
  );
}
