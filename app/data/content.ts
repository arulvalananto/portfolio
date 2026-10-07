const content = {
  site: {
    language: "en",
    metadataTitle: "Arul Valan Anto :: Software Engineer",
    meta: {
      themeColor: "white",
      robots: "index, follow",
      author: "Arul Valan Anto S",
      type: "website",
      description:
        "Hey! I am a Software Engineer based in India with {{experienceYears}} of experience. I design and build robust software products and always strive for excellence.",
      keywords:
        "Arul Valan Anto, Portfolio, Software Engineer, React Developer",
      socialTitle: "Arul Valan Anto :: Full Stack Developer",
      url: "https://arulvalananto.dev",
      image: "/portfolio_cover.png",
      imageType: "image/png",
      locale: "en_US",
      twitterHandle: "@arulvalananto_",
      twitterCard: "summary_large_image",
      favicon: "/logo.svg",
    },
  },
  ui: {
    actionBar: {
      navigation: [
        { href: "/", label: "Home" },
        { href: "/work", label: "Work" },
        {
          href: "/about-me",
          label: "About",
        },
      ],
      contact: {
        href: "mailto:arulvalananto@gmail.com",
        label: "Say Hello",
      },
    },
    navbar: {
      resume: {
        href: "https://drive.google.com/file/d/1gtxcEEBqIwGBiAbqNo9-azsztmsqPEXG/view?usp=sharing",
        downloadHref:
          "https://drive.usercontent.google.com/download?id=1gtxcEEBqIwGBiAbqNo9-azsztmsqPEXG&export=download&confirm=t",
        downloadLabel: "Download Resume",
      },
    },
    home: {
      hero: {
        introduction: "Hi, I’m Arul Valan Anto",
        title: "Full Stack Developer - based in India",
        expression: { src: "/home_hero_title_expression.svg", alt: "stars" },
        projectsLabel: "Projects",
        yearsLabel: ["Years of", "Experience"],
      },
    },
  },
  aboutMe: {
    metadataTitle: "Arul Valan Anto :: Profile",
    name: "Arul Valan Anto",
    title: "Full Stack Developer + Tech Blogger",
    bio: {
      whoIAm: {
        heading: "[WHO I AM]",
        description:
          "Hey, I am Arul Valan Anto — Full Stack Developer and tech blogger. I have {{experienceYears}} of experience in coding under my belt. My playground? Crafting sleek and savvy web applications that make users go “Wow!”.",
      },
      whatIDoNow: {
        heading: "[WHAT I DO NOW]",
        introduction: "Today I'm a",
        currentRole: "Senior Software Engineer",
        at: "at",
        currentCompany: {
          title: "Augment Portal",
          href: "https://www.goaugment.io",
          label: "Augment ↗",
        },
        transition: "developing web applications. Previously, I was the",
        previousRole: "Junior Software Developer",
        previousCompany: {
          title: "Coding Space India",
          href: "https://www.linkedin.com/company/codingspaceindia/about/",
          label: "CodingSpaceIndia ↗",
        },
        conclusion: ". I writing technical articles on Medium.",
      },
      whereIAmNow: {
        heading: "[WHERE I'M At Now]",
        introduction: "Currently, I live in",
        location: "Kanyakumari, Tamil Nadu, India",
        conclusion: "with my parents.",
      },
      spareTime: {
        heading: "[WHAT I DO IN MY SPARE TIME]",
        introduction:
          "In my free time, I like playing video games and reading books. One of my favorite books is",
        book: "“The Alchemist.”",
        conclusion:
          "I also enjoy writing technical articles, where I share what I know, on platforms like Medium and Hackernoon.",
      },
      learning: {
        heading: "[WHAT I'M Learning Right Now]",
        value: "Next.js",
      },
      lookingFor: {
        heading: "[WHAT I'M LOOKING FOR]",
        description:
          "Impactful, purposeful work with a diverse team of talented people.",
      },
      showMoreLabel: "More about me",
      showLessLabel: "Less about me",
    },
    skills: {
      heading: "Skills",
      googleSearchUrl: "https://www.google.com/search?q=",
    },
    projects: {
      airdeck: {
        href: "/work/airdeck",
        title: "AirDeck",
        videoSrc: "/projects_airdeck_demo.webm",
        posterSrc: "/projects_airdeck_demo_poster.webp",
      },
      vidable: {
        href: "/work/vidable-ai",
        title: "Vidable",
        image: {
          src: "/home_vidable_project_look.webp",
          alt: "Vidable AI Project",
        },
      },
      landGenius: {
        href: "/work/landgenius",
        title: "LandGenius",
        image: {
          src: "/about_landgenius_project.webp",
          alt: "LandGenius",
        },
      },
    },
    articles: {
      heading: "My Recent Articles",
      href: "https://medium.com/@arulvalananto",
      allLabel: "See All",
    },
    fillerImage: {
      src: "/about_random_player.gif",
      alt: "Hire me GIF",
    },
    socialHeading: "Find me on",
    quote: {
      text: "What you seek is seeking",
      emphasis: "you.",
    },
    location: {
      href: "https://maps.app.goo.gl/77KHe5BfBXmceoqv6",
      title: "location",
      image: {
        src: "/map_location.webp",
        alt: "location",
      },
      label: "Kanyakumari, TN, India",
    },
    callToAction: {
      href: "mailto:arulvalananto@gmail.com",
      title: "mail to",
      prompt: "If you'd like to work with me",
      arrow: "->",
      label: "Say hello",
    },
  },
  work: {
    metadataTitle: "Arul Valan Anto :: Work",
    heading: "My Projects",
    cards: {
      airDeck: {
        href: "/work/airdeck",
        logo: {
          src: "/projects_airdeck_logo.webp",
          alt: "AirDeck Project",
        },
        tagline: "Document Narration Platform",
        demo: {
          src: "/projects_airdeck_demo.webm",
          poster: "/projects_airdeck_demo_poster.webp",
        },
      },
      annals: {
        href: "/work/annals",
        logo: {
          src: "/projects_annals_logo.svg",
          alt: "Highlight Project",
        },
        tagline: "All-in-one personal space",
        image: {
          src: "/projects_annals_look.webp",
          alt: "Highlight Project",
        },
      },
      dressedToKill: {
        href: "/work/dressed-to-kill",
        logo: {
          src: "/projects_dressed_to_kill_logo.svg",
          alt: "Dressed-to-kill project",
        },
        tagline: "Dress. Slay. Repeat.",
        decorations: [
          "/projects_dressedtokill_comma.svg",
          "/projects_dressedtokill_dot.svg",
          "/projects_dressedtokill_semicolon.svg",
          "/projects_dressedtokill_exclamatory.svg",
        ],
      },
      filler: [
        { src: "/projects_attract_people.svg", alt: "Attract People" },
        {
          src: "/projects_brainstorm_ideas.svg",
          alt: "Brainstorm Ideas",
        },
        { src: "/projects_rewards.svg", alt: "Collect Rewards" },
      ],
      frameWise: {
        href: "/work/framewise-ai",
        logo: {
          src: "/projects_framewise_logo.svg",
          alt: "Framewise Project",
        },
        tagline: ["Discover Every Detail", "Frame by Frame"],
        image: {
          src: "/projects_framewise_look.webp",
          alt: "Framewise Project Overview",
        },
      },
      futureReads: {
        href: "/work/future-reads",
        logo: {
          src: "/projects_futurereads_logo.svg",
          alt: "FutureReads Project",
        },
        tagline: ["Read-later app with", "recommendation feature"],
        image: {
          src: "/projects_futurereads_look.webp",
          alt: "FutureReads Project Overview",
        },
      },
      highlight: {
        href: "/work/highlight",
        embed: {
          src: "https://highlightt.web.app/embed/zD2w4KaJrTju1iZhUqPN?p=0&bg=7412D7&f=12&ed=allow-me",
          title: "Highlight: welcome_to_my_portfolio.js",
        },
        logo: {
          src: "/projects_highlight_logo.svg",
          alt: "Highlight Project",
        },
        star: {
          src: "/projects_highlight_star2.svg",
          alt: "Highlight Project",
        },
        tagline: ["Better Code", "Snippets!"],
      },
      landGenius: {
        href: "/work/landgenius",
        logo: {
          src: "/projects_landgenius_logo.svg",
          alt: "LandGenius Project",
        },
        tagline: ["Comprehensive", "environmental analysis"],
        images: [
          {
            src: "/projects_landgenius_look.webp",
            alt: "LandGenius Project",
          },
          {
            src: "/projects_landgenius_look_2.webp",
            alt: "LandGenius Project",
          },
        ],
      },
      scafffolder: {
        href: "/work/scafffolder-cli",
        logo: {
          src: "/projects_scaffolder_logo.svg",
          alt: "Framewise Project",
        },
        tagline: ["Instant", "Scaffold", "CLI"],
        demo: {
          src: "/projects_scaffolder_demo.webm",
          poster: "/projects_scaffolder_demo_poster.webp",
        },
      },
      synthUp: {
        href: "/work/synthup",
        logo: {
          src: "/projects_synthup_logo.svg",
          alt: "SynthUp Project",
        },
        tagline: ["Time-Saving", "Video Summaries"],
      },
      crawlerMan: {
        href: "/work/the-crawler-man",
        logos: [
          {
            src: "/projects_thecrawlerman_logo_animation.gif",
            alt: "The crawlerman logo animation",
          },
          {
            src: "/projects_thecrawlerman_logo.svg",
            alt: "The crawlerman logo text",
          },
        ],
        tagline: ["pre-defined APIs", "explicitly designed for", "scraping"],
        demo: {
          src: "/projects_thecrawlerman_demo_animation.gif",
          alt: "",
        },
        status: "working in progress",
      },
      vidable: {
        href: "/work/vidable-ai",
        logo: {
          src: "/projects_vidable_logo.svg",
          alt: "Vidable Project",
        },
        tagline: ["turns video libraries into", "dynamic assets"],
        image: {
          src: "/projects_vidable_look.svg",
          alt: "Vidable Project Overview",
        },
        overlays: [
          {
            src: "/projects_vidable_overlay_1.svg",
            alt: "Attract People",
          },
          {
            src: "/projects_vidable_overlay_2.svg",
            alt: "Attract People",
          },
        ],
      },
    },
    detail: {
      backLabel: "back",
      labels: {
        type: "Type",
        role: "Role",
        status: "Status",
        timeline: "Timeline",
        category: "Category",
        workLinks: "Work Links",
        description: "Description",
        achievements: "Achievements",
        tools: "Tools",
        keyFeatures: "Key Features",
      },
      present: "Present",
      galleryProjects: {
        airDeck: "AirDeck",
        vidable: "Vidable AI",
        landGenius: "LandGenius",
      },
    },
  },
};

export default content;
