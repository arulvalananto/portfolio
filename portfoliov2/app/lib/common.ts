import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaMedium, FaTwitter } from "react-icons/fa6";

import { Skill } from "../about-me/types";

export const bio = `Hey there, digital pioneers! I'm Arul Valan Anto, a Full Stack developer with over 4 years of coding under my belt. My playground? Crafting sleek and savvy web applications that make users go "Wow!".
In my journey through the ever-evolving realm of web development, I've had the pleasure of dipping my toes into various fields, including AI, marketing, and environmental initiatives. From environmental to AI, I've donned many hats and solved countless puzzles, each experience shaping me into the versatile developer I am today. I'm ready to tackle any challenge that comes our way. Whether you're a startup aiming to disrupt the market or an established enterprise seeking to stay ahead of the curve, I'm here to join forces and turn your vision into reality.`;

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
    mobileWidth: 80,
    mobileHeight: 80,
  },
  {
    href: "https://zsecurity.org/certification/validation/?cert_number=k7l7HJMa",
    title: "Dark Web Certificate - Arul Valan Anto",
    src: "/about_z_security_certificate.webp",
    alt: "Dark Web Certificate - Arul Valan Anto",
    width: 40,
    height: 36,
    mobileWidth: 80,
    mobileHeight: 76,
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
      color: "bg-[#66DBFB]",
      width: "w-[30px]",
      imageClassName: "scale-100 md:scale-125 xl:scale-100",
      yearofexperience: "4+ years",
    },
    {
      src: "/about_skill_node.svg",
      alt: "NodeJS",
      className: "bg-[#6AA05B]",
      color: "bg-[#6AA05B]",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
      yearofexperience: "3.5 years",
      width: "w-[40px]",
    },
    {
      src: "/about_skill_mongoDB.svg",
      alt: "Mongo DB",
      className: "bg-[#47301E] border-[#84C16A]",
      color: "bg-[#47301E]",
      imageClassName: "scale-90 md:scale-110 xl:scale-90",
      yearofexperience: "3.5 years",
      width: "w-16",
    },
    {
      src: "/about_skill_typescript.svg",
      alt: "TypeScript",
      className: "bg-[#007BCD]",
      color: "bg-[#007BCD]",
      imageClassName: "scale-100 md:scale-125 xl:scale-100",
      yearofexperience: "3 years",
      width: "w-[55px]",
    },
    {
      src: "/about_skill_javascript.svg",
      alt: "JavaScript",
      className: "bg-[#F7E018]",
      color: "bg-[#F7E018]",
      imageClassName: "scale-100 md:scale-125 xl:scale-100",
      yearofexperience: "4+ years",
      width: "w-[60px]",
    },
    {
      src: "/about_skill_expressJS.svg",
      alt: "Express JS",
      className: "bg-[#EEEEEE]",
      color: "bg-black",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
      width: "w-16",
      yearofexperience: "3.5 years",
    },
    {
      src: "/about_skill_webpack.svg",
      alt: "Webpack",
      className: "bg-[#2B3A42]",
      color: "bg-[#2B3A42]",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
      width: "w-[50px]",
      yearofexperience: "2 years",
    },
    {
      src: "/about_skill_tailwindcss.svg",
      alt: "Tailwind CSS",
      className: "bg-[#0B1120]",
      color: "bg-[#35B2E9]",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
      width: "w-[80px]",
      yearofexperience: "3 years",
    },
    {
      src: "/about_skill_sass.svg",
      alt: "Sass",
      className: "bg-[#CD669A]",
      color: "bg-[#CD669A]",
      width: "w-[20px]",
      yearofexperience: "4+ years",
    },
    {
      src: "/about_skill_redux.svg",
      alt: "Redux",
      className: "bg-[#272822]",
      color: "bg-[#7449B9]",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
      width: "w-[30px]",
      yearofexperience: "4 years",
    },
    {
      src: "/about_skill_formik.svg",
      alt: "Formik",
      className: "bg-[#0050CE]",
      color: "bg-[#0050CE]",
      width: "w-9",
      yearofexperience: "3 years",
    },
    {
      src: "/about_skill_playwright.svg",
      alt: "PlayWright",
      className: "bg-[#2B3137]",
      color: "bg-[#2B3137]",
      width: "w-[55px]",
      yearofexperience: "2 years",
    },
    {
      src: "/about_skill_css.svg",
      alt: "CSS",
      className: "bg-[#254BDD]",
      color: "bg-[#254BDD]",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
      width: "w-[20px]",
      yearofexperience: "4+ years",
    },
    {
      src: "/about_skill_git.svg",
      alt: "GIT",
      className: "bg-[#FFFFFF]",
      color: "bg-[#DA4B35]",
      imageClassName: "scale-90 md:scale-100 xl:scale-90",
      width: "w-[20px]",
      yearofexperience: "4+ years",
    },
    {
      src: "/about_skill_jest.svg",
      alt: "Jest",
      className: "bg-[#910E1B]",
      color: "bg-[#910E1B]",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
      width: "w-[20px]",
      yearofexperience: "2.5 years",
    },
    {
      src: "/about_skill_vite.svg",
      alt: "Vite",
      className: "bg-[#1B1B1F]",
      color: "bg-[#1B1B1F]",
      width: "w-[20px]",
      yearofexperience: "1.5 years",
    },
  ],
  secondary: [
    {
      src: "/about_skill_python.svg",
      alt: "Python",
      className:
        "bg-gradient-to-t from-[#265074] from-80% via-transparent to-80% to-transparent to-100%",
      color: "bg-[#265074]",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
      width: "w-10",
      yearofexperience: "2 years",
    },
    {
      src: "/about_skill_firebase.svg",
      alt: "Firebase",
      className:
        "bg-gradient-to-t from-[#1A73E8] from-80% via-transparent to-80% to-transparent to-100%",
      color: "bg-[#1A73E8]",
      width: "w-[50px]",
      yearofexperience: "3 years",
    },
    {
      src: "/about_skill_redis.svg",
      alt: "Redis",
      className:
        "bg-gradient-to-t from-[#161F31] from-70% via-transparent to-70% to-transparent to-100%",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
      color: "bg-[#161F31]",
      width: "w-[30px]",
      yearofexperience: "2 years",
    },
    {
      src: "/about_skill_angular.svg",
      alt: "Angular",
      className:
        "bg-gradient-to-t from-[#1257B2] from-60% via-transparent to-60% to-transparent to-100%",
      color: "bg-red-500",
      width: "w-10",
      yearofexperience: "2 years",
    },
    {
      src: "/about_skill_stripe.svg",
      alt: "Stripe",
      className:
        "bg-gradient-to-t from-[#675DFF] from-60% via-transparent to-60% to-transparent to-100%",
      color: "bg-[#675DFF]",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
      width: "w-[30px]",
      yearofexperience: "1 year",
    },
    {
      src: "/about_skill_storybook.svg",
      alt: "Storybook",
      className:
        "bg-gradient-to-t from-[#FF4785] from-55% via-transparent to-55% to-transparent to-100%",
      color: "bg-[#FF4785]",
      width: "w-[60px]",
      yearofexperience: "1.5 years",
    },
    {
      src: "/about_skill_fastapi.svg",
      alt: "Fast API",
      className:
        "bg-gradient-to-t from-[#009485] from-55% via-transparent to-55% to-transparent to-100%",
      color: "bg-[#009485]",
      imageClassName: "scale-90 md:scale-100 xl:scale-90",
      width: "w-12",
      yearofexperience: "1 year",
    },
    {
      src: "/about_skill_mysql.svg",
      alt: "MySQL",
      className:
        "bg-gradient-to-t from-[#265074] from-50% via-transparent to-50% to-transparent to-100%",
      color: "bg-[#265074]",
      width: "w-10",
      yearofexperience: "1 year",
    },
    {
      src: "/about_skill_django.svg",
      alt: "Django",
      className:
        "bg-gradient-to-t from-[#082E23] from-50% via-transparent to-50% to-transparent to-100%",
      color: "bg-[#082E23]",
      imageClassName: "scale-50 md:scale-100 xl:scale-50",
      width: "w-10",
      yearofexperience: "1 year",
    },
    {
      src: "/about_skill_postgresql.svg",
      alt: "PostgreSQL",
      className:
        "bg-gradient-to-t from-white from-40% via-transparent to-40% to-transparent to-100%",
      color: "bg-[#336690]",
      imageClassName: "scale-90 md:scale-100 xl:scale-90",
      width: "w-[60px]",
      yearofexperience: "6 months",
    },
    {
      src: "/about_skill_figma.svg",
      alt: "Figma",
      className:
        "bg-gradient-to-t from-[#74C0FC] from-10% via-green-500 via-30% via-yellow-500 via-55% via-red-500 via-80% to-transparent to-80%",
      imageClassName: "scale-50 md:scale-75 xl:scale-50",
      color: "bg-red-400",
      width: "w-[50px]",
      yearofexperience: "2+ years",
    },
  ],
};

