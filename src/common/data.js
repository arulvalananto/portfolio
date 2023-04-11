import {
    faLinkedin,
    faGithub,
    faMedium,
} from '@fortawesome/free-brands-svg-icons';

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
    description: `Hey! I am a Software Engineer based in India with three years of experience. I help businesses reach their goals by creating compelling and optimized software solutions. And I design and build robust software products and always strive for excellence.`,
};

export const hashtagColors = {
    webapp: '#E32F6E',
    mobileapp: '#F4D54E',
    npmpackage: '#821DFE',
    scraper: '#17AE85',
    chromeextension: '#F85B53',
};

export const projects = [
    {
        name: 'AirDeck',
        description:
            'AirDeck is the leader in document communication. Easily add audio or video to any document and transform it into an experience.',
        assets: {
            logo: 'https://d2sgkcesfdic4y.cloudfront.net/airdeck/airdeck',
            previewImages: [''],
        },
        links: {
            websiteURL: 'https://app.airdeck.co/',
        },
        extras: {
            stack: ['React', 'Node'],
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
            logo: 'https://d2sgkcesfdic4y.cloudfront.net/landgenius/landgenius',
            previewImages: [''],
        },
        links: {
            websiteURL:
                'http://ec2-18-191-77-185.us-east-2.compute.amazonaws.com/sign-in',
        },
        extras: {
            stack: ['React', 'Node'],
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
            logo: 'https://d2sgkcesfdic4y.cloudfront.net/Annals/annals',
            previewImages: [''],
        },
        links: {
            websiteURL: 'https://annals.web.app',
        },
        extras: {
            stack: ['React', 'Node'],
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
            logo: 'https://d2sgkcesfdic4y.cloudfront.net/futureReads/futureReads',
            previewImages: [''],
        },
        links: {
            websiteURL: '',
        },
        extras: {
            stack: ['React', 'Node'],
            timeline: {
                startsAt: 'Jan 2023',
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
            logo: 'https://d2sgkcesfdic4y.cloudfront.net/dressed-to-kill/dressed+to+kill',
            previewImages: [''],
        },
        links: {
            websiteURL: '',
        },
        extras: {
            stack: ['React', 'Node'],
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
            logo: 'https://d2sgkcesfdic4y.cloudfront.net/boilers/boilers',
            previewImages: [''],
        },
        links: {
            websiteURL: '',
            npmURL: 'https://www.npmjs.com/package/boilers',
        },
        extras: {
            stack: ['React', 'Node'],
            timeline: {
                startsAt: 'May 2021',
                endsAt: 'Jun 2021',
            },
            hashtags: ['npmpackage'],
        },
    },
    {
        name: 'Done With it',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium, qui voluptatem nemo quo',
        assets: {
            logo: 'https://d2sgkcesfdic4y.cloudfront.net/done+with+it/done-with-it',
            previewImages: [''],
        },
        links: {
            websiteURL: '',
        },
        extras: {
            stack: ['React', 'Node'],
            timeline: {
                startsAt: 'May 2021',
                endsAt: 'Jun 2021',
            },
            hashtags: ['mobileapp'],
        },
    },
];
