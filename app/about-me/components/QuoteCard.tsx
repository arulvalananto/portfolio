import { ImQuotesLeft } from "react-icons/im";

import { portfolio } from "@/app/data";

export default function QuoteCard() {
  return (
    <section
      id="quote"
      className="group col-span-12 xl:col-span-8 row-span-2 bg-layout2 p-5 rounded-2xl flex flex-col gap-2 transition duration-300 ease-in-out hover:-translate-y-1"
    >
      <ImQuotesLeft size={32} className="group-hover:animate-shaker" />
      <h6 className="font-medium text-lg md:text-2xl italic">
        {portfolio.aboutMe.quote.text}{" "}
        <span className="theme-text group-hover:bg-black group-hover:text-white transition-all duration-500 rounded-md py-1">
          {portfolio.aboutMe.quote.emphasis}
        </span>
      </h6>
    </section>
  );
}
