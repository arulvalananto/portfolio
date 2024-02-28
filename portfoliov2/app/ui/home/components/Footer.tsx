import React from "react";
import Link from "next/link";

import { socialLinks } from "@/app/lib/common";
import ExternalLink from "../../external-link";

const Footer = () => {
  return (
    <div className="w-full h-full sm:h-[250px] bg-black">
      <div className="w-full max-w-full px-10 xl:px-0 xl:w-[1280px] xl:max-w-[1280px] m-auto h-full font-quicksand font-medium text-white py-10 flex flex-col sm:flex-row gap-10 sm:gap-40">
        <div className="flex flex-col gap-5">
          <h5 className="font-bold text-2xl uppercase sm:capitalize">Links</h5>
          <div className="flex flex-row flex-wrap gap-5 sm:flex-nowrap sm:flex-col sm:gap-2">
            <Link
              href="/about"
              className="hover:underline hover:underline-offset-2"
            >
              About
            </Link>
            <Link
              href="/work"
              className="hover:underline hover:underline-offset-2"
            >
              Projects
            </Link>
            <ExternalLink
              href="https://read.cv/arulvalananto"
              title="Read CV"
              className="hover:underline hover:underline-offset-2"
            />
            <a
              download
              href="/Arul_Valan_Anto_Resume.pdf"
              className="hover:underline hover:underline-offset-2"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h5 className="font-bold text-2xl uppercase sm:capitalize">
            Social Links
          </h5>
          <div className="flex flex-row flex-wrap gap-5 sm:flex-nowrap sm:flex-col sm:gap-2">
            {socialLinks.map((link, index) => {
              const name = link.title.split(" ").at(-1);
              const title = name
                ? name.charAt(0).toUpperCase() + name.slice(1)
                : "";
              if (!title) return;

              return (
                <ExternalLink
                  key={index}
                  href={link.href}
                  title={title}
                  className="hover:underline hover:underline-offset-2"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
