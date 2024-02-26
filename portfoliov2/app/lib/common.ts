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
    className: "bg-linkedIn",
    Icon: FaLinkedin,
  },
  {
    href: "https://github.com/arulvalananto",
    title: "Arul Valan Anto's github",
    className: "bg-github",
    Icon: FaGithub,
  },
  {
    href: "https://medium.com/@arulvalananto",
    title: "Arul Valan Anto's medium",
    className: "bg-medium",
    Icon: FaMedium,
  },
  {
    href: "https://twitter.com/arulvalananto_",
    title: "Arul Valan Anto's twitter",
    className: "bg-twitter",
    Icon: FaTwitter,
  },
];

export const skills: Skill = {
  primary: [
    {
      src: "/about_skill_react.svg",
      title: "React",
      className: "bg-react",
      color: "bg-react",
      imageClassName: "scale-100 md:scale-125 xl:scale-100",
      yearofexperience: "4+ years",
    },
    {
      src: "/about_skill_node.svg",
      title: "NodeJS",
      className: "bg-node",
      color: "bg-node",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
      yearofexperience: "3.5 years",
    },
    {
      src: "/about_skill_mongoDB.svg",
      title: "Mongo DB",
      className: "bg-mongoDB border-mongoDBColor",
      color: "bg-mongoDB",
      imageClassName: "scale-90 md:scale-110 xl:scale-90",
      yearofexperience: "3.5 years",
    },
    {
      src: "/about_skill_typescript.svg",
      title: "TypeScript",
      className: "bg-typscript",
      color: "bg-typescript",
      imageClassName: "scale-100 md:scale-125 xl:scale-100",
      yearofexperience: "3 years",
    },
    {
      src: "/about_skill_javascript.svg",
      title: "JavaScript",
      className: "bg-javascript",
      color: "bg-javascript",
      imageClassName: "scale-100 md:scale-125 xl:scale-100",
      yearofexperience: "4+ years",
    },
    {
      src: "/about_skill_expressJS.svg",
      title: "Express JS",
      className: "bg-expressJS",
      color: "bg-black",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
      yearofexperience: "3.5 years",
    },
    {
      src: "/about_skill_webpack.svg",
      title: "Webpack",
      className: "bg-webpack",
      color: "bg-webpack",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
      yearofexperience: "2 years",
    },
    {
      src: "/about_skill_tailwindcss.svg",
      title: "Tailwind CSS",
      className: "bg-tailwindcss",
      color: "bg-tailwindcssColor",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
      yearofexperience: "3 years",
    },
    {
      src: "/about_skill_sass.svg",
      title: "Sass",
      className: "bg-sass",
      color: "bg-sass",
      yearofexperience: "4+ years",
    },
    {
      src: "/about_skill_redux.svg",
      title: "Redux",
      className: "bg-redux",
      color: "bg-reduxColor",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
      yearofexperience: "4 years",
    },
    {
      src: "/about_skill_formik.svg",
      title: "Formik",
      className: "bg-formik",
      color: "bg-formik",
      yearofexperience: "3 years",
    },
    {
      src: "/about_skill_playwright.svg",
      title: "PlayWright",
      className: "bg-playwright",
      color: "bg-playwright",
      yearofexperience: "2 years",
    },
    {
      src: "/about_skill_css.svg",
      title: "CSS",
      className: "bg-css",
      color: "bg-css",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
      yearofexperience: "4+ years",
    },
    {
      src: "/about_skill_git.svg",
      title: "GIT",
      className: "bg-git",
      color: "bg-gitColor",
      imageClassName: "scale-90 md:scale-100 xl:scale-90",
      yearofexperience: "4+ years",
    },
    {
      src: "/about_skill_jest.svg",
      title: "Jest",
      className: "bg-jest",
      color: "bg-jest",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
      yearofexperience: "2.5 years",
    },
    {
      src: "/about_skill_vite.svg",
      title: "Vite",
      className: "bg-vite",
      color: "bg-vite",
      yearofexperience: "1.5 years",
    },
  ],
  secondary: [
    {
      src: "/about_skill_python.svg",
      title: "Python",
      className:
        "bg-gradient-to-t from-python from-80% via-transparent to-80% to-transparent to-100%",
      color: "bg-python",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
      yearofexperience: "2 years",
    },
    {
      src: "/about_skill_firebase.svg",
      title: "Firebase",
      className:
        "bg-gradient-to-t from-firebase from-80% via-transparent to-80% to-transparent to-100%",
      color: "bg-firebase",
      yearofexperience: "3 years",
    },
    {
      src: "/about_skill_redis.svg",
      title: "Redis",
      className:
        "bg-gradient-to-t from-redis from-70% via-transparent to-70% to-transparent to-100%",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
      color: "bg-redis",
      yearofexperience: "2 years",
    },
    {
      src: "/about_skill_angular.svg",
      title: "Angular",
      className:
        "bg-gradient-to-t from-angular from-60% via-transparent to-60% to-transparent to-100%",
      color: "bg-red-500",
      yearofexperience: "2 years",
    },
    {
      src: "/about_skill_stripe.svg",
      title: "Stripe",
      className:
        "bg-gradient-to-t from-stripe from-60% via-transparent to-60% to-transparent to-100%",
      color: "bg-stripe",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
      yearofexperience: "1 year",
    },
    {
      src: "/about_skill_storybook.svg",
      title: "Storybook",
      className:
        "bg-gradient-to-t from-storybook from-55% via-transparent to-55% to-transparent to-100%",
      color: "bg-storybook",
      yearofexperience: "1.5 years",
    },
    {
      src: "/about_skill_fastapi.svg",
      title: "Fast API",
      className:
        "bg-gradient-to-t from-fastapi from-55% via-transparent to-55% to-transparent to-100%",
      color: "bg-fastapi",
      imageClassName: "scale-90 md:scale-100 xl:scale-90",
      yearofexperience: "1 year",
    },
    {
      src: "/about_skill_mysql.svg",
      title: "MySQL",
      className:
        "bg-gradient-to-t from-mysql from-50% via-transparent to-50% to-transparent to-100%",
      color: "bg-mysql",
      yearofexperience: "1 year",
    },
    {
      src: "/about_skill_django.svg",
      title: "Django",
      className:
        "bg-gradient-to-t from-django from-50% via-transparent to-50% to-transparent to-100%",
      color: "bg-django",
      imageClassName: "scale-50 md:scale-100 xl:scale-50",
      yearofexperience: "1 year",
    },
    {
      src: "/about_skill_postgresql.svg",
      title: "PostgreSQL",
      className:
        "bg-gradient-to-t from-white from-40% via-transparent to-40% to-transparent to-100%",
      color: "bg-postgresql",
      imageClassName: "scale-90 md:scale-100 xl:scale-90",
      yearofexperience: "6 months",
    },
    {
      src: "/about_skill_figma.svg",
      title: "Figma",
      className:
        "bg-gradient-to-t from-figma from-10% via-green-500 via-30% via-yellow-500 via-55% via-red-500 via-80% to-transparent to-80%",
      imageClassName: "scale-50 md:scale-75 xl:scale-50",
      color: "bg-red-400",
      yearofexperience: "2+ years",
    },
  ],
};

