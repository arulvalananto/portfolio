import { ProjectDetails, Skill, SocialLink } from "./types";

// The single source of truth for every career-duration calculation.
export const careerStartDate = "2020-01-01";

export const bio = `Hey there, digital pioneers! I'm Arul Valan Anto, a Full Stack developer with {{experienceYears}} of coding under my belt. My playground? Crafting sleek and savvy web applications that make users go "Wow!".
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

export const projectsOverview = [
  {
    href: "https://airdeck.ai/",
    src: "/about_airdeck_overview.webp",
    alt: "AirDeck",
    title: "AirDeck Project - Overview",
  },
  {
    // href: "https://vidable.ai/",
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

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    username: "arulvalanantos",
    href: "https://www.linkedin.com/in/arulvalanantos",
    title: "Arul Valan Anto's linkedin",
    className: "bg-linkedIn",
    bgClassName: "bg-linkedIn",
    iconClassName: "text-white",
    textClassName: "text-white",
    layoutClassName: "col-span-1 row-span-2",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    username: "arulvalananto",
    href: "https://github.com/arulvalananto",
    title: "Arul Valan Anto's github",
    className: "bg-github",
    bgClassName: "bg-github",
    iconClassName: "text-white",
    textClassName: "text-white",
    layoutClassName: "col-span-1 row-span-2",
    icon: "github",
  },
  {
    name: "Medium",
    username: "arulvalananto",
    href: "https://medium.com/@arulvalananto",
    title: "Arul Valan Anto's medium",
    className: "bg-medium",
    bgClassName: "bg-medium",
    iconClassName: "text-white",
    textClassName: "text-white",
    layoutClassName: "col-span-1 row-span-2",
    icon: "medium",
  },
  {
    name: "Twitter",
    username: "arulvalananto_",
    href: "https://twitter.com/arulvalananto_",
    title: "Arul Valan Anto's twitter",
    className: "bg-twitter",
    bgClassName: "bg-twitter",
    iconClassName: "text-white",
    textClassName: "text-white",
    layoutClassName: "col-span-1 row-span-2",
    icon: "twitter",
  },
  // {
  //     name: 'Read CV',
  //     username: 'arulvalananto',
  //     href: 'https://read.cv/arulvalananto',
  //     title: "Arul Valan Anto's Read CV",
  //     className: 'bg-white',
  //     bgClassName: 'bg-white',
  //     iconClassName: 'text-black',
  //     textClassName: 'text-black',
  //     layoutClassName: 'col-span-1 row-span-2',
  //     Icon: SiReaddotcv,
  // },
  {
    name: "Bento",
    username: "arulvalananto",
    href: "https://bento.me/arulvalananto",
    title: "Arul Valan Anto's Bento",
    className: "bg-provider-bento",
    bgClassName: "bg-provider-bento",
    iconClassName: "text-white",
    textClassName: "text-white",
    layoutClassName: "col-span-1 row-span-2",
    icon: "bento",
  },
  {
    name: "Hackernoon",
    username: "arulvalananto",
    href: "https://hackernoon.com/u/arulvalananto",
    title: "Arul Valan Anto's Hackernoon",
    className: "bg-white",
    bgClassName: "bg-white",
    iconClassName: "text-black",
    textClassName: "text-black",
    layoutClassName: "col-span-1 row-span-2",
    icon: "hackernoon",
  },
  {
    name: "BuyMeCoffee",
    username: "arulvalanantos",
    href: "https://www.buymeacoffee.com/arulvalanantos",
    title: "Arul Valan Anto's Buy Me a Coffee",
    className: "bg-provider-buy-me-coffee",
    bgClassName: "bg-provider-buy-me-coffee",
    iconClassName: "text-black",
    textClassName: "text-black",
    layoutClassName: "col-span-1 row-span-2",
    icon: "buyMeCoffee",
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
    },
    {
      src: "/about_skill_node.svg",
      title: "NodeJS",
      width: 24,
      height: 27,
      className: "bg-node",
      color: "bg-node",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
    },
    {
      src: "/about_skill_mongoDB.svg",
      title: "Mongo DB",
      width: 24,
      height: 23,
      className: "bg-mongoDB border-mongoDBColor",
      color: "bg-mongoDB",
      imageClassName: "scale-90 md:scale-110 xl:scale-90",
    },
    {
      src: "/about_skill_typescript.svg",
      title: "TypeScript",
      width: 24,
      height: 22,
      className: "bg-typescript",
      color: "bg-typescript",
      imageClassName: "scale-100 md:scale-125 xl:scale-100",
    },
    {
      src: "/about_skill_javascript.svg",
      title: "JavaScript",
      width: 24,
      height: 22,
      className: "bg-javascript",
      color: "bg-javascript",
      imageClassName: "scale-100 md:scale-125 xl:scale-100",
    },
    {
      src: "/about_skill_expressJS.svg",
      title: "Express JS",
      className: "bg-expressJS",
      color: "bg-black",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
    },
    {
      src: "/about_skill_webpack.svg",
      title: "Webpack",
      className: "bg-webpack",
      color: "bg-webpack",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
    },
    {
      src: "/about_skill_tailwindcss.svg",
      title: "Tailwind CSS",
      className: "bg-tailwindcss",
      color: "bg-tailwindcssColor",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
    },
    {
      src: "/about_skill_sass.svg",
      title: "Sass",
      className: "bg-sass",
      color: "bg-sass",
    },
    {
      src: "/about_skill_redux.svg",
      title: "Redux",
      className: "bg-redux",
      color: "bg-reduxColor",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
    },
    {
      src: "/about_skill_formik.svg",
      title: "Formik",
      className: "bg-formik",
      color: "bg-formik",
    },
    {
      src: "/about_skill_playwright.svg",
      title: "PlayWright",
      className: "bg-playwright",
      color: "bg-playwright",
    },
    {
      src: "/about_skill_css.svg",
      title: "CSS",
      width: 24,
      height: 29,
      className: "bg-css",
      color: "bg-css",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
    },
    {
      src: "/about_skill_git.svg",
      title: "GIT",
      className: "bg-git",
      color: "bg-gitColor",
      imageClassName: "scale-90 md:scale-100 xl:scale-90",
    },
    {
      src: "/about_skill_jest.svg",
      title: "Jest",
      className: "bg-jest",
      color: "bg-jest",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
    },
    {
      src: "/about_skill_vite.svg",
      title: "Vite",
      className: "bg-vite",
      color: "bg-vite",
    },
  ],
  secondary: [
    {
      src: "/about_skill_python.svg",
      title: "Python",
      width: 24,
      height: 23,
      className: "bg-python",
      color: "bg-python",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
    },
    {
      src: "/about_skill_firebase.svg",
      title: "Firebase",
      width: 24,
      height: 23,
      className: "bg-firebase",
      color: "bg-firebase",
    },
    {
      src: "/about_skill_redis.svg",
      title: "Redis",
      width: 24,
      height: 23,
      className: "bg-redis",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
      color: "bg-redis",
    },
    {
      src: "/about_skill_angular.svg",
      title: "Angular",
      className: "bg-angular",
      color: "bg-red-500",
    },
    {
      src: "/about_skill_stripe.svg",
      title: "Stripe",
      width: 24,
      height: 25,
      className: "bg-stripe",
      color: "bg-stripe",
      imageClassName: "scale-75 md:scale-100 xl:scale-75",
    },
    {
      src: "/about_skill_storybook.svg",
      title: "Storybook",
      className: "bg-storybook",
      color: "bg-storybook",
    },
    {
      src: "/about_skill_fastapi.svg",
      title: "Fast API",
      className: "bg-fastapi",
      color: "bg-fastapi",
      imageClassName: "scale-90 md:scale-100 xl:scale-90",
    },
    {
      src: "/about_skill_mysql.svg",
      title: "MySQL",
      width: 24,
      height: 21,
      className: "bg-mysql",
      color: "bg-mysql",
    },
    {
      src: "/about_skill_django.svg",
      title: "Django",
      width: 24,
      height: 31,
      className: "bg-django",
      color: "bg-django",
      imageClassName: "scale-50 md:scale-100 xl:scale-50",
    },
    {
      src: "/about_skill_postgresql.svg",
      title: "PostgreSQL",
      width: 24,
      height: 23,
      className: "bg-postgresql",
      color: "bg-postgresql",
      imageClassName: "scale-90 md:scale-100 xl:scale-90",
    },
    {
      src: "/about_skill_figma.svg",
      title: "Figma",
      width: 24,
      height: 34,
      className: "bg-figma",
      imageClassName: "scale-50 md:scale-75 xl:scale-50",
      color: "bg-red-400",
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
        title: "RxJS",
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
        title: "Socket.io",
        color: "bg-webDesign",
      },
      {
        title: "Auth0",
        color: "bg-orange-600",
      },
    ],
    url: "/work/airdeck",
    className: "bg-airdeck",
    imageUrl: "/home_airdeck_project_look.webp",
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
        title: "Formik",
        color: "bg-formik",
      },
      {
        title: "Material UI",
        color: "bg-blue-800",
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
        title: "GDAL",
        color: "bg-green-800",
      },
      {
        title: "FPDF",
        color: "bg-black",
      },
      {
        title: "Jest",
        color: "bg-jest",
      },
    ],
    url: "/work/landgenius",
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
      {
        title: "FastAPI",
        color: "bg-black",
      },
      {
        title: "Material UI",
        color: "bg-blue-800",
      },
      {
        title: "OpenAI",
        color: "bg-black",
      },
      {
        title: "LangChain",
        color: "bg-green-800",
      },
      {
        title: "Tailwind CSS",
        color: "bg-tailwindcss",
      },
    ],
    url: "/work/vidable-ai",
    className: "bg-layout5",
    imageUrl: "/home_vidable_project_look.webp",
  },
];

export const projects: ProjectDetails = {
  airdeck: {
    name: selectedProjects[0].name,
    oneliner: "A Document narration platform for marketing!",
    role: "Full Stack Developer",
    tools: selectedProjects[0].skills.map((skill) => skill.title),
    timeline: { from: "2022", to: "2023", isPresent: false },
    description:
      "AirDeck is a platform that lets you add voice or video to your presentations, track engagement with unique links, record and upload videos, embed existing videos, and view comprehensive analytics, all in one place.",
    context: "",
    achievements: [
      {
        description:
          "Implemented OAuth 2.0 authorization with Auth0, enabling third-party applications such as the Outlook plugin to access protected AirDeck resources on behalf of authenticated users.",
      },
      {
        description:
          "Co-developed an Outlook plugin that reduced the deck-sharing workflow from approximately seven steps to two.",
      },
      {
        description:
          "Implemented WebSocket-based multi-user collaboration with presence indicators, user-activity tracking, and slide-level coordination.",
      },
      {
        description:
          "Integrated Ziggeo video and audio recording to enable multimedia narration directly within presentation slides.",
      },
      {
        description:
          "Worked with multiple proofs-of-concept, obtained client approval, and implemented them for actual use.",
      },
    ],
    links: {
      website: { link: "https://airdeck.ai/", title: "Website" },
    },
    type: "Project At Augment",
    category: "Web Application",
    bgImageLayout: "bg-layout1",
    showKeyFeatures: true,
    hasShowImageLayout: true,
    status: "Live",
  },
  highlight: {
    name: "Highlight",
    oneliner: "A design tool to animate your code snippets",
    role: "Full Stack Developer",
    tools: ["React", "Redux", "TypeScript", "Tailwind CSS", "Vite", "Firebase"],
    timeline: { from: "2023", to: "2023", isPresent: false },
    description:
      "Highlight is the revolutionary web application that empowers developers, bloggers, and designers to create visually stunning, attention-grabbing code snippets like never before!",
    context: "",
    achievements: [
      {
        title: "Developer-focused creation",
        description:
          "Created a dedicated workflow for turning code into polished, shareable visuals.",
      },
      {
        title: "End-to-end delivery",
        description:
          "Built the live side project with a React, TypeScript, Tailwind CSS, and Firebase stack.",
      },
    ],
    links: {
      website: { link: "https://highlightt.web.app/", title: "Website" },
    },
    externalLinks: [
      {
        link: "https://github.com/arulvalananto/highlight",
        title: "Github",
      },
    ],
    type: "Side Project",
    category: ["Web Application"],
    bgImageLayout: "bg-layout1",
    showKeyFeatures: false,
    hasShowImageLayout: false,
    status: "Live",
  },
  landgenius: {
    name: selectedProjects[1].name,
    oneliner: "A comprehensive environmental analysis tool",
    role: "Full Stack Developer",
    tools: selectedProjects[1].skills.map((skill) => skill.title),
    timeline: { from: "2022", to: "2022", isPresent: false },
    description:
      "A remote sensing application provides quick and comprehensive details about land cover types, wetlands, streams, ponds, flood zones, and endangered species in your project area, which benefits real estate agents, land buyers, developers, and city planners.",
    context: "",
    achievements: [
      {
        description:
          "Led end-to-end delivery of a geospatial land-analysis application, spanning client requirements, React mapping workflows, Django services, PostgreSQL, integrations, reporting, and release coordination.",
      },
      {
        description:
          "Built interactive Mapbox workflows for user-drawn polygons and shapefile uploads, using Turf.js and GDAL to calculate and visualize project boundaries.",
      },
      {
        description:
          "Developed the Django and GDAL backend that connected spatial-data processing and environmental land analysis with the application and reporting workflows.",
      },
      {
        description:
          "Automated generation of structured PDF land-analysis reports and integrated Stripe for in-application payment processing.",
      },
    ],
    links: {
      website: {
        link: "https://landgeniustest.wpengine.com/",
        title: "Website",
      },
      application: {
        link: "http://ec2-18-191-77-185.us-east-2.compute.amazonaws.com/",
        title: "Visit App",
      },
    },
    type: "Project At Augment",
    category: "Web Application",
    bgImageLayout: "bg-layout1",
    showKeyFeatures: false,
    hasShowImageLayout: true,
    status: "On Hold (Budget Constraints)",
  },
  vidableai: {
    name: selectedProjects[2].name,
    oneliner: "An AI for optimizing video management.",
    role: "Full Stack Developer",
    tools: selectedProjects[2].skills.map((skill) => skill.title),
    timeline: { from: "2023", to: "", isPresent: true },
    description:
      "Vidable makes video libraries better for organizations by improving search, providing useful insights, saving time and money, and ensuring quality standards. This helps users maximize the value of their videos and achieve their goals faster.",
    context: "",
    achievements: [
      {
        description:
          "Developed and deployed a video assistant that grounded answers in video-derived context and returned timestamp references for direct navigation to relevant content.",
      },
      {
        description:
          "Implemented video-intelligence experiences that surfaced analyzed metadata including brand and sentiment analysis, topics, labels, people detection, and content summaries.",
      },
      {
        description:
          "Integrated 10+ third-party video sources into a unified ingestion and analysis workflow.",
      },
    ],
    links: {
      // website: {
      //   link: "https://vidable.ai/",
      //   title: "Website",
      // },
    },
    type: "Project At Augment",
    category: "Web Application",
    bgImageLayout: "bg-layout1",
    showKeyFeatures: false,
    hasShowImageLayout: true,
    status: "Built, but Dropped Pre-Launch",
  },
  synthup: {
    name: "SynthUp",
    oneliner: "Condense long videos into easy-to-digest summaries.",
    role: "Full Stack Developer",
    tools: [
      "React",
      "Redux",
      "Tailwind CSS",
      "FastAPI",
      "MongoDB",
      "Formik",
      "Yup",
    ],
    timeline: { from: "2023", to: "2025", isPresent: false },
    description:
      "SynthUp turns long videos into short and easy-to-listen summaries. Get to the point quickly and enjoy your content effortlessly, wherever you are.",
    context: "",
    achievements: [
      {
        title: "Long-form content distillation",
        description:
          "Built a workflow that turns lengthy video into concise, listenable summaries.",
      },
      {
        title: "Full-stack AI product",
        description:
          "Developed the project across React, FastAPI, MongoDB, and a structured form experience.",
      },
    ],
    links: {
      website: {
        link: "https://synthup.framer.ai/",
        title: "Visit Site",
      },
    },
    type: "Side Project",
    category: "Web Application",
    bgImageLayout: "bg-layout1",
    showKeyFeatures: false,
    hasShowImageLayout: false,
    status: "Not Live",
    externalLinks: [
      {
        link: "https://github.com/arulvalananto/synthup",
        title: "GitHub",
      },
    ],
  },
  annals: {
    name: "Annals",
    oneliner: "All-in-one personal space for your privacy!",
    role: ["Full Stack Developer", "Creator"],
    tools: [
      "React",
      "NodeJS",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
      "Formik",
      "Material UI",
    ],
    timeline: { from: "2021", to: "2022", isPresent: false },
    description:
      "Comprehensive solution for all your digital storage needs. With Annals, you can store and organize your journals, to-do lists, ideas, and passwords in one convenient location.",
    context: "",
    achievements: [
      {
        title: "Unified personal space",
        description:
          "Combined journals, tasks, ideas, and password storage into one personal organization product.",
      },
      {
        title: "Creator-owned product",
        description:
          "Took the side project from concept to a live full-stack application.",
      },
    ],
    links: {
      website: {
        link: "https://annals.web.app/",
        title: "Website",
      },
    },
    type: "Side Project",
    category: "Web Application",
    bgImageLayout: "bg-layout1",
    showKeyFeatures: false,
    hasShowImageLayout: false,
    externalLinks: [
      {
        link: "https://github.com/arulvalananto/annals",
        title: "GitHub",
      },
    ],
  },
  thecrawlerman: {
    name: "The Crawler Man",
    oneliner: "pre-defined APIs provider explicitly designed for scraping",
    role: ["Backend Developer"],
    tools: ["NodeJS", "MongoDB", "Firebase", "Cheerio", "Puppeteer"],
    timeline: { from: "2023", to: "", isPresent: true },
    description:
      "The Crawler Man offers a comprehensive collection of pre-defined APIs explicitly designed for scraping. With The Crawler Man, you can easily extract data from various websites without the hassle.",
    context: "",
    achievements: [
      {
        title: "Reusable data access",
        description:
          "Designed pre-defined APIs to make common web-data extraction workflows easier to reuse.",
      },
      {
        title: "Backend automation",
        description:
          "Applied Node.js, Puppeteer, Cheerio, MongoDB, and Firebase to the crawler platform.",
      },
    ],
    links: {
      comingSoon: { link: "", title: "Working in progress" },
    },
    externalLinks: [
      {
        link: "https://github.com/arulvalananto/the_crawler_man",
        title: "GitHub",
      },
    ],
    type: "Side Project",
    category: ["API", "Web Crawler"],
    bgImageLayout: "bg-layout1",
    showKeyFeatures: false,
    hasShowImageLayout: false,
    status: "In Progress",
  },
  scafffoldercli: {
    name: "Scafffolder CLI",
    oneliner: "A CLI for speeding up your scaffolding experience",
    role: ["Developer", "Creator"],
    tools: ["NodeJS", "Chalk", "inquirer"],
    timeline: { from: "2023", to: "2024", isPresent: false },
    description:
      "A scaffold generator that can assist you in creating a basic structure for your upcoming React and Node application. It can automatically generate the files and folders required to start a project and includes boilerplate code you can build upon.",
    context: "",
    achievements: [
      {
        title: "Faster project starts",
        description:
          "Automated React and Node project structure, including the files and boilerplate needed to begin.",
      },
      {
        title: "Published developer tooling",
        description:
          "Packaged the CLI for reuse through npm with an accompanying public source repository.",
      },
    ],
    links: {
      cli: {
        link: "https://www.npmjs.com/package/scafffolder",
        title: "NPM Link",
      },
    },
    externalLinks: [
      {
        link: "https://github.com/arulvalananto/scaffolder",
        title: "GitHub",
      },
    ],
    type: "Side Project",
    category: "Command Line Interface (CLI)",
    bgImageLayout: "bg-layout1",
    showKeyFeatures: false,
    hasShowImageLayout: false,
  },
  framewiseai: {
    name: "Framewise",
    oneliner: "Unleash insights from every video frame.",
    role: ["Full Stack Developer"],
    tools: [
      "React",
      "Redux",
      "TypeScript",
      "TailwindCSS",
      "MUI",
      "Firebase",
      "OpenAI",
      "Azure Video Indexer AI",
      "Jest",
      "Storybook",
    ],
    timeline: { from: "2023", to: "2023", isPresent: false },
    description:
      "FrameWise is your gateway to a world of limitless possibilities, where videos become a wellspring of insights and inspiration. Seamlessly upload your videos and embark on a transformative journey that unlocks the hidden potential within each frame.",
    context: "",
    achievements: [
      {
        title: "AI-assisted video analysis",
        description:
          "Built an experience for uploading video and exploring insights from its content.",
      },
      {
        title: "Quality-minded delivery",
        description:
          "Paired the React product with automated testing and component documentation tooling.",
      },
    ],
    links: {
      website: {
        link: "https://framewiise.web.app/",
        title: "Website",
      },
    },
    externalLinks: [
      {
        link: "https://github.com/arulvalananto/FrameWise",
        title: "GitHub",
      },
    ],
    type: "Side Project",
    category: "Web Application",
    bgImageLayout: "bg-layout1",
    showKeyFeatures: false,
    hasShowImageLayout: false,
  },
  futurereads: {
    name: "FutureReads",
    oneliner: "Read-later app with recommendation feature",
    role: ["Full Stack Developer"],
    tools: [
      "React",
      "Node JS",
      "FastAPI",
      "MongoDB",
      "TailwindCSS",
      "Auth0",
      "Javascript",
    ],
    timeline: { from: "2023", to: "2023", isPresent: false },
    description:
      "A Chrome browser extension that allows you to save articles to read later and sends you pop-up notifications as reminders when you come across related content while browsing the internet.",
    context: "",
    achievements: [
      {
        title: "Read-later workflow",
        description:
          "Created a browser-based system for saving articles and returning to them at the right time.",
      },
      {
        title: "Contextual reminders",
        description:
          "Added related-content notifications to reconnect readers with saved material while browsing.",
      },
    ],
    links: {
      website: {
        link: "https://futurereads.web.app/",
        title: "Website",
      },
      plugin: {
        link: "https://chromewebstore.google.com/detail/futurereads/djofoijfbdbanacdognloeopcmaekiic",
        title: "Chrome Extension Link",
      },
    },
    externalLinks: [
      {
        link: "https://github.com/arulvalananto/FutureReads",
        title: "GitHub",
      },
    ],
    type: "Side Project",
    category: ["Web Application", "Chrome Extension"],
    bgImageLayout: "bg-layout1",
    showKeyFeatures: false,
    hasShowImageLayout: false,
  },
  dressedtokill: {
    name: "Dressed-to-kill",
    oneliner: "The Online Fashion Store",
    role: ["Front-end Developer"],
    tools: ["React", "Node JS", "Fireabse", "Javascript", "Stripe"],
    timeline: { from: "2021", to: "2021", isPresent: false },
    description:
      "A fashion and lifestyle e-commerce online shop caters to young people and fashion enthusiasts looking for the latest trends and styles.",
    context: "",
    achievements: [
      {
        title: "Fashion commerce experience",
        description:
          "Delivered a responsive shopping experience tailored to lifestyle and fashion discovery.",
      },
      {
        title: "Payment-ready storefront",
        description:
          "Integrated the product stack around React, Node.js, Firebase, and Stripe.",
      },
    ],
    links: {
      website: { link: "https://looksuite.com/", title: "Website" },
    },
    externalLinks: [
      {
        link: "https://github.com/arulvalananto/Dressed-to-kill",
        title: "GitHub",
      },
    ],
    type: "Side Project",
    category: "Web Application",
    bgImageLayout: "bg-layout1",
    showKeyFeatures: false,
    hasShowImageLayout: false,
  },
  looksuite: {
    name: "LookSuite",
    oneliner: "Present, stream, and record with a polished virtual presence.",
    role: "Senior Software Engineer",
    tools: [
      "Electron",
      "React",
      "Node.js",
      "Fastify",
      "PostgreSQL",
      "Prisma",
      "GitHub Actions",
      "GCS",
      "GCP Cloud Run (Service and Job)",
      "WebGL",
      "Vite",
      "Vitest",
      "Playwright",
      "Supertest",
      "Secret Manager",
      "GCP Cloud SQL",
      "Keycloak",
      "Redis",
      "Docker",
      "Terraform",
      "GitHub Workflows",
    ],
    timeline: { from: "2025", to: "", isPresent: true },
    description:
      "LookSuite is a TypeScript platform that pairs a cross-platform desktop application for video conferencing, streaming, recording, and content creation with the cloud services that support it. As a Senior Software Engineer, I work across product and platform concerns to help deliver a reliable virtual-presence experience.",
    context: "",
    achievements: [
      {
        description:
          "Architected the end-to-end Electron, React, and Node.js platform and its supporting data, authentication, real-time media, and cloud-service architecture.",
      },
      {
        description:
          "Designed an adaptive CPU/GPU video-processing architecture with runtime capability detection and a multi-worker execution model targeting a 16 ms real-time frame budget.",
      },
      {
        description:
          "Built automated pull-request quality and performance validation, including API load testing, application tests, and video-pipeline telemetry comparison against the main branch.",
      },
      {
        description:
          "Established Terraform-managed infrastructure and Docker-based service workflows to support consistent development and production delivery.",
      },
      {
        description:
          "Implemented Role Based Access Control (RBAC) to enforce precise user permissions, dynamically allowing or restricting actions and features based on user roles.",
      },
    ],
    links: {
      website: { link: "https://looksuite.com/", title: "Website" },
    },
    type: "Project At Augment",
    category: ["Desktop Application", "Real-Time Video Processing"],
    bgImageLayout: "bg-layout1",
    showKeyFeatures: false,
    hasShowImageLayout: false,
    status: "Active",
  },
  auggy: {
    name: "Auggy",
    oneliner: "An AI-powered workplace assistant for everyday work.",
    role: "Full-Stack Developer",
    tools: [
      "Electron",
      "React",
      "Redux",
      "Tailwind CSS",
      "FastAPI",
      "RAG",
      "Cron",
      "LangGraph",
      "LangChain",
      "LangSmith",
      "Vertex AI Search",
      "OpenAI",
      "Google Gemini",
      "Redis",
      "Docker",
      "GCP",
      "Vite",
      "Vitest",
      "Firestore",
      "GitHub Workflows",
      "GitHub Actions",
    ],
    timeline: { from: "2024", to: "2025", isPresent: false },
    description:
      "Auggy is an AI-powered workplace assistant that combines a desktop application, specialized AI agents, organizational knowledge retrieval, and workplace-tool integrations to simplify everyday employee tasks.",
    context: "",
    achievements: [
      {
        description:
          "Designed and implemented LangGraph-based orchestration for multiple specialized workplace agents, coordinating task execution across integrated systems.",
      },
      {
        description:
          "Built a country-aware RAG system that filtered organizational knowledge by document metadata to produce contextually appropriate responses.",
      },
      {
        description:
          "Developed specialized agents for Jira, Google Calendar, Gmail, and PaddyField, extending the assistant into core workplace workflows.",
      },
      {
        description:
          "Delivered employee productivity features including automated desktop-based time tracking and goal-setting with personalized 6–12 month learning roadmaps.",
      },
      {
        description:
          "Implemented Role Based Access Control (RBAC) to enforce precise user permissions, dynamically allowing or restricting actions and features based on user roles.",
      },
      {
        description:
          "Implemented automated time tracking, logging login/logout times as soon as the system boots up.",
      },
    ],
    links: {},
    type: "Project At Augment",
    category: ["Desktop Application", "AI Assistant"],
    bgImageLayout: "bg-layout1",
    showKeyFeatures: false,
    hasShowImageLayout: false,
  },
  stadiumrover: {
    name: "Stadium Rover",
    oneliner: "Fan experiences and AI-assisted sports travel planning.",
    role: "Backend Engineer",
    tools: [
      "Node.js",
      "Express",
      "FastAPI",
      "LangChain",
      "GCP Workflows",
      "GCP",
      "GCS",
      "Secret Manager",
      "Supertest",
      "Redis",
      "Docker",
      "GitHub Actions",
      "GitHub Workflows",
    ],
    timeline: { from: "2024", to: "2025", isPresent: false },
    description:
      "Stadium Rover is a fan-engagement application for sports news, ticket discovery, live discussions, stadium experiences, and AI-assisted multi-game trip planning, backed by separate core and AI services.",
    context: "",
    achievements: [
      {
        description:
          "Architected a distributed backend that separated the mobile application's core API from a dedicated AI service, enabling independent development and operation of application and AI workloads.",
      },
      {
        description:
          "Built an AI-powered multi-game itinerary service with FastAPI and LangChain, generating personalized travel plans from team preferences, travel dates, and event data.",
      },
      {
        description:
          "Designed an AI evaluation agent using the ReAct framework to assess itinerary and stadium-review-summary outputs against predefined inputs and evaluation criteria.",
      },
      {
        description:
          "Orchestrated an AI stadium-review-summary pipeline with GCP Workflows and implemented scheduled sports-data ingestion to keep downstream functionality current.",
      },
    ],
    links: {
      website: { link: "https://stadiumrover.com/", title: "Website" },
    },
    type: "Project At Augment",
    category: ["Backend Platform", "AI Application"],
    bgImageLayout: "bg-layout1",
    showKeyFeatures: false,
    hasShowImageLayout: false,
  },
  seedlinked: {
    name: "SeedLinked",
    oneliner: "A seed discovery and comparison platform.",
    role: "Backend Engineer",
    tools: [
      "Node.js",
      "Puppeteer",
      "Cheerio",
      "MongoDB",
      "GCP Workflows",
      "LangChain",
      "LangSmith",
      "Google Gemini",
      "Redis",
      "Cron Jobs",
      "Docker",
      "GCP",
    ],
    timeline: { from: "2022", to: "2025", isPresent: false },
    description:
      "SeedLinked helps growers and breeders discover, compare, and evaluate seeds. Automated data collection and AI-assisted enrichment workflows keep its seed catalog current and structured.",
    context: "",
    achievements: [
      {
        description:
          "Developed scheduled web-scraping pipelines using Puppeteer and Cheerio to collect and periodically refresh seed information from external sources.",
      },
      {
        description:
          "Implemented a LangChain-based AI enrichment workflow, orchestrated with GCP Workflows, to transform collected seed data into structured descriptions covering strengths, weaknesses, growth and yield, flavor and appearance, disease resistance, maturity, and growing conditions, with human review before approval and persistence.",
      },
      {
        description:
          "Developed AI evaluation tests for the seed-description generation component to consistently evaluate output quality and identify regressions when changing LLM models, prompts, or generation logic.",
      },
    ],
    links: {
      website: { link: "https://seedlinked.com/", title: "Website" },
    },
    type: "Project At Augment",
    category: ["Backend Platform", "Data Pipeline"],
    bgImageLayout: "bg-layout1",
    showKeyFeatures: false,
    hasShowImageLayout: false,
  },
  raven: {
    name: "Raven",
    oneliner: "A unified enterprise ERP and CRM system.",
    role: "Frontend Engineer",
    tools: [
      "React",
      "Redux",
      "Material UI",
      "Sass",
      "Jest",
      "Playwright",
      "AWS Cognito",
      "Windows Authentication",
      "Webpack",
      "GitHub Actions",
    ],
    timeline: { from: "2023", to: "2024", isPresent: false },
    description:
      "Raven is an enterprise application combining ERP and CRM capabilities across subscriber, finance, HR, supply-chain, sales, and customer-management operations.",
    context: "",
    achievements: [
      {
        description:
          "Contributed to the evolution of a unified ERP and CRM frontend spanning subscriber management, finance, HRM, SCM, sales, and customer relationship workflows.",
      },
      {
        description:
          "Implemented Windows Authentication and AWS Cognito Single Sign-On to provide supported organizational access to the application.",
      },
      {
        description:
          "Built permission-driven UI through flexible RBAC and a feature-flag system that supported controlled beta testing and staged rollouts without redeployment.",
      },
      {
        description:
          "Implemented GitHub Actions pull-request validation for static analysis, automated testing, and OWASP-based vulnerability checks.",
      },
      {
        description:
          "Integrated Chargebee payment portal seamlessly into business processes, enhancing financial management capabilities.",
      },
      {
        description:
          "Designed and implemented a logging mechanism for the Raven application, significantly enhancing tracking and debugging capabilities.",
      },
      {
        description:
          "Set up and maintained the project using tools such as Webpack and Babel to ensure optimal security and performance.",
      },
    ],
    links: {},
    externalLinks: [{ link: "https://www.lee.net/", title: "Company" }],
    type: "Project At Augment",
    category: "Enterprise Web Application",
    bgImageLayout: "bg-layout1",
    showKeyFeatures: false,
    hasShowImageLayout: false,
  },
  paddyfield: {
    name: "PaddyField",
    oneliner: "Time tracking and project management for teams.",
    role: "Full-Stack Developer",
    tools: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Cron",
      "Vitest",
      "Playwright",
    ],
    timeline: { from: "2023", to: "2024", isPresent: false },
    description:
      "PaddyField is a time-tracking and project-management application with timezone-aware reminder automation, role-based workflows, and Jira time-logging integration.",
    context: "",
    achievements: [
      {
        description:
          "Implemented timezone-aware timesheet reminders that identified outstanding submissions and sent notifications every Friday at 6:00 PM in each user's local time zone.",
      },
      {
        description:
          "Delivered role-based project-management and approval workflows for administrators, managers, and team members across project assignment, task management, time tracking, and approvals.",
      },
      {
        description:
          "Integrated Jira time logging so employees could record work against Jira tickets within their existing development workflow.",
      },
    ],
    links: {},
    type: "Project At Augment",
    category: "Web Application",
    bgImageLayout: "bg-layout1",
    showKeyFeatures: false,
    hasShowImageLayout: false,
  },
  contezo: {
    name: "Contezo",
    oneliner: "Gamified campaigns, contests, and customer engagement.",
    role: "Frontend-Heavy Full-Stack Engineer",
    tools: [
      "React",
      "Redux",
      "Node.js",
      "Auth0",
      "Tailwind CSS",
      "Jest",
      "Playwright",
    ],
    timeline: { from: "2023", to: "2023", isPresent: false },
    description:
      "Contezo is a gamified engagement platform for managing promotions, contests, sweepstakes, and ballot-based competitions across web, social, and mobile experiences.",
    context: "",
    achievements: [
      {
        description:
          "Developed a configurable photo-contest registration form builder that allowed administrators to create, reorder, and validate fields for individual campaigns.",
      },
      {
        description:
          "Engineered an eight-step administrative workflow for configuring ballot contests across settings, nominations, forms, ballot design, notifications, and legal requirements.",
      },
      {
        description:
          "Introduced Playwright end-to-end testing for critical workflows and guided other developers in writing and maintaining the test suite.",
      },
      {
        description:
          "Established a Node.js proxy layer between the React frontend and the existing .NET backend to support application integration requirements.",
      },
    ],
    links: {},
    type: "Project At Augment",
    category: "Web Application",
    bgImageLayout: "bg-layout1",
    showKeyFeatures: false,
    hasShowImageLayout: false,
  },
  acat: {
    name: "ACAT",
    oneliner: "Operational management and assessment for facilities.",
    role: "Full-Stack Developer",
    tools: [
      "React",
      "Node.js",
      "Redux",
      "Material UI",
      "Tailwind CSS",
      "PostgreSQL",
      "Redis",
    ],
    timeline: { from: "2022", to: "2023", isPresent: false },
    description:
      "ACAT is an operational management and assessment platform for custodial departments, supporting configurable facility workflows, inspections, task tracking, reporting, and performance dashboards.",
    context: "",
    achievements: [
      {
        description:
          "Developed a flexible and modular system to allow different facilities, such as hospitals, offices, and educational institutions, to customize the ACAT software according to their specific needs.",
      },
      {
        description:
          "Developed a user-friendly dashboard that provides comprehensive performance metrics and visualizations, including task completion rates, average task completion time, inspection pass rates, and efficiency metrics.",
      },
      {
        description:
          "Developed role-based access control to cater to facility managers, custodians, and inspectors, ensuring secure and appropriate access to features.",
      },
      {
        description:
          "Created dynamic report-generation features for detailed insights, summaries, and automated reports on tasks, inspections, and resource usage, with customizable templates exportable in multiple formats.",
      },
    ],
    links: {
      website: { link: "https://acuityconcepts.com/acat/", title: "Website" },
    },
    type: "Project At Augment",
    category: "Web Application",
    bgImageLayout: "bg-layout1",
    showKeyFeatures: false,
    hasShowImageLayout: false,
  },
  gtsagentassist: {
    name: "GTS Agent Assist",
    oneliner: "An embeddable workspace for customer-service agents.",
    role: "Frontend Engineer",
    tools: ["Node.js", "EJS", "JavaScript", "HTML", "CSS"],
    timeline: { from: "2025", to: "2025", isPresent: false },
    description:
      "GTS Agent Assist is an embeddable, AI-powered customer-service workspace that gives agents contextual assistance during live chats and calls through a customizable interface.",
    context: "",
    achievements: [
      {
        description:
          "Developed a fully customizable interface where agents can drag, reposition, resize, and hide sections; configure which sections are visible; and adjust their size to fit their workflow.",
      },
      {
        description:
          "Integrated Agent Assist as a widget that seamlessly embeds into customer service platforms.",
      },
    ],
    links: {
      website: { link: "https://www.gtscx.ai/omniassist", title: "Website" },
    },
    type: "Project At Augment",
    category: "Embedded Web Application",
    bgImageLayout: "bg-layout1",
    showKeyFeatures: false,
    hasShowImageLayout: false,
  },
  jojopay: {
    name: "JoJoPay",
    oneliner: "Payments, ticketing, and shared-expense management.",
    role: "Full-Stack Developer",
    tools: ["Node.js", "MongoDB", "Redis", "Firebase Cloud Messaging", "Cron"],
    timeline: { from: "2021", to: "2022", isPresent: false },
    description:
      "JoJoPay is a multi-purpose payment and service application that includes ticket booking, QR-code-based local-bus tickets, and a shared-expense workflow with scheduled payment reminders.",
    context: "",
    achievements: [
      {
        description:
          "Engineered the backend workflow for Split-Share, modeling the full shared-expense lifecycle from bill creation and participant allocation through payment-status tracking and manual settlement confirmation.",
      },
      {
        description:
          "Designed and implemented a cron-driven reminder workflow that identified outstanding balances and delivered Firebase Cloud Messaging notifications until a bill creator confirmed settlement.",
      },
      {
        description:
          "Established the application's initial project structure and configuration, providing the technical foundation for subsequent feature development and deployment.",
      },
    ],
    links: {
      website: { link: "https://jojopay.com.ph/", title: "Website" },
    },
    type: "Project At Coding Space",
    category: "Web Application",
    bgImageLayout: "bg-layout1",
    showKeyFeatures: false,
    hasShowImageLayout: false,
  },
  ticketezy: {
    name: "TicketEzy",
    oneliner: "A data-driven movie and theater booking experience.",
    role: "Frontend Developer",
    tools: ["React", "Redux", "JavaScript", "CSS"],
    timeline: { from: "2021", to: "2021", isPresent: false },
    description:
      "TicketEzy is a ticket-booking application where reusable frontend logic dynamically renders theater seating layouts from structured backend data.",
    context: "",
    achievements: [
      {
        description:
          "Engineered a configuration-driven theater seat-map renderer that interpreted backend-supplied layout data instead of relying on fixed, theater-specific interfaces.",
      },
      {
        description:
          "Designed reusable UI logic to model rows, seat categories, availability states, empty spaces, gaps, and aisles through one adaptable booking interface.",
      },
    ],
    links: {},
    type: "Project At Coding Space",
    category: "Web Application",
    bgImageLayout: "bg-layout1",
    showKeyFeatures: false,
    hasShowImageLayout: false,
  },
};

export const recentArticles = [
  {
    title: "3 Principles in Software Development",
    href: "https://medium.com/@arulvalananto/3-principles-in-software-development-5b89ed655297",
    website: "https://medium.com",
    imageURL: "/3_principles_in_software_development_blog.webp",
  },
  {
    title: "9 Image Optimization Tricks for a Seamless Web Experience",
    href: "https://medium.com/@arulvalananto/9-image-optimization-tricks-for-a-seamless-web-experience-b41867e87e54",
    website: "https://medium.com",
    imageURL: "/image_optimization_blog.webp",
  },
  {
    title: "5 Advanced NodeJS Techniques with ExpressJS",
    href: "https://medium.com/@arulvalananto/5-advanced-nodejs-techniques-6ac0b7b024a8",
    website: "https://medium.com",
    imageURL: "/nodejs_tips_blog.webp",
  },
  {
    title:
      "Mastering SOLID Principles Like the Back of Your Hand in Just 8 Minutes!",
    href: "https://hackernoon.com/mastering-solid-principles-like-the-back-of-your-hand-in-just-8-minutes",
    website: "https://hackernoon.com",
    imageURL: "/solid_principles_article.gif",
    unoptimized: true,
  },
];
