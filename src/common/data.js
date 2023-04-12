import {
    faLinkedin,
    faGithub,
    faMedium,
} from '@fortawesome/free-brands-svg-icons';
import tech from './tech.json';

export const navlinks = [
    {
        title: `Resume`,
        download: 'Arul Valan Anto S - Resume',
        url: './resume.pdf',
    },
    {
        title: 'Github',
        url: 'https://github.com/arulvalananto',
        icon: faGithub,
    },
    {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/arulvalanantos/',
        icon: faLinkedin,
    },
    {
        title: 'Medium',
        url: 'https://medium.com/@arulvalananto',
        icon: faMedium,
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
    webapp: '#E32F6E',
    mobileapp: '#F4D54E',
    npmpackage: '#821DFE',
    scraper: '#17AE85',
    chromeextension: '#F85B53',
    outlookaddin: '#3384C5',
};

export const projects = [
    {
        name: 'AirDeck',
        description:
            'AirDeck is the leader in document communication. Easily add audio or video to any document and transform it into an experience.',
        assets: {
            prefix: '/airdeck',
            logo: '/Airdeck',
            previewImages: 7,
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
        },
    },
    {
        name: 'LandGenius',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium, qui voluptatem nemo quo',
        assets: {
            prefix: '/landgenius',
            logo: '/landgenius',
            previewImages: 17,
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
                tech.SASS,
                tech.Jest,
            ],
            timeline: {
                startsAt: 'Feb 2022',
                endsAt: 'May 2022',
            },
            hashtags: ['webapp'],
        },
    },
    {
        name: 'Annals',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium, qui voluptatem nemo quo',
        assets: {
            prefix: '/Annals',
            logo: '/annals',
            previewImages: 2,
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
        },
    },
    {
        name: 'FutureReads',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium, qui voluptatem nemo quo',
        assets: {
            prefix: '/futureReads',
            logo: '/futureReads',
            previewImages: 3,
        },
        links: {
            websiteURL: '',
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
            ],
            timeline: {
                startsAt: 'Mar 2023',
                endsAt: 'Now',
            },
            hashtags: ['webapp', 'chromeextension', 'scraper'],
        },
    },
    {
        name: 'Dressed to kill',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium, qui voluptatem nemo quo',
        assets: {
            prefix: '/dressed-to-kill',
            logo: '/dressed+to+kill',
            previewImages: 11,
        },
        links: {
            websiteURL: '',
        },
        extras: {
            stack: [
                tech.React,
                tech.Redux,
                tech.NodeJS,
                tech.Firebase,
                tech.Stripe,
            ],
            timeline: {
                startsAt: 'May 2021',
                endsAt: 'Jun 2021',
            },
            hashtags: ['webapp'],
        },
    },
    {
        name: 'Boilers',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium, qui voluptatem nemo quo',
        assets: {
            prefix: '/boilers',
            logo: '/boilers',
            previewImages: 7,
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
        },
    },
    {
        name: 'AirDeck Outlook Add-in',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium, qui voluptatem nemo quo',
        assets: {
            prefix: '/airdeck+outlook+addin',
            logo: '/airdeck+outlook+add-in',
            previewImages: 5,
        },
        links: {
            websiteURL: '',
        },
        extras: {
            stack: [tech.React, tech.Redux, tech.TypeScript, tech.Outlook],
            timeline: {
                startsAt: 'Mar 2023',
                endsAt: 'Apr 2023',
            },
            hashtags: ['outlookaddin'],
        },
    },
    // {
    //     name: 'Done With it',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium, qui voluptatem nemo quo',
    //     assets: {
    //         prefix: '/done+with+it',
    //         logo: '/done-with-it',
    //         previewImages: 0,
    //     },
    //     links: {
    //         websiteURL: '',
    //     },
    //     extras: {
    //         stack: [
    //             tech.ReactNative,
    //             tech.NodeJS,
    //             tech.Mongoose,
    //             tech.Formik,
    //             tech.Redux,
    //             tech.Express,
    //         ],
    //         timeline: {
    //             startsAt: 'May 2021',
    //             endsAt: 'Jun 2021',
    //         },
    //         hashtags: ['mobileapp'],
    //     },
    // },
];
