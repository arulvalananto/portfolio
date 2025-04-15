import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaMedium, FaTwitter } from 'react-icons/fa6';
import {
    SiReaddotcv,
    SiBento,
    SiHackernoon,
    SiBuymeacoffee,
} from 'react-icons/si';

import { ProjectDetails, Skill } from './types';

export const bio = `Hey there, digital pioneers! I'm Arul Valan Anto, a Full Stack developer with over 4 years of coding under my belt. My playground? Crafting sleek and savvy web applications that make users go "Wow!".
In my journey through the ever-evolving realm of web development, I've had the pleasure of dipping my toes into various fields, including AI, marketing, and environmental initiatives. From environmental to AI, I've donned many hats and solved countless puzzles, each experience shaping me into the versatile developer I am today. I'm ready to tackle any challenge that comes our way. Whether you're a startup aiming to disrupt the market or an established enterprise seeking to stay ahead of the curve, I'm here to join forces and turn your vision into reality.`;

export const educationDetails = [
    {
        degree: 'Bachelor’s degree, Computer Science Engineering',
        school: 'Loyola ICAM College of Engineering and Technology, Chennai, India',
        date: 'July 2015 --- May 2019',
        score: 'CGPA - 7.33 / 10',
    },
    {
        degree: 'Higher Secondary Certificate (HSC)',
        school: 'Carmel Higher Secondary School, Kanyakumari, India',
        date: 'June 2014 --- June 2015',
        score: 'Score - 87 Percent',
    },
];

export const experienceDetails = [
    {
        position: 'Senior Software Engineer',
        company: 'Augment',
        location: 'Remote',
        date: 'February 2022 --- Present',
    },
    {
        position: 'Junior Software Developer',
        company: 'Coding Space',
        location: 'Remote',
        date: 'January 2020 --- January 2022',
    },
];

export const certificates = [
    {
        href: 'https://www.credly.com/badges/ff81e28b-ecde-4cef-a494-834448af8b93',
        title: 'AWS Certified Cloud Practitioner - Arul Valan Anto',
        src: '/about_aws_certificate.webp',
        alt: 'AWS Certified Cloud Practitioner - Arul Valan Anto',
        width: 40,
        height: 40,
        mobileWidth: 80,
        mobileHeight: 80,
    },
    {
        href: 'https://zsecurity.org/certification/validation/?cert_number=k7l7HJMa',
        title: 'Dark Web Certificate - Arul Valan Anto',
        src: '/about_z_security_certificate.webp',
        alt: 'Dark Web Certificate - Arul Valan Anto',
        width: 40,
        height: 36,
        mobileWidth: 80,
        mobileHeight: 76,
    },
];

export const projectsOverview = [
    {
        href: 'https://airdeck.ai/',
        src: '/about_airdeck_overview.webp',
        alt: 'AirDeck',
        title: 'AirDeck Project - Overview',
    },
    {
        // href: "https://vidable.ai/",
        src: '/about_vidable_overview.webp',
        alt: 'Vidable',
        title: 'Vidable Project - Overview',
    },
    {
        href: 'https://landgeniustest.wpengine.com/',
        src: '/about_landgenius_overview.webp',
        alt: 'LandGenius',
        title: 'LandGenius Project - Overview',
    },
];

