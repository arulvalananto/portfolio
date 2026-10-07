import { portfolio } from "@/app/data";
import ExternalLink from "@/app/ui/external-link";
import ViewportReveal from "@/app/ui/viewport-reveal";
import { formatExperienceYears } from "@/app/lib/utils";

export default function BioSection() {
  const experienceYears = formatExperienceYears(
    portfolio.person.careerStartDate,
  );

  return (
    <ViewportReveal
      as="section"
      id="bio"
      className={`col-span-12 xl:col-span-9 row-span-8 xl:row-span-11 bg-layout2 p-5 rounded-2xl overflow-hidden transition duration-300 ease-in-out`}
    >
      <h1 className="text-[32px] font-bold leading-[120%] tracking-[-1px] xl:text-[44px] xl:tracking-[-2px]">
        {portfolio.aboutMe.name}
      </h1>
      <h2 className="pb-8">{portfolio.aboutMe.title}</h2>
      <div className="flex flex-col gap-4 mb-2">
        <p className="flex flex-col gap-2 text-sm">
          <span className="text-xs font-bold theme-text uppercase">
            {portfolio.aboutMe.bio.whoIAm.heading}
          </span>
          <span className="text-xs sm:text-sm">
            {portfolio.aboutMe.bio.whoIAm.description.replace(
              "{{experienceYears}}",
              experienceYears,
            )}
          </span>
        </p>
        <p className="flex flex-col gap-2 text-sm">
          <span className="text-xs font-bold theme-text uppercase">
            {portfolio.aboutMe.bio.whatIDoNow.heading}
          </span>
          <span className="text-xs sm:text-sm">
            {portfolio.aboutMe.bio.whatIDoNow.introduction}{" "}
            <span className="font-semibold">
              {portfolio.aboutMe.bio.whatIDoNow.currentRole}
            </span>{" "}
            {portfolio.aboutMe.bio.whatIDoNow.at}{" "}
            <ExternalLink
              title={portfolio.aboutMe.bio.whatIDoNow.currentCompany.title}
              href={portfolio.aboutMe.bio.whatIDoNow.currentCompany.href}
            >
              <span className="font-semibold">
                {portfolio.aboutMe.bio.whatIDoNow.currentCompany.label}
              </span>
            </ExternalLink>{" "}
            {portfolio.aboutMe.bio.whatIDoNow.transition}{" "}
            <span className="font-semibold">
              {portfolio.aboutMe.bio.whatIDoNow.previousRole}
            </span>{" "}
            {portfolio.aboutMe.bio.whatIDoNow.at}{" "}
            <ExternalLink
              title={portfolio.aboutMe.bio.whatIDoNow.previousCompany.title}
              href={portfolio.aboutMe.bio.whatIDoNow.previousCompany.href}
            >
              <span className="font-semibold">
                {portfolio.aboutMe.bio.whatIDoNow.previousCompany.label}
              </span>
            </ExternalLink>
            {portfolio.aboutMe.bio.whatIDoNow.conclusion}
          </span>
        </p>
        <p className="flex flex-col gap-2 text-xs sm:text-sm">
          <span className="text-xs font-bold theme-text uppercase">
            {portfolio.aboutMe.bio.whereIAmNow.heading}
          </span>
          <span>
            {portfolio.aboutMe.bio.whereIAmNow.introduction}{" "}
            <span className="font-semibold">
              {portfolio.aboutMe.bio.whereIAmNow.location}
            </span>{" "}
            {portfolio.aboutMe.bio.whereIAmNow.conclusion}
          </span>
        </p>
        <p className="flex flex-col gap-2 text-sm">
          <span className="text-xs font-bold theme-text uppercase">
            {portfolio.aboutMe.bio.spareTime.heading}
          </span>
          <span className="text-xs sm:text-sm">
            {portfolio.aboutMe.bio.spareTime.introduction}{" "}
            <span className="font-semibold">
              {portfolio.aboutMe.bio.spareTime.book}
            </span>{" "}
            {portfolio.aboutMe.bio.spareTime.conclusion}
          </span>
        </p>
        <p className="flex flex-col gap-2 text-sm">
          <span className="text-xs font-bold theme-text uppercase">
            {portfolio.aboutMe.bio.learning.heading}
          </span>
          <span className="text-xs sm:text-sm">
            {portfolio.aboutMe.bio.learning.value}
          </span>
        </p>
        <p className="flex flex-col gap-2 text-sm">
          <span className="text-xs font-bold theme-text uppercase">
            {portfolio.aboutMe.bio.lookingFor.heading}
          </span>
          <span className="text-xs sm:text-sm">
            {portfolio.aboutMe.bio.lookingFor.description}
          </span>
        </p>
      </div>
    </ViewportReveal>
  );
}
