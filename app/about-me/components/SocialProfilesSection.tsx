import ExternalLink from "@/app/ui/external-link";
import { getSocialIcon, portfolio } from "@/app/data";
import ViewportReveal from "@/app/ui/viewport-reveal";

export default function SocialProfilesSection() {
  const { socialLinks } = portfolio.person;

  return (
    <ViewportReveal
      as="section"
      id="social profiles"
      className="col-span-12 xl:col-span-7 row-span-3 xl:row-span-8 bg-layout2 p-5 rounded-2xl transition duration-300 ease-in-out flex flex-col gap-5 hover:shadow-xl overflow-hidden"
    >
      <h1 className="font-semibold text-2xl theme-text capitalize">
        {portfolio.aboutMe.socialHeading}
      </h1>
      <div className="w-full flex flex-row flex-wrap gap-2">
        {socialLinks.map((social, index) => {
          const Icon = getSocialIcon(social.icon);
          const textClassName =
            social.name === "Hackernoon" ? "theme-text" : social.textClassName;

          return (
            <ExternalLink
              key={index}
              title={social.title}
              href={social.href}
              className={`${
                index > 4 ? "hidden sm:flex" : "flex"
              } xl:flex-1/2 p-3 rounded-2xl group border border-about-skill-border flex-col gap-3 shadow-sm transition-all duration-300 hover:-translate-y-1 ${
                social.bgClassName
              }`}
            >
              <Icon
                size={20}
                className={
                  social.name === "Hackernoon"
                    ? "theme-text"
                    : social.iconClassName
                }
              />
              <div className="flex flex-col gap-1">
                <h5 className={`${textClassName} text-sm`}>{social.name}</h5>
                <p className={`${textClassName} text-xs`}>@{social.username}</p>
              </div>
            </ExternalLink>
          );
        })}
      </div>
    </ViewportReveal>
  );
}