export const socialLinks = [
    {
        name: 'LinkedIn',
        username: 'arulvalanantos',
        href: 'https://www.linkedin.com/in/arulvalanantos',
        title: "Arul Valan Anto's linkedin",
        className: 'bg-linkedIn',
        bgClassName: 'bg-linkedIn',
        iconClassName: 'text-white',
        textClassName: 'text-white',
        layoutClassName: 'col-span-1 row-span-2',
        Icon: FaLinkedin,
    },
    {
        name: 'GitHub',
        username: 'arulvalananto',
        href: 'https://github.com/arulvalananto',
        title: "Arul Valan Anto's github",
        className: 'bg-github',
        bgClassName: 'bg-github',
        iconClassName: 'text-white',
        textClassName: 'text-white',
        layoutClassName: 'col-span-1 row-span-2',
        Icon: FaGithub,
    },
    {
        name: 'Medium',
        username: 'arulvalananto',
        href: 'https://medium.com/@arulvalananto',
        title: "Arul Valan Anto's medium",
        className: 'bg-medium',
        bgClassName: 'bg-medium',
        iconClassName: 'text-white',
        textClassName: 'text-white',
        layoutClassName: 'col-span-1 row-span-2',
        Icon: FaMedium,
    },
    {
        name: 'Twitter',
        username: 'arulvalananto_',
        href: 'https://twitter.com/arulvalananto_',
        title: "Arul Valan Anto's twitter",
        className: 'bg-twitter',
        bgClassName: 'bg-twitter',
        iconClassName: 'text-white',
        textClassName: 'text-white',
        layoutClassName: 'col-span-1 row-span-2',
        Icon: FaTwitter,
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
        name: 'Bento',
        username: 'arulvalananto',
        href: 'https://bento.me/arulvalananto',
        title: "Arul Valan Anto's Bento",
        className: 'bg-[#768CFF]',
        bgClassName: 'bg-[#768CFF]',
        iconClassName: 'text-white',
        textClassName: 'text-white',
        layoutClassName: 'col-span-1 row-span-2',
        Icon: SiBento,
    },
    {
        name: 'Hackernoon',
        username: 'arulvalananto',
        href: 'https://hackernoon.com/u/arulvalananto',
        title: "Arul Valan Anto's Hackernoon",
        className: 'bg-white',
        bgClassName: 'bg-white',
        iconClassName: 'text-black',
        textClassName: 'text-black',
        layoutClassName: 'col-span-1 row-span-2',
        Icon: SiHackernoon,
    },
    {
        name: 'BuyMeCoffee',
        username: 'arulvalanantos',
        href: 'https://www.buymeacoffee.com/arulvalanantos',
        title: "Arul Valan Anto's Buy Me a Coffee",
        className: 'bg-[#FFDD00',
        bgClassName: 'bg-[#FFDD00]',
        iconClassName: 'text-black',
        textClassName: 'text-black',
        layoutClassName: 'col-span-1 row-span-2',
        Icon: SiBuymeacoffee,
    },
];

