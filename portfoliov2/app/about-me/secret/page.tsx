import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { FcAdvertising } from 'react-icons/fc';

import { dancingScript } from '../../lib/fonts';
import { portfolio as constants, getSocialIcon } from '../../data';
import { AnimatedTooltip } from '../../ui/animated-tooltip';
const {
    bio,
    certificates,
    education: educationDetails,
    experience: experienceDetails,
    projectOverview: projectsOverview,
    skills,
    socialLinks,
} = constants.person;

export const metadata: Metadata = {
    title: constants.aboutMeSecret.metadataTitle,
};

const AboutPage = () => (
    <main className={`${dancingScript.variable} pb-5 space-y-10`}>
        <div className="w-full max-w-full xl:w-7xl xl:max-w-7xl m-auto select-none">
            <div className="w-41.25 h-12.5">
                <Image
                    src={constants.aboutMeSecret.helloImage.src}
                    width={0}
                    height={0}
                    alt={constants.aboutMeSecret.helloImage.alt}
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
        <div className="w-full max-w-full h-full xl:w-7xl xl:max-w-7xl xl:h-184.25 m-auto flex flex-col xl:flex-row gap-4 p-4 xl:p-0">
            <div className="flex-1 flex flex-col gap-5 order-2 xl:order-1">
                <section
                    id="about"
                    className="w-full h-full xl:h-55 bg-portfolio-about-section text-white rounded-md p-4 xl:px-4 xl:py-2 space-y-3 order-1 select-none transition duration-300"
                >
                    <h3 className="font-quicksand font-bold text-xl text-portfolio-about-title">
                        {constants.aboutMeSecret.sectionTitles.about}
                    </h3>
                    <p>{bio}</p>
                </section>
                <div className="w-full h-full xl:h-42.5 flex flex-col xl:flex-row items-center gap-5 order-3 xl:order-2 select-none">
                    <section
                        id="education"
                        className="flex-1 w-full h-full bg-portfolio-about-section text-white rounded-md p-4 xl:px-4 xl:py-2 space-y-1 order-2 xl:order-1 transition duration-300"
                    >
                        <h3 className="font-quicksand font-bold text-xl text-portfolio-about-title">
                            {constants.aboutMeSecret.sectionTitles.education}
                        </h3>
                        <ul className="space-y-2 ">
                            {educationDetails.map((education, index) => (
                                <li key={index}>
                                    <h5>{education.degree}</h5>
                                    <p className="font-quicksand text-white text-xs">
                                        {education.school}
                                    </p>
                                    <p className="text-[10px] flex items-center gap-2 italic">
                                        <span>{education.date}</span>
                                        <span>
                                            {
                                                constants.aboutMeSecret
                                                    .educationDetailsSeparator
                                            }
                                        </span>
                                        <span>{education.score}</span>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section
                        id="experience"
                        className="flex-1 w-full h-full bg-portfolio-about-section text-white rounded-md p-4 xl:px-4 xl:py-2 space-y-1 order-1 xl:order-2 transition duration-300"
                    >
                        <h3 className="font-quicksand font-bold text-xl text-portfolio-about-title">
                            {constants.aboutMeSecret.sectionTitles.experience}
                        </h3>
                        <ul className="space-y-2">
                            {experienceDetails.map((experience, index) => (
                                <li key={index}>
                                    <h5 className="font-quicksand text-base">
                                        <b>{experience.position}</b>{' '}
                                        <span>
                                            {
                                                constants.aboutMeSecret
                                                    .experienceAt
                                            }{' '}
                                            {experience.company},{' '}
                                            {experience.location}
                                        </span>
                                    </h5>
                                    <p className="font-quicksand text-white text-xs italic">
                                        {experience.date}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
                <div className="w-full h-full flex-1 flex flex-col xl:flex-row items-center gap-5 order-2 xl:order-3">
                    <section
                        id="skills"
                        className="flex-1 w-full xl:max-w-118 h-full bg-portfolio-about-section text-white rounded-md p-4 xl:px-4 xl:py-2 select-none transition duration-300"
                    >
                        <h3 className="font-quicksand font-bold text-xl text-portfolio-about-title">
                            {constants.aboutMeSecret.sectionTitles.skills}
                        </h3>
                        <div className="space-y-3">
                            {constants.aboutMeSecret.skillTypes.map(
                                (skillType) => (
                                    <div className="space-y-3" key={skillType}>
                                        <h6 className="text-sm font-light font-quicksand">
                                            {skillType[0].toUpperCase() +
                                                skillType.slice(1)}
                                            {
                                                constants.aboutMeSecret
                                                    .skillTypeLabelSuffix
                                            }
                                        </h6>
                                        <div className="flex flex-row flex-wrap gap-4">
                                            {skills[skillType]?.map(
                                                (skill, index) => (
                                                    <AnimatedTooltip
                                                        key={index}
                                                        tooltipInfo={{
                                                            name: skill.title,
                                                            id: index,
                                                            yearofexperience:
                                                                skill.yearofexperience ??
                                                                constants
                                                                    .aboutMeSecret
                                                                    .defaultYearsOfExperience,
                                                        }}
                                                    >
                                                        <a
                                                            href={`${constants.aboutMeSecret.googleSearchUrl}${skill.title.toLowerCase()}`}
                                                            title={skill.title}
                                                            className={`border-2 border-black ${skill.className} flex items-center justify-center w-8 h-8 md:w-12 md:h-12 xl:w-8 xl:h-8 transition duration-100 hover:scale-110`}
                                                            target="_blank"
                                                            rel="noopener norefferer nofollow"
                                                        >
                                                            <Image
                                                                key={index}
                                                                src={
                                                                    skill?.src ??
                                                                    ''
                                                                }
                                                                alt={
                                                                    skill.title
                                                                }
                                                                width="24"
                                                                height="24"
                                                                className={`${skill.imageClassName ?? ''}`}
                                                            />
                                                        </a>
                                                    </AnimatedTooltip>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                ),
                            )}
                        </div>
                    </section>
                    <div className="flex-1 w-full h-full text-white rounded-md flex flex-col gap-5">
                        <section
                            id="certificates"
                            className="w-full h-full xl:h-23 bg-portfolio-about-section text-white rounded-md p-4 xl:px-4 xl:py-2 space-y-2 order-2 xl:order-1 select-none transition duration-300"
                        >
                            <h3 className="font-quicksand font-bold text-xl text-portfolio-about-title">
                                {
                                    constants.aboutMeSecret.sectionTitles
                                        .certificates
                                }
                            </h3>
                            <div className="flex items-center gap-5">
                                {certificates.map((certificate, index) => (
                                    <a
                                        key={index}
                                        href={certificate.href}
                                        title={certificate.title}
                                        target="_blank"
                                        rel="noopener norefferer nofollow"
                                        className="transition duration-500 hover:scale-105"
                                    >
                                        <Image
                                            src={certificate.src}
                                            alt={certificate.alt}
                                            width={certificate.width}
                                            height={certificate.height}
                                            unoptimized
                                            className="hidden xl:block"
                                        />
                                        <Image
                                            src={certificate.src}
                                            alt={certificate.alt}
                                            width={certificate.mobileWidth}
                                            height={certificate.mobileHeight}
                                            unoptimized
                                            className="block xl:hidden"
                                        />
                                    </a>
                                ))}
                            </div>
                        </section>
                        <section
                            id="projects"
                            className="flex-1 w-full bg-portfolio-about-section text-white rounded-md p-4 xl:px-4 xl:py-2 space-y-3 order-1 xl:order-2 select-none transition duration-300"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="font-quicksand font-bold text-xl text-portfolio-about-title">
                                    {
                                        constants.aboutMeSecret.sectionTitles
                                            .projects
                                    }
                                </h3>
                                <Link
                                    href={
                                        constants.aboutMeSecret.allProjects.href
                                    }
                                    className="font-quicksand underline underline-offset-2"
                                >
                                    {constants.aboutMeSecret.allProjects.label}
                                </Link>
                            </div>
                            <div className="flex items-center gap-4 xl:gap-0 xl:justify-between">
                                {projectsOverview.map((project, index) => (
                                    <a
                                        key={index}
                                        href={project.href}
                                        className="w-18.75 h-18.75 md:w-56 md:h-56 xl:w-31.25 xl:h-31.25 bg-violet-500 border-2 border-black relative group transition duration-300 hover:scale-95"
                                        title={project.title}
                                        target="_blank"
                                        rel="noopener norefferer nofollow"
                                    >
                                        <Image
                                            src={project.src}
                                            alt={project.alt}
                                            width={125}
                                            height={125}
                                            unoptimized
                                            className="hidden xl:block"
                                        />
                                        <Image
                                            src={project.src}
                                            alt={project.alt}
                                            width={224}
                                            height={224}
                                            unoptimized
                                            className="hidden md:block xl:hidden"
                                        />
                                        <Image
                                            src={project.src}
                                            alt={project.alt}
                                            width={75}
                                            height={75}
                                            unoptimized
                                            className="block md:hidden"
                                        />
                                        <div className="hidden group-hover:flex items-center justify-center bg-black opacity-50 absolute top-0 left-0 w-full h-full">
                                            <p className="font-quicksand text-xs md:text-xl xl:text-base font-medium">
                                                {
                                                    constants.aboutMeSecret
                                                        .readMoreLabel
                                                }
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <section
                id="profile"
                className="w-full xl:w-72.5 xl:max-w-72.5 flex flex-col items-center gap-5 xl:gap-0  xl:justify-between order-1 xl:order-2"
            >
                <div className="border-2 border-black rounded-md xl:w-full h-79 flex items-end justify-end bg-[#4B24B5] select-none relative">
                    <Image
                        src={constants.aboutMeSecret.profileImage.src}
                        alt={constants.aboutMeSecret.profileImage.alt}
                        width={290}
                        height={316}
                        priority
                    />
                </div>
                <div className="w-full flex flex-col sm:justify-center sm:flex-row xl:flex-col gap-5 transition duration-300">
                    <div className="bg-portfolio-yellowGreen w-full max-w-full sm:w-75 sm:max-w-75 xl:w-72.5 xl:max-w-72.5 h-17 border-2 border-black rounded-md flex items-center justify-between p-2 relative transition duration-300">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                title={link.title}
                                className={`w-10 h-10 rounded-full ${link.className} border-2 border-black flex items-center justify-center group transition duration-300 hover:translate-y-px`}
                                target="_blank"
                                rel="noopener norefferer nofollow"
                            >
                                {(() => {
                                    const Icon = getSocialIcon(link.icon);
                                    return <Icon
                                    size={20}
                                    className="group-hover:w-5.25 group-hover:h-5.25"
                                    color="white"
                                    />;
                                })()}
                            </a>
                        ))}
                        <div className="absolute -top-6 -left-1 md:-left-12 xl:-left-1 flex items-center transition duration-300 select-none">
                            <p className="text-xs font-dancingScript">
                                {constants.aboutMeSecret.socialProfile.label}
                            </p>
                            <div className="animate-bounce">
                                <Image
                                    src={
                                        constants.aboutMeSecret.socialProfile
                                            .arrowImage.src
                                    }
                                    alt={
                                        constants.aboutMeSecret.socialProfile
                                            .arrowImage.alt
                                    }
                                    width={15}
                                    height={15}
                                    className="translate-y-4 -translate-x-5 rotate-45 md:translate-y-4 md:rotate-0 md:translate-x-0 xl:translate-y-4 xl:-translate-x-5 xl:rotate-45"
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="bg-black w-full max-w-full sm:w-75 sm:max-w-75 px-3 xl:px-0 xl:w-full xl:max-w-full h-17 rounded-md flex items-center justify-center gap-3 select-none transition duration-300 hover:-translate-y-0.5"
                    >
                        <FcAdvertising size={32} />
                        <span className="text-white text-base font-medium font-poppins">
                            {constants.aboutMeSecret.emailLabel}
                        </span>
                    </button>
                </div>
                <div className="w-full h-53 bg-portfolio-blue text-white relative border-2 border-black rounded-md p-2 pt-4 group hidden xl:block select-none transition duration-300">
                    <Image
                        src={constants.aboutMeSecret.hireMe.arrowImage.src}
                        alt={constants.aboutMeSecret.hireMe.arrowImage.alt}
                        width={60}
                        height={60}
                        className="absolute -top-6 left-33.75 transition duration-300 group-hover:-translate-y-1"
                    />
                    <p className="text-md font-normal font-dancingScript">
                        {constants.aboutMeSecret.hireMe.label}
                    </p>
                    <Image
                        src={constants.aboutMeSecret.hireMe.animation.src}
                        alt={constants.aboutMeSecret.hireMe.animation.alt}
                        width={290}
                        height={161}
                        className="absolute -bottom-10 right-0 object-contain scale-50 fade-in-5s"
                    />
                </div>
            </section>
        </div>
    </main>
);

export default AboutPage;
