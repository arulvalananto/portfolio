import tech from './tech.json';

export const navlinks = [
    {
        title: 'Github',
        url: 'https://github.com/arulvalananto',
        icon: 'fa-brands fa-github',
    },
    {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/arulvalanantos/',
        icon: 'fa-brands fa-linkedin',
    },
    {
        title: 'Medium',
        url: 'https://medium.com/@arulvalananto',
        icon: 'fa-brands fa-medium',
    },
    {
        title: `Let's talk`,
        url: 'mailto:arulvalananto@gmail.com',
    },
];

export const personalInfo = {
    title: 'Full Stack Developer',
    name: 'Arul Valan Anto S',
    description: `Hey! I am a Software Engineer based in India with three years of experience. I design and build robust software products and always strive for excellence.`,
};

export const hashtagColors = {
    webapp: '#17AE85',
    mobileapp: '#F4D54E',
    npmpackage: '#821DFE',
    scraper: '#F288AD',
    chromeextension: '#F85B53',
    outlookaddin: '#3384C5',
};

export const webapps = [
    {
        name: 'FutureReads',
        description:
            'A Chrome browser extension that allows you to save articles to read later and sends you pop-up notifications as reminders when you come across related content while browsing the internet.',
        assets: {
            prefix: '/futureReads',
            logo: '/futureReads',
            previewImages: {
                count: 5,
                imageNumber: 4,
            },
        },
        links: {
            websiteURL: 'https://futurereads.web.app/',
        },
        extras: {
            stack: [
                tech.React,
                tech.NodeJS,
                tech.FastAPI,
                tech.Mongoose,
                tech.ChromeExtension,
                tech.Auth0,
                tech.JavaScript,
                tech.SASS,
            ],
            timeline: {
                startsAt: 'Mar 2023',
                endsAt: 'Aug 2023',
            },
            hashtags: ['webapp', 'chromeextension', 'scraper'],
            isStillProgressive: false,
        },
    },
    {
        name: 'Highlight',
        description:
            '🎉 Highlight is the revolutionary web application that empowers developers, bloggers, and designers to create visually stunning, attention-grabbing code snippets like never before! 💻✨',
        assets: {
            prefix: '/highlight',
            logo: '/highlight',
            previewImages: {
                count: 8,
                imageNumber: 1,
            },
        },
        links: {
            websiteURL: 'https://highlightt.web.app/',
        },
        extras: {
            stack: [
                tech.React,
                tech.Redux,
                tech.TypeScript,
                tech.Firebase,
                tech.Vite,
                tech.TailwindCSS,
                tech.CSSModules,
            ],
            timeline: {
                startsAt: 'Jun 2023',
                endsAt: 'Jun 2023',
            },
            hashtags: ['webapp'],
            isStillProgressive: false,
        },
    },
    {
        name: 'FrameWise',
        description:
            'FrameWise is your gateway to a world of limitless possibilities, where videos become a wellspring of insights and inspiration. Seamlessly upload your videos and embark on a transformative journey that unlocks the hidden potential within each frame.',
        assets: {
            prefix: '/framewise',
            logo: '/framewise',
            previewImages: {
                count: 14,
                imageNumber: 1,
            },
        },
        links: {
            websiteURL: 'https://framewiise.web.app/',
        },
        extras: {
            stack: [
                tech.React,
                tech.Redux,
                tech.TypeScript,
                tech.Jest,
                tech.Auth0,
                tech.Firebase,
                tech.OpenAI,
                tech.AzureVideoIndexerAI,
                tech.Storybook,
            ],
            timeline: {
                startsAt: 'Jun 2023',
                endsAt: 'Now',
            },
            hashtags: ['webapp'],
            isStillProgressive: false,
        },
    },
    {
        name: 'AirDeck',
        description:
            'AirDeck is a platform that lets you add voice or video to your presentations, track engagement with unique links, record and upload videos, embed existing videos, and view comprehensive analytics, all in one place.',
        assets: {
            prefix: '/airdeck',
            logo: '/Airdeck',
            previewImages: {
                count: 7,
                imageNumber: 2,
            },
        },
        links: {
            websiteURL: 'https://app.airdeck.co/',
        },
        extras: {
            stack: [
                tech.Angular,
                tech.NodeJS,
                tech.MySQL,
                tech.Express,
                tech.Redis,
                tech.Auth0,
                tech.TypeScript,
            ],
            timeline: {
                startsAt: 'May 2022',
                endsAt: 'Now',
            },
            hashtags: ['webapp'],
            isStillProgressive: false,
        },
    },
    {
        name: 'LandGenius',
        description:
            'A remote sensing application provides quick and comprehensive details about land cover types, wetlands, streams, ponds, flood zones, and endangered species in your project area, which benefits real estate agents, land buyers, developers, and city planners.',
        assets: {
            prefix: '/landgenius',
            logo: '/landgenius',
            previewImages: {
                count: 17,
                imageNumber: 3,
            },
        },
        links: {
            websiteURL:
                'http://ec2-18-191-77-185.us-east-2.compute.amazonaws.com/sign-in',
        },
        extras: {
            stack: [
                tech.React,
                tech.Django,
                tech.PostgreSQL,
                tech.Stripe,
                tech.Redux,
                tech.Mapbox,
                tech.TurfJS,
                tech.Jest,
            ],
            timeline: {
                startsAt: 'Feb 2022',
                endsAt: 'May 2022',
            },
            hashtags: ['webapp'],
            isStillProgressive: false,
        },
    },
    {
        name: 'Annals',
        description:
            'Comprehensive solution for all your digital storage needs. With Annals, you can store and organize your journals, to-do lists, ideas, and passwords in one convenient location.',
        assets: {
            prefix: '/Annals',
            logo: '/annals',
            previewImages: {
                count: 11,
                imageNumber: 4,
            },
        },
        links: {
            websiteURL: 'https://annals.web.app',
        },
        extras: {
            stack: [
                tech.React,
                tech.NodeJS,
                tech.Mongoose,
                tech.Firebase,
                tech.TailwindCSS,
                tech.Formik,
                tech.MaterialUI,
            ],
            timeline: {
                startsAt: 'Nov 2021',
                endsAt: 'Jan 2022',
            },
            hashtags: ['webapp'],
            isStillProgressive: false,
        },
    },
];