export const skills: Skill = {
    primary: [
        {
            src: '/about_skill_react.svg',
            title: 'React',
            className: 'bg-react',
            color: 'bg-react',
            imageClassName: 'scale-100 md:scale-125 xl:scale-100',
            yearofexperience: '4+ years',
        },
        {
            src: '/about_skill_node.svg',
            title: 'NodeJS',
            className: 'bg-node',
            color: 'bg-node',
            imageClassName: 'scale-75 md:scale-100 xl:scale-75',
            yearofexperience: '3.5 years',
        },
        {
            src: '/about_skill_mongoDB.svg',
            title: 'Mongo DB',
            className: 'bg-mongoDB border-mongoDBColor',
            color: 'bg-mongoDB',
            imageClassName: 'scale-90 md:scale-110 xl:scale-90',
            yearofexperience: '3.5 years',
        },
        {
            src: '/about_skill_typescript.svg',
            title: 'TypeScript',
            className: 'bg-typescript',
            color: 'bg-typescript',
            imageClassName: 'scale-100 md:scale-125 xl:scale-100',
            yearofexperience: '3 years',
        },
        {
            src: '/about_skill_javascript.svg',
            title: 'JavaScript',
            className: 'bg-javascript',
            color: 'bg-javascript',
            imageClassName: 'scale-100 md:scale-125 xl:scale-100',
            yearofexperience: '4+ years',
        },
        {
            src: '/about_skill_expressJS.svg',
            title: 'Express JS',
            className: 'bg-expressJS',
            color: 'bg-black',
            imageClassName: 'scale-75 md:scale-100 xl:scale-75',
            yearofexperience: '3.5 years',
        },
        {
            src: '/about_skill_webpack.svg',
            title: 'Webpack',
            className: 'bg-webpack',
            color: 'bg-webpack',
            imageClassName: 'scale-75 md:scale-100 xl:scale-75',
            yearofexperience: '2 years',
        },
        {
            src: '/about_skill_tailwindcss.svg',
            title: 'Tailwind CSS',
            className: 'bg-tailwindcss',
            color: 'bg-tailwindcssColor',
            imageClassName: 'scale-75 md:scale-100 xl:scale-75',
            yearofexperience: '3 years',
        },
        {
            src: '/about_skill_sass.svg',
            title: 'Sass',
            className: 'bg-sass',
            color: 'bg-sass',
            yearofexperience: '4+ years',
        },
        {
            src: '/about_skill_redux.svg',
            title: 'Redux',
            className: 'bg-redux',
            color: 'bg-reduxColor',
            imageClassName: 'scale-75 md:scale-100 xl:scale-75',
            yearofexperience: '4 years',
        },
        {
            src: '/about_skill_formik.svg',
            title: 'Formik',
            className: 'bg-formik',
            color: 'bg-formik',
            yearofexperience: '3 years',
        },
        {
            src: '/about_skill_playwright.svg',
            title: 'PlayWright',
            className: 'bg-playwright',
            color: 'bg-playwright',
            yearofexperience: '2 years',
        },
        {
            src: '/about_skill_css.svg',
            title: 'CSS',
            className: 'bg-css',
            color: 'bg-css',
            imageClassName: 'scale-75 md:scale-100 xl:scale-75',
            yearofexperience: '4+ years',
        },
        {
            src: '/about_skill_git.svg',
            title: 'GIT',
            className: 'bg-git',
            color: 'bg-gitColor',
            imageClassName: 'scale-90 md:scale-100 xl:scale-90',
            yearofexperience: '4+ years',
        },
        {
            src: '/about_skill_jest.svg',
            title: 'Jest',
            className: 'bg-jest',
            color: 'bg-jest',
            imageClassName: 'scale-75 md:scale-100 xl:scale-75',
            yearofexperience: '2.5 years',
        },
        {
            src: '/about_skill_vite.svg',
            title: 'Vite',
            className: 'bg-vite',
            color: 'bg-vite',
            yearofexperience: '1.5 years',
        },
    ],
    secondary: [
        {
            src: '/about_skill_python.svg',
            title: 'Python',
            className:
                'bg-gradient-to-t from-python from-80% via-transparent to-80% to-transparent to-100%',
            color: 'bg-python',
            imageClassName: 'scale-75 md:scale-100 xl:scale-75',
            yearofexperience: '2 years',
        },
        {
            src: '/about_skill_firebase.svg',
            title: 'Firebase',
            className:
                'bg-gradient-to-t from-firebase from-80% via-transparent to-80% to-transparent to-100%',
            color: 'bg-firebase',
            yearofexperience: '3 years',
        },
        {
            src: '/about_skill_redis.svg',
            title: 'Redis',
            className:
                'bg-gradient-to-t from-redis from-70% via-transparent to-70% to-transparent to-100%',
            imageClassName: 'scale-75 md:scale-100 xl:scale-75',
            color: 'bg-redis',
            yearofexperience: '2 years',
        },
        {
            src: '/about_skill_angular.svg',
            title: 'Angular',
            className:
                'bg-gradient-to-t from-angular from-60% via-transparent to-60% to-transparent to-100%',
            color: 'bg-red-500',
            yearofexperience: '2 years',
        },
        {
            src: '/about_skill_stripe.svg',
            title: 'Stripe',
            className:
                'bg-gradient-to-t from-stripe from-60% via-transparent to-60% to-transparent to-100%',
            color: 'bg-stripe',
            imageClassName: 'scale-75 md:scale-100 xl:scale-75',
            yearofexperience: '1 year',
        },
        {
            src: '/about_skill_storybook.svg',
            title: 'Storybook',
            className:
                'bg-gradient-to-t from-storybook from-55% via-transparent to-55% to-transparent to-100%',
            color: 'bg-storybook',
            yearofexperience: '1.5 years',
        },
        {
            src: '/about_skill_fastapi.svg',
            title: 'Fast API',
            className:
                'bg-gradient-to-t from-fastapi from-55% via-transparent to-55% to-transparent to-100%',
            color: 'bg-fastapi',
            imageClassName: 'scale-90 md:scale-100 xl:scale-90',
            yearofexperience: '1 year',
        },
        {
            src: '/about_skill_mysql.svg',
            title: 'MySQL',
            className:
                'bg-gradient-to-t from-mysql from-50% via-transparent to-50% to-transparent to-100%',
            color: 'bg-mysql',
            yearofexperience: '1 year',
        },
        {
            src: '/about_skill_django.svg',
            title: 'Django',
            className:
                'bg-gradient-to-t from-django from-50% via-transparent to-50% to-transparent to-100%',
            color: 'bg-django',
            imageClassName: 'scale-50 md:scale-100 xl:scale-50',
            yearofexperience: '1 year',
        },
        {
            src: '/about_skill_postgresql.svg',
            title: 'PostgreSQL',
            className:
                'bg-gradient-to-t from-white from-40% via-transparent to-40% to-transparent to-100%',
            color: 'bg-postgresql',
            imageClassName: 'scale-90 md:scale-100 xl:scale-90',
            yearofexperience: '6 months',
        },
        {
            src: '/about_skill_figma.svg',
            title: 'Figma',
            className:
                'bg-gradient-to-t from-figma from-10% via-green-500 via-30% via-yellow-500 via-55% via-red-500 via-80% to-transparent to-80%',
            imageClassName: 'scale-50 md:scale-75 xl:scale-50',
            color: 'bg-red-400',
            yearofexperience: '2+ years',
        },
    ],
};

