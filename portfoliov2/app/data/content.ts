const content = {
    site: {
        language: 'en',
        metadataTitle: 'Arul Valan Anto :: Software Engineer',
        meta: {
            themeColor: '#ffffff',
            robots: 'index, follow',
            author: 'Arul Valan Anto S',
            type: 'website',
            description:
                'Hey! I am a Software Engineer based in India with more than four years of experience. I design and build robust software products and always strive for excellence.',
            keywords:
                'Arul Valan Anto, Portfolio, Software Engineer, React Developer',
            socialTitle: 'Arul Valan Anto :: Full Stack Developer',
            url: 'https://arulvalananto.dev',
            image: '/portfolio_cover.png',
            imageType: 'image/png',
            locale: 'en_US',
            twitterHandle: '@arulvalananto_',
            twitterCard: 'summary_large_image',
            favicon: '/logo.svg',
        },
    },
    ui: {
        imageFallbacks: {
            broken: 'Image broken',
            default: 'Welcome to Portfolio',
        },
        drawer: {
            closeTitle: 'close drawer',
        },
        actionBar: {
            navigation: [
                { href: '/', label: 'Home', image: '/action-bar/home.svg' },
                { href: '/about-me', label: 'About me', image: '/action-bar/about.svg' },
                { href: '/work', label: 'My work', image: '/action-bar/work.svg' },
            ],
            contact: {
                href: 'mailto:arulvalananto@gmail.com',
                label: 'Message me',
                image: '/action-bar/message.svg',
                imageAlt: "Let's Talk",
            },
        },
        navbar: {
            home: { href: '/', title: "Arul Valan Anto's Logo", logo: { src: '/logo.svg', alt: "Welcome to Arul Valan Anto's Portfolio" } },
            about: { href: '/about-me', label: 'About me' },
            work: { href: '/work', label: 'My Work' },
            resume: { href: '/Arul_Valan_Anto_Resume.pdf', filename: 'Arul_Valan_Anto_Resume.pdf', label: 'Resume', downloadLabel: 'Download Resume' },
            cv: 'https://read.cv/arulvalananto',
            contact: { href: 'mailto:arulvalananto@gmail.com', label: "Let's Talk" },
            menuLabel: 'portfolio nav menu',
        },
        home: {
            hero: {
                introduction: 'Hi, I’m Arul Valan Anto',
                title: 'Full Stack Developer - based in India',
                expression: { src: '/home_hero_title_expression.svg', alt: 'stars' },
                stars: { src: '/stars_v2.svg', alt: 'stars' },
                social: [{ href: 'https://www.linkedin.com/in/arulvalanantos', label: 'LinkedIn' }, { href: 'https://github.com/arulvalananto', label: 'GitHub' }, { href: 'https://medium.com/@arulvalananto', label: 'Medium' }],
                projectCount: '16+', projectsLabel: 'Projects', yearsLabel: ['Years of', 'Experience'],
            },
            selectedProjects: { image: { src: '/work_section_alien.gif', alt: 'Work' }, heading: 'Work', subtitle: 'Selected Work', visitLabel: 'Visit the Site', allProjects: { href: '/work', label: 'View All Projects' }, vidableTitle: 'AI-based Video Analytics Tool' },
        },
    },
    resumeDriveLink:
        'https://drive.google.com/file/d/1gtxcEEBqIwGBiAbqNo9-azsztmsqPEXG/view',
    aboutMeSecret: {
        metadataTitle: 'Arul Valan Anto :: Profile',
        helloImage: {
            src: '/about_hello.svg',
            alt: 'Welcome to About Page!',
        },
        sectionTitles: {
            about: 'About',
            education: 'Education',
            experience: 'Experience',
            skills: 'Skills',
            certificates: 'Certificates',
            projects: 'Projects',
        },
        educationDetailsSeparator: '|',
        experienceAt: 'at',
        skillTypes: ['primary', 'secondary'] as const,
        skillTypeLabelSuffix: ':',
        defaultYearsOfExperience: '1',
        googleSearchUrl: 'https://www.google.com/search?q=',
        allProjects: {
            href: '/work',
            label: 'See All',
        },
        readMoreLabel: 'Read More',
        profileImage: {
            src: '/about_profile.webp',
            alt: "Arul Valan Anto's profile pic",
        },
        socialProfile: {
            arrowImage: {
                src: '/about_arrow_social_profile.svg',
                alt: 'arrow for social profile',
            },
            label: "I'm in",
        },
        emailLabel: 'Shoot me an email',
        hireMe: {
            arrowImage: {
                src: '/about_curly_arrow.svg',
                alt: 'Hire me arrow',
            },
            label: "Hire me If you'd like",
            animation: {
                src: '/about_random_player.webm',
                alt: 'Hire me GIF',
            },
        },
    },
    aboutMe: {
        metadataTitle: 'Arul Valan Anto :: Profile',
        name: 'Arul Valan Anto',
        title: 'Full Stack Developer + Tech Blogger',
        bio: {
            whoIAm: {
                heading: '[WHO I AM]',
                description:
                    'Hey, I am Arul Valan Anto — Full Stack Developer and tech blogger. I have more than 5 years of experience in coding under my belt. My playground? Crafting sleek and savvy web applications that make users go “Wow!”.',
            },
            whatIDoNow: {
                heading: '[WHAT I DO NOW]',
                introduction: "Today I'm a",
                currentRole: 'Senior Software Engineer',
                at: 'at',
                currentCompany: {
                    title: 'Augment Portal',
                    href: 'https://www.goaugment.io',
                    label: 'Augment ↗',
                },
                transition:
                    'developing web applications. Previously, I was the',
                previousRole: 'Junior Software Developer',
                previousCompany: {
                    title: 'Coding Space India',
                    href: 'https://www.linkedin.com/company/codingspaceindia/about/',
                    label: 'CodingSpaceIndia ↗',
                },
                conclusion: '. I writing technical articles on Medium.',
            },
            whereIAmNow: {
                heading: "[WHERE I'M At Now]",
                introduction: 'Currently, I live in',
                location: 'Kanyakumari, Tamil Nadu, India',
                conclusion: 'with my parents.',
            },
            spareTime: {
                heading: '[WHAT I DO IN MY SPARE TIME]',
                introduction:
                    'In my free time, I like playing video games and reading books. One of my favorite books is',
                book: '“The Alchemist.”',
                conclusion:
                    'I also enjoy writing technical articles, where I share what I know, on platforms like Medium and Hackernoon.',
            },
            learning: {
                heading: "[WHAT I'M Learning Right Now]",
                value: 'Next.js',
            },
            lookingFor: {
                heading: "[WHAT I'M LOOKING FOR]",
                description:
                    'Impactful, purposeful work with a diverse team of talented people.',
            },
            showMoreLabel: 'More about me',
            showLessLabel: 'Less about me',
        },
        skills: {
            heading: 'Skills',
            defaultYearsOfExperience: '1',
            googleSearchUrl: 'https://www.google.com/search?q=',
        },
        projects: {
            airdeck: {
                href: '/work/airdeck',
                title: 'AirDeck',
                videoSrc: '/projects_airdeck_demo.webm',
                posterSrc: '/projects_airdeck_demo_poster.webp',
            },
            vidable: {
                href: '/work/vidable-ai',
                title: 'Vidable',
                image: {
                    src: '/home_vidable_project_look.webp',
                    alt: 'Vidable AI Project',
                },
            },
            landGenius: {
                href: '/work/landgenius',
                title: 'LandGenius',
                image: {
                    src: '/about_landgenius_project.webp',
                    alt: 'LandGenius',
                },
            },
        },
        articles: {
            heading: 'My Recent Articles',
            href: 'https://medium.com/@arulvalananto',
            allLabel: 'See All',
        },
        fillerImage: {
            src: '/about_random_player.gif',
            alt: 'Hire me GIF',
        },
        socialHeading: 'Find me on',
        quote: {
            text: 'What you seek is seeking',
            emphasis: 'you.',
        },
        location: {
            href: 'https://maps.app.goo.gl/77KHe5BfBXmceoqv6',
            title: 'location',
            image: {
                src: '/map_location.webp',
                alt: 'location',
            },
            label: 'Kanyakumari, TN, India',
        },
        callToAction: {
            href: 'mailto:arulvalananto@gmail.com',
            title: 'mail to',
            prompt: "If you'd like to work with me",
            arrow: '->',
            label: 'Say hello',
        },
    },
    work: {
        metadataTitle: 'Arul Valan Anto :: Work',
        heading: 'My Projects',
        cards: {
            airDeck: {
                href: '/work/airdeck',
                logo: {
                    src: '/projects_airdeck_logo.webp',
                    alt: 'AirDeck Project',
                },
                tagline: 'Document Narration Platform',
                demo: {
                    src: '/projects_airdeck_demo.webm',
                    poster: '/projects_airdeck_demo_poster.webp',
                },
            },
            annals: {
                href: '/work/annals',
                logo: {
                    src: '/projects_annals_logo.svg',
                    alt: 'Highlight Project',
                },
                tagline: 'All-in-one personal space',
                image: {
                    src: '/projects_annals_look.webp',
                    alt: 'Highlight Project',
                },
            },
            dressedToKill: {
                href: '/work/dressed-to-kill',
                logo: {
                    src: '/projects_dressed_to_kill_logo.svg',
                    alt: 'Dressed-to-kill project',
                },
                tagline: 'Dress. Slay. Repeat.',
                decorations: [
                    '/projects_dressedtokill_comma.svg',
                    '/projects_dressedtokill_dot.svg',
                    '/projects_dressedtokill_semicolon.svg',
                    '/projects_dressedtokill_exclamatory.svg',
                ],
            },
            filler: [
                { src: '/projects_attract_people.svg', alt: 'Attract People' },
                {
                    src: '/projects_brainstorm_ideas.svg',
                    alt: 'Brainstorm Ideas',
                },
                { src: '/projects_rewards.svg', alt: 'Collect Rewards' },
            ],
            frameWise: {
                href: '/work/framewise-ai',
                logo: {
                    src: '/projects_framewise_logo.svg',
                    alt: 'Framewise Project',
                },
                tagline: ['Discover Every Detail', 'Frame by Frame'],
                image: {
                    src: '/projects_framewise_look.webp',
                    alt: 'Framewise Project Overview',
                },
            },
            futureReads: {
                href: '/work/future-reads',
                logo: {
                    src: '/projects_futurereads_logo.svg',
                    alt: 'FutureReads Project',
                },
                tagline: ['Read-later app with', 'recommendation feature'],
                image: {
                    src: '/projects_futurereads_look.webp',
                    alt: 'FutureReads Project Overview',
                },
            },
            highlight: {
                href: '/work/highlight',
                embed: {
                    src: 'https://highlightt.web.app/embed/zD2w4KaJrTju1iZhUqPN?p=0&bg=7412D7&f=12&ed=allow-me',
                    title: 'Highlight: welcome_to_my_portfolio.js',
                },
                logo: {
                    src: '/projects_highlight_logo.svg',
                    alt: 'Highlight Project',
                },
                star: {
                    src: '/projects_highlight_star2.svg',
                    alt: 'Highlight Project',
                },
                tagline: ['Better Code', 'Snippets!'],
            },
            landGenius: {
                href: '/work/landgenius',
                logo: {
                    src: '/projects_landgenius_logo.svg',
                    alt: 'LandGenius Project',
                },
                tagline: ['Comprehensive', 'environmental analysis'],
                images: [
                    {
                        src: '/projects_landgenius_look.webp',
                        alt: 'LandGenius Project',
                    },
                    {
                        src: '/projects_landgenius_look_2.webp',
                        alt: 'LandGenius Project',
                    },
                ],
            },
            scafffolder: {
                href: '/work/scafffolder-cli',
                logo: {
                    src: '/projects_scaffolder_logo.svg',
                    alt: 'Framewise Project',
                },
                tagline: ['Instant', 'Scaffold', 'CLI'],
                demo: {
                    src: '/projects_scaffolder_demo.webm',
                    poster: '/projects_scaffolder_demo_poster.webp',
                },
            },
            synthUp: {
                href: '/work/synthup',
                logo: {
                    src: '/projects_synthup_logo.svg',
                    alt: 'SynthUp Project',
                },
                tagline: ['Time-Saving', 'Video Summaries'],
            },
            crawlerMan: {
                href: '/work/the-crawler-man',
                logos: [
                    {
                        src: '/projects_thecrawlerman_logo_animation.gif',
                        alt: 'The crawlerman logo animation',
                    },
                    {
                        src: '/projects_thecrawlerman_logo.svg',
                        alt: 'The crawlerman logo text',
                    },
                ],
                tagline: [
                    'pre-defined APIs',
                    'explicitly designed for',
                    'scraping',
                ],
                demo: {
                    src: '/projects_thecrawlerman_demo_animation.gif',
                    alt: '',
                },
                status: 'working in progress',
            },
            vidable: {
                href: '/work/vidable-ai',
                logo: {
                    src: '/projects_vidable_logo.svg',
                    alt: 'Vidable Project',
                },
                tagline: ['turns video libraries into', 'dynamic assets'],
                image: {
                    src: '/projects_vidable_look.svg',
                    alt: 'Vidable Project Overview',
                },
                overlays: [
                    {
                        src: '/projects_vidable_overlay_1.svg',
                        alt: 'Attract People',
                    },
                    {
                        src: '/projects_vidable_overlay_2.svg',
                        alt: 'Attract People',
                    },
                ],
            },
        },
        detail: {
            backLabel: 'back',
            labels: {
                type: 'Type',
                role: 'Role',
                status: 'Status',
                timeline: 'Timeline',
                category: 'Category',
                workLinks: 'Work Links',
                description: 'Description',
                tools: 'Tools',
                keyFeatures: 'Key Features',
            },
            present: 'Present',
            galleryProjects: {
                airDeck: 'AirDeck',
                vidable: 'Vidable AI',
                landGenius: 'LandGenius',
            },
        },
    },
};

export default content;
