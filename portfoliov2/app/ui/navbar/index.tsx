"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { VscPerson } from "react-icons/vsc";
import { CiMenuFries } from "react-icons/ci";
import { TiDocumentText } from "react-icons/ti";
import { GoProjectSymlink } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

import CustomDrawer from "../drawer";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  const onMailTo = () => {
    window.location.href = "mailto:arulvalananto@gmail.com";
  };

  const onDownloadResume = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/Arul_Valan_Anto_Resume.pdf";
    downloadLink.download = "Arul_Valan_Anto_Resume.pdf";
    downloadLink.click();
  };

  const onNavigateTo = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

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
          onClick={() => setIsOpen(!isOpen)}
        >
          <CiMenuFries
            color="black"
            className="font-medium text-black text-xl"
          />
        </button>
        <CustomDrawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="mt-10 flex flex-col gap-5 px-3">
            <button
              type="button"
              className="group text-left flex items-center gap-3"
              onClick={() => onNavigateTo("/about-me")}
            >
              <VscPerson
                size={24}
                className="transition duration-300 group-hover:rotate-12"
              />
              <span className="font-medium text-black text-base">About me</span>
            </button>
            <button
              type="button"
              className="group text-left flex items-center gap-3"
              onClick={() => onNavigateTo("/projects")}
            >
              <GoProjectSymlink
                size={24}
                className="transition duration-300 group-hover:rotate-12"
              />
              <span className="font-medium text-black text-base">Projects</span>
            </button>
            <button
              type="button"
              className="group text-left flex items-center gap-3"
              onClick={onDownloadResume}
            >
              <TiDocumentText
                size={24}
                className="transition duration-300 group-hover:rotate-12"
              />

              <span className="text-black text-base font-medium">Resume</span>
            </button>
            <button
              type="button"
              onClick={onMailTo}
              className="group flex items-center gap-3"
            >
              <span className="font-medium text-black text-base">
                Let&apos;s Talk
              </span>
              <FaArrowRightLong className="transition duration-300 group-hover:translate-x-2" />
            </button>
          </div>
        </CustomDrawer>
      </div>
    </div>
  );
};

export default Navbar;