export const experienceArea = [
    {
        title: 'Web Development',
        color: 'bg-webDevelopment',
    },
    {
        title: 'Architectural Design',
        color: 'bg-architectualDesign',
    },
    {
        title: 'Web Design',
        color: 'bg-webDesign',
    },
];

export const selectedProjects = [
    {
        name: 'AirDeck',
        description:
            'AirDeck is a platform that lets you add voice or video to your presentations, track engagement with unique links, record and upload videos, embed existing videos, and view comprehensive analytics, all in one place.',
        skills: [
            {
                title: 'Angular',
                color: 'bg-red-500',
            },
            {
                title: 'Node JS',
                color: 'bg-node',
            },
            {
                title: 'Express JS',
                color: 'bg-black',
            },
            {
                title: 'MongoDB',
                color: 'bg-mongoDB',
            },
            {
                title: 'Redis',
                color: 'bg-redis',
            },
            {
                title: 'TypeScript',
                color: 'bg-typescript',
            },
            {
                title: 'MySQL',
                color: 'bg-mysql',
            },
            {
                title: 'Websocket',
                color: 'bg-webDesign',
            },
            {
                title: 'Auth0',
                color: 'bg-orange-600',
            },
        ],
        url: '/work/airdeck',
        className: 'bg-airdeck',
        imageUrl: '/home_airdeck_project_look.webp',
    },
    {
        name: 'LandGenius',
        description:
            'A remote sensing application provides quick and comprehensive details about land cover types, wetlands, streams, ponds, flood zones, and endangered species in your project area, which benefits real estate agents, land buyers, developers, and city planners.',
        skills: [
            {
                title: 'React',
                color: 'bg-react',
            },
            {
                title: 'Redux',
                color: 'bg-reduxColor',
            },
            {
                title: 'Django',
                color: 'bg-django',
            },
            {
                title: 'PostgreSQL',
                color: 'bg-postgresql',
            },
            {
                title: 'Stripe',
                color: 'bg-stripe',
            },
            {
                title: 'Mapbox',
                color: 'bg-blue-800',
            },
            {
                title: 'TurfJS',
                color: 'bg-green-800',
            },
            {
                title: 'Jest',
                color: 'bg-jest',
            },
        ],
        url: '/work/landgenius',
        className: 'bg-landgenius',
        imageUrl: '/projects_landgenius_look.webp',
    },
    {
        name: 'Vidable AI',
        description:
            'Vidable makes video libraries better for organizations by improving search, providing useful insights, saving time and money, and ensuring quality standards. This helps users maximize the value of their videos and achieve their goals faster.',
        skills: [
            {
                title: 'React',
                color: 'bg-react',
            },
            {
                title: 'Redux',
                color: 'bg-redux',
            },
            {
                title: 'Node JS',
                color: 'bg-node',
            },
            {
                title: 'Express JS',
                color: 'bg-black',
            },
            {
                title: 'MongoDB',
                color: 'bg-mongoDB',
            },
            {
                title: 'Redis',
                color: 'bg-redis',
            },
            {
                title: 'Jest',
                color: 'bg-jest',
            },
            {
                title: 'PlayWright',
                color: 'bg-playwright',
            },
        ],
        url: '/work/vidable-ai',
        className: 'bg-layout5',
        imageUrl: '/home_vidable_project_look.webp',
    },
];

