'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Marquee from 'react-fast-marquee'
import { ImQuotesLeft } from 'react-icons/im'
import { IoMailOutline } from 'react-icons/io5'
import { PiArrowBendLeftDownThin, PiArrowBendLeftUpThin } from 'react-icons/pi'

import { inter } from '../lib/fonts'
import ExternalLink from '../ui/external-link'
import { AnimatedTooltip } from '../ui/animated-tooltip'
import { portfolio as constants, getSocialIcon } from '../data'
const { articles: recentArticles, skills, socialLinks } = constants.person

const AboutPage = () => {
    const [showMore, setShowMore] = useState(false)

    const handleShowMore = () => {
        setShowMore(!showMore)
    }

    return (
        <main
            className={`px-5 py-10 md:p-10 xl:py-10 w-full xl:w-7xl xl:max-w-7xl xl:m-auto grid grid-cols-12 xl:grid-cols-24 auto-rows-12.5 gap-5 h-full ${inter.variable} font-inter`}
        >
            <section
                id="bio"
                className={`col-span-12 xl:col-span-9 ${
                    showMore
                        ? 'row-span-11 md:row-span-10 xl:row-span-11'
                        : 'row-span-7 xs:row-span-6 md:row-span-5 xl:row-span-6'
                } bg-layout2 p-5 rounded-2xl overflow-hidden transition duration-300 ease-in-out`}
            >
                <h1 className="text-[32px] font-bold leading-[120%] tracking-[-1px] xl:text-[44px] xl:tracking-[-2px]">
                    {constants.aboutMe.name}
                </h1>
                <h2 className="pb-8">{constants.aboutMe.title}</h2>
                <div className="flex flex-col gap-4 mb-2">
                    <p className="flex flex-col gap-2 text-sm">
                        <span className="text-xs font-bold theme-text uppercase">
                            {constants.aboutMe.bio.whoIAm.heading}
                        </span>
                        <span className="text-xs sm:text-sm">
                            {constants.aboutMe.bio.whoIAm.description}
                        </span>
                    </p>
                    <p className="flex flex-col gap-2 text-sm">
                        <span className="text-xs font-bold theme-text uppercase">
                            {constants.aboutMe.bio.whatIDoNow.heading}
                        </span>
                        <span className="text-xs sm:text-sm">
                            {constants.aboutMe.bio.whatIDoNow.introduction}{' '}
                            <span className="font-semibold">
                                {constants.aboutMe.bio.whatIDoNow.currentRole}
                            </span>{' '}
                            {constants.aboutMe.bio.whatIDoNow.at}{' '}
                            <ExternalLink
                                title={constants.aboutMe.bio.whatIDoNow.currentCompany.title}
                                href={constants.aboutMe.bio.whatIDoNow.currentCompany.href}
                            >
                                <span className="font-semibold">
                                    {constants.aboutMe.bio.whatIDoNow.currentCompany.label}
                                </span>
                            </ExternalLink>{' '}
                            {constants.aboutMe.bio.whatIDoNow.transition}{' '}
                            <span className="font-semibold">
                                {constants.aboutMe.bio.whatIDoNow.previousRole}
                            </span>{' '}
                            {constants.aboutMe.bio.whatIDoNow.at}{' '}
                            <ExternalLink
                                title={constants.aboutMe.bio.whatIDoNow.previousCompany.title}
                                href={constants.aboutMe.bio.whatIDoNow.previousCompany.href}
                            >
                                <span className="font-semibold">
                                    {constants.aboutMe.bio.whatIDoNow.previousCompany.label}
                                </span>
                            </ExternalLink>
                            {constants.aboutMe.bio.whatIDoNow.conclusion}
                        </span>
                    </p>
                    {showMore && (
                        <p className="flex flex-col gap-2 text-xs sm:text-sm">
                            <span className="text-xs font-bold theme-text uppercase">
                                {constants.aboutMe.bio.whereIAmNow.heading}
                            </span>
                            <span>
                                {constants.aboutMe.bio.whereIAmNow.introduction}{' '}
                                <span className="font-semibold">
                                    {constants.aboutMe.bio.whereIAmNow.location}
                                </span>{' '}
                                {constants.aboutMe.bio.whereIAmNow.conclusion}
                            </span>
                        </p>
                    )}
                    {showMore && (
                        <p className="flex flex-col gap-2 text-sm">
                            <span className="text-xs font-bold theme-text uppercase">
                                {constants.aboutMe.bio.spareTime.heading}
                            </span>
                            <span className="text-xs sm:text-sm">
                                {constants.aboutMe.bio.spareTime.introduction}{' '}
                                <span className="font-semibold">
                                    {constants.aboutMe.bio.spareTime.book}
                                </span>{' '}
                                {constants.aboutMe.bio.spareTime.conclusion}
                            </span>
                        </p>
                    )}
                    {showMore && (
                        <p className="flex flex-col gap-2 text-sm">
                            <span className="text-xs font-bold theme-text uppercase">
                                {constants.aboutMe.bio.learning.heading}
                            </span>
                            <span className="text-xs sm:text-sm">
                                {constants.aboutMe.bio.learning.value}
                            </span>
                        </p>
                    )}
                    {showMore && (
                        <p className="flex flex-col gap-2 text-sm">
                            <span className="text-xs font-bold theme-text uppercase">
                                {constants.aboutMe.bio.lookingFor.heading}
                            </span>
                            <span className="text-xs sm:text-sm">
                                {constants.aboutMe.bio.lookingFor.description}
                            </span>
                        </p>
                    )}
                </div>
                <button
                    type="button"
                    onClick={handleShowMore}
                    className="text-xs font-quicksand underline underline-offset-2 font-semibold italic flex flex-row gap-1 items-center"
                >
                    <span>
                        {!showMore
                            ? constants.aboutMe.bio.showMoreLabel
                            : constants.aboutMe.bio.showLessLabel}
                    </span>
                    {!showMore ? (
                        <PiArrowBendLeftDownThin size={16} className="animate-bounce" />
                    ) : (
                        <PiArrowBendLeftUpThin size={16} className="animate-bounce" />
                    )}
                </button>
            </section>
            <section
                id="skills"
                className="col-span-12 xl:col-span-15 row-span-6 xs:row-span-5 sm:row-span-4 md:row-span-5 xl:row-span-3 bg-layout2 p-5 sm:pt-6 sm:p-5 xl:p-5 xl:pt-5 rounded-2xl flex flex-col gap-4 sm:gap-7 xl:gap-2 transition duration-300 ease-in-out"
            >
                <h1 className="font-semibold text-2xl theme-text">
                    {constants.aboutMe.skills.heading}
                </h1>
                <div className="flex flex-row flex-wrap gap-5 xl:gap-x-5 xl:gap-y-2">
                    {[...skills.primary, ...skills.secondary]?.map((skill, index) => (
                        <AnimatedTooltip
                            key={index}
                            tooltipInfo={{
                                name: skill.title,
                                id: index,
                                yearofexperience:
                                    skill.yearofexperience ??
                                    constants.aboutMe.skills.defaultYearsOfExperience
                            }}
                        >
                            <a
                                href={`${constants.aboutMe.skills.googleSearchUrl}${skill.title.toLowerCase()}`}
                                title={skill.title}
                                className={`border-2 theme-button rounded-sm ${skill.className} flex items-center justify-center w-8 h-8 md:w-12 md:h-12 xl:w-8 xl:h-8 transition duration-500 hover:scale-110`}
                                target="_blank"
                                rel="noopener norefferer nofollow"
                            >
                                <Image
                                    key={index}
                                    src={skill?.src ?? ''}
                                    alt={skill.title}
                                    width={skill.width ?? 24}
                                    height={skill.height ?? 24}
                                    className={`${skill.imageClassName ?? ''}`}
                                />
                            </a>
                        </AnimatedTooltip>
                    ))}
                </div>
            </section>
            <Link
                href={constants.aboutMe.projects.airdeck.href}
                id="airdeck-project"
                className="group col-span-12 xl:col-span-7 row-span-4 xs:row-span-5 md:row-span-7 xl:row-span-5 grid-paper bg-work-card-airdeck p-5 rounded-2xl flex flex-col justify-center items-center transition duration-300 ease-in-out overflow-hidden"
            >
                <h1 className="text-white opacity-0 group-hover:opacity-100 text-3xl font-bold self-start">
                    {constants.aboutMe.projects.airdeck.title}
                </h1>
                <div className="w-62.5 xs:w-[300px] sm:w-96 md:w-150 xl:w-75 h-96 flex items-center justify-center animate-sizeup-slow z-50">
                    <video
                        preload="none"
                        src={constants.aboutMe.projects.airdeck.videoSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        controlsList="nodownload"
                        poster={constants.aboutMe.projects.airdeck.posterSrc}
                        className="rounded-md transition duration-300 ease-in-out group-hover:scale-95"
                    />
                </div>
            </Link>
            <section
                id="my-recent-articles"
                className="col-span-12 xl:col-span-8 row-span-8 lg:row-span-5 xl:row-span-8 bg-layout2 p-5 rounded-2xl flex flex-col gap-5 group overflow-hidden hover:-translate-y-1 transition duration-300"
            >
                <div className="flex flex-row gap-1 items-center justify-between">
                    <h1 className="font-semibold text-lg sm:text-2xl theme-text capitalize">
                        {constants.aboutMe.articles.heading}
                    </h1>
                    <ExternalLink
                        href={constants.aboutMe.articles.href}
                        title={constants.aboutMe.articles.allLabel}
                        className="group-hover:opacity-100 opacity-0 transition duration-300 ease-in-out text-xs hover:underline hover:underline-offset-2"
                    />
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-center flex-nowrap md:flex-wrap xl:flex-nowrap xl:flex-col gap-4">
                    {recentArticles.map((article, index) => (
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
                            <div className=" w-full max-w-28.5 max-h-19 xl:h-full xl:max-h-19 overflow-hidden rounded-md flex items-center justify-center">
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
            {showMore && (
                <section
                    id="filler"
                    className="col-span-12 xl:col-span-7 row-span-3 bg-portfolio-blue p-5 rounded-2xl transition duration-300 ease-in-out flex items-center justify-center hover:-translate-y-1"
                >
                    <Image
                        src={constants.aboutMe.fillerImage.src}
                        alt={constants.aboutMe.fillerImage.alt}
                        width={150}
                        height={100}
                        className="fade-in-5s"
                        unoptimized
                    />
                </section>
            )}
            <section
                id="social profiles"
                className="col-span-12 xl:col-span-9 row-span-12 sm:row-span-8 bg-layout2 p-5 rounded-2xl transition duration-300 ease-in-out flex flex-col gap-5 hover:shadow-xl overflow-hidden"
            >
                <h1 className="font-semibold text-2xl theme-text capitalize">
                    {constants.aboutMe.socialHeading}
                </h1>
                <div className="w-full grid grid-cols-3 auto-rows-12.5 gap-5">
                    {socialLinks.map((social, index) => (
                        <ExternalLink
                            key={index}
                            title={social.title}
                            href={social.href}
                            className={`${
                                index > 4 ? 'hidden sm:flex' : 'flex'
                            } col-span-3 sm:col-span-1 row-span-2 p-4 rounded-2xl group border border-about-skill-border flex-col gap-3 shadow-sm transition-all duration-300 hover:-translate-y-1 ${
                                social.bgClassName
                            }`}
                        >
                            {(() => {
                                const Icon = getSocialIcon(social.icon)
                                return (
                                    <Icon
                                        size={32}
                                        className={
                                            social.name === 'Hackernoon'
                                                ? 'theme-text'
                                                : social.iconClassName
                                        }
                                    />
                                )
                            })()}
                            <div className="flex flex-col gap-1">
                                <h5
                                    className={`${
                                        social.name === 'Hackernoon'
                                            ? 'theme-text'
                                            : social.textClassName
                                    } text-sm`}
                                >
                                    {social.name}
                                </h5>
                                <p
                                    className={`${
                                        social.name === 'Hackernoon'
                                            ? 'theme-text'
                                            : social.textClassName
                                    } text-xs`}
                                >
                                    @{social.username}
                                </p>
                            </div>
                        </ExternalLink>
                    ))}
                </div>
            </section>
            <Link
                href={constants.aboutMe.projects.vidable.href}
                id="vidable-ai-project"
                className="group relative col-span-12 xl:col-span-7 row-span-4 xs:row-span-5 md:row-span-7 xl:row-span-5 bg-layout2 hover:bg-[url('/about_vidable_project.webp')] bg-cover p-5 pb-0 rounded-2xl flex flex-col gap-5 transition-all duration-300 ease-in-out hover:shadow-xl"
            >
                <h1 className="text-6xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 uppercase opacity-0 group-hover:opacity-100 ease-in-out group-hover:left-20 group-hover:top-10 xl:group-hover:left-1/2 xl:group-hover:top-2 group-hover:text-3xl xl:group-hover:text-lg transition-all duration-300">
                    {constants.aboutMe.projects.vidable.title}
                </h1>
                <div className="overflow-hidden flex items-center justify-center group relative cursor-pointer">
                    <div className="transition duration-750 z-50 scale-50 xs:scale-100 translate-y-25 sm:translate-y-1/3 group-hover:scale-[0.2] xs:group-hover:scale-[0.3] md:group-hover:scale-50 xl:group-hover:scale-[0.5] group-hover:translate-y-10">
                        <Image
                            src={constants.aboutMe.projects.vidable.image.src}
                            alt={constants.aboutMe.projects.vidable.image.alt}
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </Link>
            <section
                id="quote"
                className="group col-span-12 xl:col-span-8 row-span-2 bg-layout2 p-5 rounded-2xl flex flex-col gap-2 transition duration-300 ease-in-out hover:-translate-y-1"
            >
                <ImQuotesLeft size={32} className="group-hover:animate-shaker" />
                <h6 className="font-medium text-lg md:text-2xl italic">
                    {constants.aboutMe.quote.text}{' '}
                    <span className="theme-text group-hover:bg-black group-hover:text-white transition-all duration-500 rounded-md py-1">
                        {constants.aboutMe.quote.emphasis}
                    </span>
                </h6>
            </section>
            <Link
                href={constants.aboutMe.projects.landGenius.href}
                id="landgenius-project"
                className={`${
                    showMore ? 'col-span-12 xl:col-span-8' : 'col-span-12 xl:col-span-7'
                } group relative row-span-4 xs:row-span-5 md:row-span-7 xl:row-span-5 bg-about-cta rounded-2xl transition duration-300 ease-in-out overflow-y-clip flex flex-col xl:items-center xl:justify-center hover:shadow-xl`}
            >
                <h1 className="text-xl md:text-3xl font-bold text-black p-5 pb-0 opacity-0 -translate-x-36 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                    {constants.aboutMe.projects.landGenius.title}
                </h1>
                <div className="transition duration-500 ease-in-out scale-75 group-hover:scale-100 md:scale-75 xl:group-hover:90 xl:scale-110 xl:group-hover:scale-125">
                    <Image
                        src={constants.aboutMe.projects.landGenius.image.src}
                        alt={constants.aboutMe.projects.landGenius.image.alt}
                        width="840"
                        height="669"
                    />
                </div>
            </Link>
            <section
                id="location"
                className={`${
                    showMore ? 'col-span-7' : 'col-span-8'
                } hidden xl:block row-span-3 overflow-hidden rounded-2xl relative transition duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1`}
            >
                <ExternalLink
                    href={constants.aboutMe.location.href}
                    title={constants.aboutMe.location.title}
                >
                    <Image
                        src={constants.aboutMe.location.image.src}
                        alt={constants.aboutMe.location.image.alt}
                        width="620"
                        height="190"
                        className="scale-150"
                        unoptimized
                    />
                    <div className="absolute left-25.5 top-19 rounded-full bg-map-marker opacity-20 s-3 styles_marker-pulse__BxsPp"></div>
                    <div className="absolute w-3 h-3 left-24 top-18 rounded-full bg-map-marker border-2 border-white shadow-md"></div>
                    <p className="absolute bottom-0 right-0 font-normal text-xs px-2 py-1 m-2 bg-layout2 bg-opacity-50 rounded-md">
                        {constants.aboutMe.location.label}
                    </p>
                </ExternalLink>
            </section>
            <section
                id="call-to-action"
                className="col-span-12 xl:col-span-9 row-span-1 p-5 bg-black text-white rounded-xl flex items-center justify-center transition-all duration-[0.4s] ease-[cubic-bezier(0.19, 1, 0.22, 1)] hover:-translate-y-1 shadow-md"
            >
                <ExternalLink
                    href={constants.aboutMe.callToAction.href}
                    title={constants.aboutMe.callToAction.title}
                    className="flex flex-row items-center gap-5 w-full"
                >
                    <Marquee
                        speed={70}
                        delay={1}
                        gradientColor="black"
                        gradient
                        gradientWidth="50px"
                    >
                        <p className="pr-40 text-sm overflow-hidden flex flex-row gap-2">
                            <span>{constants.aboutMe.callToAction.prompt}</span>
                            <span className="arrow-right">
                                {constants.aboutMe.callToAction.arrow}
                            </span>
                            <span className="bg-external-link underline underline-offset-2 text-white font-poppins px-2 capitalize">
                                {constants.aboutMe.callToAction.label}
                            </span>{' '}
                        </p>
                    </Marquee>
                    <div className="relative">
                        <IoMailOutline size={20} />
                        <span className="w-1.5 h-1.5 absolute top-0 -right-0.5 rounded-full bg-red-600 animate-pulse"></span>
                    </div>
                </ExternalLink>
            </section>
        </main>
    )
}

export default AboutPage
