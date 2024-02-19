import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaMedium, FaTwitter } from "react-icons/fa6";

import { Skill } from "./types";

export const bio = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`;

export const educationDetails = [
  {
    degree: "Bachelor’s degree, Computer Science Engineering",
    school: "Loyola ICAM College of Engineering and Technology, Chennai, India",
    date: "July 2015 --- May 2019",
    score: "CGPA - 7.33 / 10",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Carmel Higher Secondary School, Kanyakumari, India",
    date: "June 2014 --- June 2015",
    score: "Score - 87 Percent",
  },
];

export const experienceDetails = [
  {
    position: "Senior Software Engineer",
    company: "Augment",
    location: "Remote",
    date: "February 2022 --- Present",
  },
  {
    position: "Junior Software Developer",
    company: "Coding Space",
    location: "Remote",
    date: "January 2020 --- January 2022",
  },
];

export const certificates = [
  {
    href: "https://www.credly.com/badges/ff81e28b-ecde-4cef-a494-834448af8b93",
    title: "AWS Certified Cloud Practitioner - Arul Valan Anto",
    src: "/about_aws_certificate.webp",
    alt: "AWS Certified Cloud Practitioner - Arul Valan Anto",
    width: 40,
    height: 40,
  },
  {
    href: "https://zsecurity.org/certification/validation/?cert_number=k7l7HJMa",
    title: "Dark Web Certificate - Arul Valan Anto",
    src: "/about_z_security_certificate.webp",
    alt: "Dark Web Certificate - Arul Valan Anto",
    width: 40,
    height: 36,
  },
];

export const projects = [
  {
    href: "https://airdeck.co/",
    src: "/about_airdeck_overview.webp",
    alt: "AirDeck",
    title: "AirDeck Project - Overview",
  },
  {
    href: "https://vidable.ai/",
    src: "/about_vidable_overview.webp",
    alt: "Vidable",
    title: "Vidable Project - Overview",
  },
  {
    href: "https://landgeniustest.wpengine.com/",
    src: "/about_landgenius_overview.webp",
    alt: "LandGenius",
    title: "LandGenius Project - Overview",
  },
];

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/arulvalanantos",
    title: "Arul Valan Anto's linkedin",
    className: "bg-[#0A66C2]",
    Icon: FaLinkedin,
  },
  {
    href: "https://github.com/arulvalananto",
    title: "Arul Valan Anto's github",
    className: "bg-[#010409]",
    Icon: FaGithub,
  },
  {
    href: "https://medium.com/@arulvalananto",
    title: "Arul Valan Anto's medium",
    className: "bg-[#292929]",
    Icon: FaMedium,
  },
  {
    href: "https://twitter.com/arulvalananto_",
    title: "Arul Valan Anto's twitter",
    className: "bg-[#1D9BF0]",
    Icon: FaTwitter,
  },
];

export const skills: Skill = {
  primary: [
    {
      src: "/about_skill_react.svg",
      alt: "React",
      className: "bg-[#66DBFB]",
      yearofexperience: "4+ years",
    },
    {
      src: "/about_skill_node.svg",
      alt: "NodeJS",
      className: "bg-[#6AA05B]",
      imageClassName: "scale-75",
      yearofexperience: "3.5 years",
    },
    {
      src: "/about_skill_mongoDB.svg",
      alt: "Mongo DB",
      className: "bg-[#47301E] border-[#84C16A]",
      imageClassName: "scale-90",
      yearofexperience: "3.5 years",
    },
    {
      src: "/about_skill_typescript.svg",
      alt: "TypeScript",
      className: "bg-[#007BCD]",
      yearofexperience: "3 years",
    },
    {
      src: "/about_skill_javascript.svg",
      alt: "JavaScript",
      className: "bg-[#F7E018]",
      yearofexperience: "4+ years",
    },
    {
      src: "/about_skill_expressJS.svg",
      alt: "Express JS",
      className: "bg-[#EEEEEE]",
      imageClassName: "scale-75",
      yearofexperience: "3.5 years",
    },
    {
      src: "/about_skill_webpack.svg",
      alt: "Webpack",
      className: "bg-[#2B3A42]",
      imageClassName: "scale-75",
      yearofexperience: "2 years",
    },
    {
      src: "/about_skill_tailwindcss.svg",
      alt: "Tailwind CSS",
      className: "bg-[#0B1120]",
      imageClassName: "scale-75",
      yearofexperience: "3 years",
    },
    {
      src: "/about_skill_sass.svg",
      alt: "Sass",
      className: "bg-[#CD669A]",
      yearofexperience: "4+ years",
    },
    {
      src: "/about_skill_redux.svg",
      alt: "Redux",
      className: "bg-[#272822]",
      imageClassName: "scale-75",
      yearofexperience: "4 years",
    },
    {
      src: "/about_skill_formik.svg",
      alt: "Formik",
      className: "bg-[#0050CE]",
      yearofexperience: "3 years",
    },
    {
      src: "/about_skill_playwright.svg",
      alt: "PlayWright",
      className: "bg-[#2B3137]",
      yearofexperience: "2 years",
    },
    {
      src: "/about_skill_css.svg",
      alt: "CSS",
      className: "bg-[#254BDD]",
      imageClassName: "scale-75",
      yearofexperience: "4+ years",
    },
    {
      src: "/about_skill_git.svg",
      alt: "GIT",
      className: "bg-[#FFFFFF]",
      imageClassName: "scale-90",
      yearofexperience: "4+ years",
    },
    {
      src: "/about_skill_jest.svg",
      alt: "Jest",
      className: "bg-[#910E1B]",
      imageClassName: "scale-75",
      yearofexperience: "2.5 years",
    },
    {
      src: "/about_skill_vite.svg",
      alt: "Vite",
      className: "bg-[#1B1B1F]",
      yearofexperience: "1.5 years",
    },
  ],
  secondary: [
    {
      src: "/about_skill_python.svg",
      alt: "Python",
      className:
        "bg-gradient-to-t from-[#265074] from-80% via-transparent to-80% to-transparent to-100%",
      imageClassName: "scale-75",
      yearofexperience: "2 years",
    },
    {
      src: "/about_skill_firebase.svg",
      alt: "Firebase",
      className:
        "bg-gradient-to-t from-[#1A73E8] from-80% via-transparent to-80% to-transparent to-100%",
      yearofexperience: "3 years",
    },
    {
      src: "/about_skill_redis.svg",
      alt: "Redis",
      className:
        "bg-gradient-to-t from-[#161F31] from-70% via-transparent to-70% to-transparent to-100%",
      imageClassName: "scale-75",
      yearofexperience: "2 years",
    },
    {
      src: "/about_skill_angular.svg",
      alt: "Angular",
      className:
        "bg-gradient-to-t from-[#1257B2] from-60% via-transparent to-60% to-transparent to-100%",
      yearofexperience: "2 years",
    },
    {
      src: "/about_skill_stripe.svg",
      alt: "Stripe",
      className:
        "bg-gradient-to-t from-[#675DFF] from-60% via-transparent to-60% to-transparent to-100%",
      imageClassName: "scale-75",
      yearofexperience: "1 year",
    },
    {
      src: "/about_skill_storybook.svg",
      alt: "Storybook",
      className:
        "bg-gradient-to-t from-[#FF4785] from-55% via-transparent to-55% to-transparent to-100%",
      yearofexperience: "1.5 years",
    },
    {
      src: "/about_skill_fastapi.svg",
      alt: "Fast API",
      className:
        "bg-gradient-to-t from-[#009485] from-55% via-transparent to-55% to-transparent to-100%",
      imageClassName: "scale-90",
      yearofexperience: "1 year",
    },
    {
      src: "/about_skill_mySQL.svg",
      alt: "MySQL",
      className:
        "bg-gradient-to-t from-[#265074] from-50% via-transparent to-50% to-transparent to-100%",
      yearofexperience: "1 year",
    },
    {
      src: "/about_skill_django.svg",
      alt: "Django",
      className:
        "bg-gradient-to-t from-[#082E23] from-50% via-transparent to-50% to-transparent to-100%",
      imageClassName: "scale-50",
      yearofexperience: "1 year",
    },
    {
      src: "/about_skill_postgresql.svg",
      alt: "PostgreSQL",
      className:
        "bg-gradient-to-t from-white from-40% via-transparent to-40% to-transparent to-100%",
      imageClassName: "scale-90",
      yearofexperience: "6 months",
    },
    {
      src: "/about_skill_figma.svg",
      alt: "Figma",
      className:
        "bg-gradient-to-t from-[#74C0FC] from-10% via-green-500 via-30% via-yellow-500 via-55% via-red-500 via-80% to-transparent to-80%",
      imageClassName: "scale-50",
      yearofexperience: "2+ years",
    },
  ],
};