export const projects: ProjectDetails = {
    airdeck: {
        name: selectedProjects[0].name,
        oneliner: 'A Document narration platform for marketing!',
        role: 'Full Stack Developer',
        tools: selectedProjects[0].skills.map((skill) => skill.title),
        timeline: { from: '2022', to: '2023', isPresent: false },
        description:
            'AirDeck is a platform that lets you add voice or video to your presentations, track engagement with unique links, record and upload videos, embed existing videos, and view comprehensive analytics, all in one place.',
        context: '',
        links: {
            website: { link: 'https://airdeck.ai/', title: 'Website' },
        },
        type: 'Project At Augment',
        category: 'Web Application',
        bgImageLayout: 'bg-layout1',
        showKeyFeatures: true,
        hasShowImageLayout: true,
        status: 'Live',
    },
    highlight: {
        name: 'Highlight',
        oneliner: 'A design tool to animate your code snippets',
        role: 'Full Stack Developer',
        tools: [
            'React',
            'Redux',
            'TypeScript',
            'Tailwind CSS',
            'Vite',
            'Firebase',
        ],
        timeline: { from: '2023', to: '2023', isPresent: false },
        description:
            'Highlight is the revolutionary web application that empowers developers, bloggers, and designers to create visually stunning, attention-grabbing code snippets like never before!',
        context: '',
        links: {
            website: { link: 'https://highlightt.web.app/', title: 'Website' },
        },
        externalLinks: [
            {
                link: 'https://github.com/arulvalananto/highlight',
                title: 'Github',
            },
        ],
        type: 'Side Project',
        category: ['Web Application'],
        bgImageLayout: 'bg-layout1',
        showKeyFeatures: false,
        hasShowImageLayout: false,
        status: 'Live',
    },
    landgenius: {
        name: selectedProjects[1].name,
        oneliner: 'A comprehensive environmental analysis tool',
        role: 'Full Stack Developer',
        tools: selectedProjects[1].skills.map((skill) => skill.title),
        timeline: { from: '2022', to: '2022', isPresent: false },
        description:
            'A remote sensing application provides quick and comprehensive details about land cover types, wetlands, streams, ponds, flood zones, and endangered species in your project area, which benefits real estate agents, land buyers, developers, and city planners.',
        context: '',
        links: {
            website: {
                link: 'https://landgeniustest.wpengine.com/',
                title: 'Website',
            },
            application: {
                link: 'http://ec2-18-191-77-185.us-east-2.compute.amazonaws.com/',
                title: 'Visit App',
            },
        },
        type: 'Project At Augment',
        category: 'Web Application',
        bgImageLayout: 'bg-layout1',
        showKeyFeatures: false,
        hasShowImageLayout: true,
        status: 'On Hold (Budget Constraints)',
    },
    vidableai: {
        name: selectedProjects[2].name,
        oneliner: 'An AI for optimizing video management.',
        role: 'Full Stack Developer',
        tools: selectedProjects[2].skills.map((skill) => skill.title),
        timeline: { from: '2023', to: '', isPresent: true },
        description:
            'Vidable makes video libraries better for organizations by improving search, providing useful insights, saving time and money, and ensuring quality standards. This helps users maximize the value of their videos and achieve their goals faster.',
        context: '',
        links: {
            // website: {
            //   link: "https://vidable.ai/",
            //   title: "Website",
            // },
        },
        type: 'Project At Augment',
        category: 'Web Application',
        bgImageLayout: 'bg-layout1',
        showKeyFeatures: false,
        hasShowImageLayout: true,
        status: 'Built, but Dropped Pre-Launch',
    },
    synthup: {
        name: 'SynthUp',
        oneliner: 'Condense long videos into easy-to-digest summaries.',
        role: 'Full Stack Developer',
        tools: [
            'React',
            'Redux',
            'Tailwind CSS',
            'FastAPI',
            'MongoDB',
            'Formik',
            'Yup',
        ],
        timeline: { from: '2023', to: '2025', isPresent: false },
        description:
            'SynthUp turns long videos into short and easy-to-listen summaries. Get to the point quickly and enjoy your content effortlessly, wherever you are.',
        context: '',
        links: {
            website: {
                link: 'https://synthup.framer.ai/',
                title: 'Visit Site',
            },
        },
        type: 'Side Project',
        category: 'Web Application',
        bgImageLayout: 'bg-layout1',
        showKeyFeatures: false,
        hasShowImageLayout: false,
        status: 'Not Live',
        externalLinks: [
            {
                link: 'https://github.com/arulvalananto/synthup',
                title: 'GitHub',
            },
        ],
    },
    annals: {
        name: 'Annals',
        oneliner: 'All-in-one personal space for your privacy!',
        role: ['Full Stack Developer', 'Creator'],
        tools: [
            'React',
            'NodeJS',
            'MongoDB',
            'Firebase',
            'Tailwind CSS',
            'Formik',
            'Material UI',
        ],
        timeline: { from: '2021', to: '2022', isPresent: false },
        description:
            'Comprehensive solution for all your digital storage needs. With Annals, you can store and organize your journals, to-do lists, ideas, and passwords in one convenient location.',
        context: '',
        links: {
            website: {
                link: 'https://annals.web.app/',
                title: 'Website',
            },
        },
        type: 'Side Project',
        category: 'Web Application',
        bgImageLayout: 'bg-layout1',
        showKeyFeatures: false,
        hasShowImageLayout: false,
        externalLinks: [
            {
                link: 'https://github.com/arulvalananto/annals',
                title: 'GitHub',
            },
        ],
    },
    thecrawlerman: {
        name: 'The Crawler Man',
        oneliner: 'pre-defined APIs provider explicitly designed for scraping',
        role: ['Backend Developer'],
        tools: ['NodeJS', 'MongoDB', 'Firebase', 'Cheerio', 'Puppeteer'],
        timeline: { from: '2023', to: '', isPresent: true },
        description:
            'The Crawler Man offers a comprehensive collection of pre-defined APIs explicitly designed for scraping. With The Crawler Man, you can easily extract data from various websites without the hassle.',
        context: '',
        links: {
            comingSoon: { link: '', title: 'Working in progress' },
        },
        externalLinks: [
            {
                link: 'https://github.com/arulvalananto/the_crawler_man',
                title: 'GitHub',
            },
        ],
        type: 'Side Project',
        category: ['API', 'Web Crawler'],
        bgImageLayout: 'bg-layout1',
        showKeyFeatures: false,
        hasShowImageLayout: false,
        status: 'In Progress',
    },
    scafffoldercli: {
        name: 'Scafffolder CLI',
        oneliner: 'A CLI for speeding up your scaffolding experience',
        role: ['Developer', 'Creator'],
        tools: ['NodeJS', 'Chalk', 'inquirer'],
        timeline: { from: '2023', to: '2024', isPresent: false },
        description:
            'A scaffold generator that can assist you in creating a basic structure for your upcoming React and Node application. It can automatically generate the files and folders required to start a project and includes boilerplate code you can build upon.',
        context: '',
        links: {
            cli: {
                link: 'https://www.npmjs.com/package/scafffolder',
                title: 'NPM Link',
            },
        },
        externalLinks: [
            {
                link: 'https://github.com/arulvalananto/scaffolder',
                title: 'GitHub',
            },
        ],
        type: 'Side Project',
        category: 'Command Line Interface (CLI)',
        bgImageLayout: 'bg-layout1',
        showKeyFeatures: false,
        hasShowImageLayout: false,
    },
    framewiseai: {
        name: 'Framewise',
        oneliner: 'Unleash insights from every video frame.',
        role: ['Full Stack Developer'],
        tools: [
            'React',
            'Redux',
            'TypeScript',
            'TailwindCSS',
            'MUI',
            'Firebase',
            'OpenAI',
            'Azure Video Indexer AI',
            'Jest',
            'Storybook',
        ],
        timeline: { from: '2023', to: '2023', isPresent: false },
        description:
            'FrameWise is your gateway to a world of limitless possibilities, where videos become a wellspring of insights and inspiration. Seamlessly upload your videos and embark on a transformative journey that unlocks the hidden potential within each frame.',
        context: '',
        links: {
            website: {
                link: 'https://framewiise.web.app/',
                title: 'Website',
            },
        },
        externalLinks: [
            {
                link: 'https://github.com/arulvalananto/FrameWise',
                title: 'GitHub',
            },
        ],
        type: 'Side Project',
        category: 'Web Application',
        bgImageLayout: 'bg-layout1',
        showKeyFeatures: false,
        hasShowImageLayout: false,
    },
    futurereads: {
        name: 'FutureReads',
        oneliner: 'Read-later app with recommendation feature',
        role: ['Full Stack Developer'],
        tools: [
            'React',
            'Node JS',
            'FastAPI',
            'MongoDB',
            'TailwindCSS',
            'Auth0',
            'Javascript',
        ],
        timeline: { from: '2023', to: '2023', isPresent: false },
        description:
            'A Chrome browser extension that allows you to save articles to read later and sends you pop-up notifications as reminders when you come across related content while browsing the internet.',
        context: '',
        links: {
            website: {
                link: 'https://futurereads.web.app/',
                title: 'Website',
            },
            plugin: {
                link: 'https://chromewebstore.google.com/detail/futurereads/djofoijfbdbanacdognloeopcmaekiic',
                title: 'Chrome Extension Link',
            },
        },
        externalLinks: [
            {
                link: 'https://github.com/arulvalananto/FutureReads',
                title: 'GitHub',
            },
        ],
        type: 'Side Project',
        category: ['Web Application', 'Chrome Extension'],
        bgImageLayout: 'bg-layout1',
        showKeyFeatures: false,
        hasShowImageLayout: false,
    },
    dressedtokill: {
        name: 'Dressed-to-kill',
        oneliner: 'The Online Fashion Store',
        role: ['Front-end Developer'],
        tools: ['React', 'Node JS', 'Fireabse', 'Javascript', 'Stripe'],
        timeline: { from: '2021', to: '2021', isPresent: false },
        description:
            'A fashion and lifestyle e-commerce online shop caters to young people and fashion enthusiasts looking for the latest trends and styles.',
        context: '',
        links: {},
        externalLinks: [
            {
                link: 'https://github.com/arulvalananto/Dressed-to-kill',
                title: 'GitHub',
            },
        ],
        type: 'Side Project',
        category: 'Web Application',
        bgImageLayout: 'bg-layout1',
        showKeyFeatures: false,
        hasShowImageLayout: false,
    },
};

export const recentArticles = [
    {
        title: '3 Principles in Software Development',
        href: 'https://medium.com/@arulvalananto/3-principles-in-software-development-5b89ed655297',
        website: 'https://medium.com',
        imageURL: '/3_principles_in_software_development_blog.webp',
    },
    {
        title: '9 Image Optimization Tricks for a Seamless Web Experience',
        href: 'https://medium.com/@arulvalananto/9-image-optimization-tricks-for-a-seamless-web-experience-b41867e87e54',
        website: 'https://medium.com',
        imageURL: '/image_optimization_blog.webp',
    },
    {
        title: '5 Advanced NodeJS Techniques with ExpressJS',
        href: 'https://medium.com/@arulvalananto/5-advanced-nodejs-techniques-6ac0b7b024a8',
        website: 'https://medium.com',
        imageURL: '/nodejs_tips_blog.webp',
    },
    {
        title: 'Mastering SOLID Principles Like the Back of Your Hand in Just 8 Minutes!',
        href: 'https://hackernoon.com/mastering-solid-principles-like-the-back-of-your-hand-in-just-8-minutes',
        website: 'https://hackernoon.com',
        imageURL: '/solid_principles_article.gif',
        unoptimized: true,
    },
];
