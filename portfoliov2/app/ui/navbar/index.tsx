import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="w-full h-full xl:w-[1345px] xl:max-w-[1345px] px-5 py-2 xl:px-0 m-auto flex items-center justify-between">
      <div className="w-10 h-10">
        <Image
          src="/logo.svg"
          alt="Portfolio Logo"
          width={38}
          height={39}
          className="object-cover"
        />
      </div>
      <div className="hidden min-[500px]:flex items-center gap-10 md:gap-[140px] xl:gap-[280px]">
        <div className="flex items-center gap-10 md:gap-16">
          <Link href="/about-me" className="font-medium text-black text-base">
            About me
          </Link>
          <Link href="/projects" className="font-medium text-black text-base">
            Projects
          </Link>
          <a
            download
            href="/Arul_Valan_Anto_Resume.pdf"
            className="font-medium text-black text-base"
          >
            Resume
          </a>
        </div>
        <div className="border-b-2 border-black">
          <a
            href="mailto:arulvalananto@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2"
          >
            <span className="font-medium text-black text-base">
              Let&apos;s Talk
            </span>
            <FaArrowRightLong />
          </a>
        </div>
      </div>
      <div className="block min-[500px]:hidden">
        <button
          type="button"
          aria-label="portfolio nav menu"
          title="portfolio nav menu"
        >
          <CiMenuFries
            color="black"
            className="font-medium text-black text-xl"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
