"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { portfolio as constants } from "../../data";

const ActionBar = () => {
  const pathname = usePathname();
  const navigationClassName =
    "pb-1 theme-text font-inter text-xs xs:text-sm font-medium opacity-75 hover:opacity-100 hover:scale-105 transition duration-300 uppercase";

  return (
    <div className="fixed top-16 xs:top-5 left-1/2 -translate-x-1/2 z-50 group">
      <div className="theme-elevated shadow-sm w-full h-full rounded-md flex flex-row items-center justify-around gap-4 xs:gap-6 px-4 py-2 border-[0.5px] group-hover:shadow-md transform duration-500 ease-in-out">
        {constants.ui.actionBar.navigation.map(({ href, label }) => {
          const isActive =
            href === "/" ? pathname === href : pathname.startsWith(href);

          return (
            <Link
              href={href}
              className={`${isActive ? "border-b-2 border-red-400" : ""} ${navigationClassName} uppercase`}
              key={href}
            >
              {label}
            </Link>
          );
        })}
        <a
          href={constants.ui.actionBar.contact.href}
          target="_blank"
          rel="noreferrer"
          className={navigationClassName}
        >
          {constants.ui.actionBar.contact.label}
        </a>
      </div>
    </div>
  );
};

export default ActionBar;