export const experienceArea = [
  {
    alt: "Web Development",
    color: "bg-[#5D91BB]",
    width: "w-40",
  },
  {
    alt: "Architectural Design",
    color: "bg-[#F05539]",
    width: "w-40",
  },
  {
    alt: "Web Design",
    color: "bg-[#0B9DC7]",
    width: "w-20",
  },
];

export const selectedProjects = [
  {
    name: "AirDeck",
    description:
      "AirDeck is a platform that lets you add voice or video to your presentations, track engagement with unique links, record and upload videos, embed existing videos, and view comprehensive analytics, all in one place.",
    skills: [
      {
        alt: "Angular",
        color: "bg-red-500",
        width: "w-20",
      },
      {
        alt: "Node JS",
        color: "bg-[#6AA05B]",
        width: "w-20",
      },
      {
        alt: "Express JS",
        color: "bg-black",
        width: "w-20",
      },
      {
        alt: "MongoDB",
        color: "bg-[#47301E]",
        width: "w-20",
      },
      {
        alt: "Redis",
        color: "bg-[#161F31]",
        width: "w-20",
      },
      {
        alt: "TypeScript",
        color: "bg-[#007BCD]",
        width: "w-20",
      },
      {
        alt: "MySQL",
        color: "bg-[#265074]",
        width: "w-20",
      },
      {
        alt: "Websocket",
        color: "bg-[#0B9DC7]",
        width: "w-20",
      },
      {
        alt: "Auth0",
        color: "bg-orange-600",
        width: "w-20",
      },
    ],
    url: "https://airdeck.co/",
    className: "bg-[#4F4FF1]",
    imageUrl: "/home_airdeck_project_look.png",
  },
  {
    name: "LandGenius",
    description:
      "A remote sensing application provides quick and comprehensive details about land cover types, wetlands, streams, ponds, flood zones, and endangered species in your project area, which benefits real estate agents, land buyers, developers, and city planners.",
    skills: [
      {
        alt: "React",
        color: "bg-[#66DBFB]",
        width: "w-20",
      },
      {
        alt: "Redux",
        color: "bg-[#7449B9]",
        width: "w-20",
      },
      {
        alt: "Django",
        color: "bg-[#082E23]",
        width: "w-20",
      },
      {
        alt: "PostgreSQL",
        color: "bg-[#336690]",
        width: "w-20",
      },
      {
        alt: "Stripe",
        color: "bg-[#675DFF]",
        width: "w-20",
      },
      {
        alt: "Mapbox",
        color: "bg-blue-800",
        width: "w-20",
      },
      {
        alt: "TurfJS",
        color: "bg-green-800",
        width: "w-20",
      },
      {
        alt: "Jest",
        color: "bg-[#910E1B]",
        width: "w-20",
      },
    ],
    url: "https://landgeniustest.wpengine.com",
    className: "bg-[#FF8577]",
    imageUrl: "/projects_landgenius_look.webp",
  },
  {
    name: "Vidable AI",
    description:
      "Vidable makes video libraries better for organizations by improving search, providing useful insights, saving time and money, and ensuring quality standards. This helps users maximize the value of their videos and achieve their goals faster.",
    skills: [
      {
        alt: "React",
        color: "bg-[#66DBFB]",
        width: "w-20",
      },
      {
        alt: "Redux",
        color: "bg-[#7449B9]",
        width: "w-20",
      },
      {
        alt: "Node JS",
        color: "bg-[#6AA05B]",
        width: "w-20",
      },
      {
        alt: "Express JS",
        color: "bg-black",
        width: "w-20",
      },
      {
        alt: "MongoDB",
        color: "bg-[#47301E]",
        width: "w-20",
      },
      {
        alt: "Redis",
        color: "bg-[#161F31]",
        width: "w-20",
      },
      {
        alt: "Jest",
        color: "bg-[#910E1B]",
        width: "w-20",
      },
      {
        alt: "PlayWright",
        color: "bg-[#2B3137]",
        width: "w-20",
      },
    ],
    url: "https://vidable.ai/",
    className: "bg-[#FFAB2C]",
    imageUrl: "/projects_vidable_look.svg",
    image: {
      xl: { width: 300, height: 300 },
      lg: { width: 500, height: 500 },
    },
  },
];