export const extensions = [
    {
        name: 'AirDeck Outlook Add-in',
        description:
            'A plugin can simplify your AirDeck deck-sharing experience with just a few clicks. It also allows you to share your decks with anyone via Outlook.',
        assets: {
            prefix: '/airdeck+outlook+addin',
            logo: '/airdeck+outlook+add-in',
            previewImages: {
                count: 9,
                imageNumber: 9,
            },
        },
        links: {
            websiteURL: '',
        },
        extras: {
            stack: [
                tech.React,
                tech.Redux,
                tech.TypeScript,
                tech.Outlook,
                tech.CSS3,
            ],
            timeline: {
                startsAt: 'Mar 2023',
                endsAt: 'Apr 2023',
            },
            hashtags: ['outlookaddin'],
            isStillProgressive: false,
        },
    },
    {
        name: 'Boilers',
        description:
            'A scaffold generator that can assist you in creating a basic structure for your upcoming React and Node application. It can automatically generate the files and folders required to start a project and includes boilerplate code you can build upon.',
        assets: {
            prefix: '/boilers',
            logo: '/boilers',
            previewImages: {
                count: 6,
                imageNumber: 6,
            },
        },
        links: {
            websiteURL: '',
            npmURL: 'https://www.npmjs.com/package/boilers',
        },
        extras: {
            stack: [tech.NodeJS, tech.NPM],
            timeline: {
                startsAt: 'May 2021',
                endsAt: 'Jun 2021',
            },
            hashtags: ['npmpackage'],
            isStillProgressive: false,
        },
    },
];

export const projects = [
    { title: 'Web applications', apps: webapps },
    { title: 'Plugins/Packages', apps: extensions },
    // { title: 'Packages', apps: packages },
];

export const techPlacements = [
    { name: tech.React, position: { top: '140px', left: '555px' } },
    {
        name: tech.Stripe,
        position: { top: '50px', left: '1000px' },
    },
    {
        name: tech.Git,
        position: { top: '0px', left: '1650px' },
    },
    {
        name: tech.Webpack,
        position: { top: '850px', left: '1800px' },
    },
    {
        name: tech.Mongoose,
        position: { top: '575px', left: '1225px' },
    },
    {
        name: tech.Angular,
        position: { top: '250px', left: '1900px' },
    },
    {
        name: tech.PlayWright,
        position: { top: '400px', left: '1500px' },
    },
    {
        name: tech.Firebase,
        position: { top: '790px', left: '350px' },
    },
    {
        name: tech.NodeJS,
        position: { top: '550px', left: '50px' },
    },
    {
        name: tech.Redis,
        position: { top: '10px', left: '50px' },
    },
];
