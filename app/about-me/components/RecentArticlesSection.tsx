import Image from "next/image";

import { portfolio } from "@/app/data";
import ExternalLink from "@/app/ui/external-link";

export default function RecentArticlesSection() {
  const { articles } = portfolio.person;

  return (
    <section
      id="my-recent-articles"
      className="col-span-12 xl:col-span-8 row-span-8 lg:row-span-5 xl:row-span-8 bg-layout2 p-5 rounded-2xl flex flex-col gap-5 group overflow-hidden hover:-translate-y-1 transition duration-300"
    >
      <div className="flex flex-row gap-1 items-center justify-between">
        <h1 className="font-semibold text-lg sm:text-2xl theme-text capitalize">
          {portfolio.aboutMe.articles.heading}
        </h1>
        <ExternalLink
          href={portfolio.aboutMe.articles.href}
          title={portfolio.aboutMe.articles.allLabel}
          className="group-hover:opacity-100 opacity-0 transition duration-300 ease-in-out text-xs hover:underline hover:underline-offset-2"
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-center flex-nowrap md:flex-wrap xl:flex-nowrap xl:flex-col gap-4">
        {articles.map((article, index) => (
          <ExternalLink
            key={index}
            title={article.title}
            href={article.href}
            className="shadow-sm md:w-full lg:w-100 xl:w-full h-25 min-h-25 max-h-25 flex flex-row gap-5 items-start border border-border-subtle bg-white rounded-md p-2 hover:shadow-md transition-all duration-500"
          >
            <div className="flex flex-col justify-between h-full flex-1 md:flex-auto">
              <h2 className="text-[10px] xs:text-xs xl:text-sm">
                {article.title}
              </h2>
              <p className="text-[8px] xs:text-[10px] xl:text-xs">
                {article.website}
              </p>
            </div>
            <div className="w-full max-w-28.5 max-h-19 xl:h-full xl:max-h-19 overflow-hidden rounded-md flex items-center justify-center">
              <Image
                src={article.imageURL}
                alt={article.title}
                width="250"
                height="150"
                className="rounded-md"
                unoptimized={article.unoptimized ?? false}
              />
            </div>
          </ExternalLink>
        ))}
      </div>
    </section>
  );
}