export const experienceArea = [
  {
    title: "Web Development",
    color: "bg-webDevelopment",
  },
  {
    title: "Architectural Design",
    color: "bg-architectualDesign",
  },
  {
    title: "Web Design",
    color: "bg-webDesign",
  },
];

export const selectedProjects = [
  {
    name: "AirDeck",
    description:
      "AirDeck is a platform that lets you add voice or video to your presentations, track engagement with unique links, record and upload videos, embed existing videos, and view comprehensive analytics, all in one place.",
    skills: [
      {
        title: "Angular",
        color: "bg-red-500",
      },
      {
        title: "Node JS",
        color: "bg-node",
      },
      {
        title: "Express JS",
        color: "bg-black",
      },
      {
        title: "MongoDB",
        color: "bg-mongoDB",
      },
      {
        title: "Redis",
        color: "bg-redis",
      },
      {
        title: "TypeScript",
        color: "bg-typescript",
      },
      {
        title: "MySQL",
        color: "bg-mysql",
      },
      {
        title: "Websocket",
        color: "bg-webDesign",
      },
      {
        title: "Auth0",
        color: "bg-orange-600",
      },
    ],
    url: "https://airdeck.co/",
    className: "bg-airdeck",
    imageUrl: "/home_airdeck_project_look.png",
  },
  {
    name: "LandGenius",
    description:
      "A remote sensing application provides quick and comprehensive details about land cover types, wetlands, streams, ponds, flood zones, and endangered species in your project area, which benefits real estate agents, land buyers, developers, and city planners.",
    skills: [
      {
        title: "React",
        color: "bg-react",
      },
      {
        title: "Redux",
        color: "bg-reduxColor",
      },
      {
        title: "Django",
        color: "bg-django",
      },
      {
        title: "PostgreSQL",
        color: "bg-postgresql",
      },
      {
        title: "Stripe",
        color: "bg-stripe",
      },
      {
        title: "Mapbox",
        color: "bg-blue-800",
      },
      {
        title: "TurfJS",
        color: "bg-green-800",
      },
      {
        title: "Jest",
        color: "bg-jest",
      },
    ],
    url: "https://landgeniustest.wpengine.com",
    className: "bg-landgenius",
    imageUrl: "/projects_landgenius_look.webp",
  },
  {
    name: "Vidable AI",
    description:
      "Vidable makes video libraries better for organizations by improving search, providing useful insights, saving time and money, and ensuring quality standards. This helps users maximize the value of their videos and achieve their goals faster.",
    skills: [
      {
        title: "React",
        color: "bg-react",
      },
      {
        title: "Redux",
        color: "bg-redux",
      },
      {
        title: "Node JS",
        color: "bg-node",
      },
      {
        title: "Express JS",
        color: "bg-black",
      },
      {
        title: "MongoDB",
        color: "bg-mongoDB",
      },
      {
        title: "Redis",
        color: "bg-redis",
      },
      {
        title: "Jest",
        color: "bg-jest",
      },
      {
        title: "PlayWright",
        color: "bg-playwright",
      },
    ],
    url: "https://vidable.ai/",
    className: "bg-vidable",
    imageUrl: "/home_vidable_project_look.webp",
  },
];
