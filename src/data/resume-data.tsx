import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sushant Sharma",
  initials: "SS",
  location: "Bangalore, IN",
  about: "Software Engineer | Full-stack web developer",
  summary:
    " A full-stack developer fueled by curiosity and a passion for creating innovative solutions. I constantly seek new challenges and opportunities to expand my skill set. Whether exploring the latest technologies or gathering knowledge on different paradigms of software engineering, I thrive on the thrill of discovery and the satisfaction of transforming ideas into reality.",
  avatarUrl: "https://avatars.githubusercontent.com/u/74211783?v=4",
  personalWebsiteUrl: "https://sushij.github.io/portfolio/",
  contact: {
    email: "sushant.wurk@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sushij",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sushantsharma23/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/sushidotgg",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "JECRC University, Jaipur, RJ",
      degree: "Bachelor of technology Computer Science",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "ShapeAI",
      badges: ["Remote"],
      title: "Full-stack developer intern",
      start: "July 2021",
      end: "Jan 2022",
      description: [
        "Developed full-stack React applications, adhering to industry best practices for high-quality code, utilizing libraries such as Mongoose, TypeScript, React, and Redux. ",
        "Acquired hands-on experience with a range of technologies and frameworks, including Express.js, Docker, and TypeScript.",
        "Designed, implemented, and debugged application programs, from simple to highly complex. Enhanced expertise in backend JavaScript frameworks like Node.js and databases such as MongoDB and PostgreSQL.",
      ],
    },
    {
      company: "Iventor initiative pvt. ltd.",
      badges: ["Remote"],
      title: "Front-end Developer intern",
      start: "Jan 2021",
      end: "April 2021",
      description: [
        "Successfully migrated an existing codebase from HTML to React.js for an e-learning platform, leveraging React.js and reusable components. ",
        "Designed and implemented solutions for various platforms, including: 1. A mental health platform where people can book appointments regarding their issues / problems. 2. A platform for people to find mentors for their respective fields.",
        "Collaborated with the product team to develop new features and recommended technology integrations aligned with business goals.",
        "Mentored and guided a team of three frontend developer interns, fostering their professional and personal growth.",
      ],
    },
  ],
  skills: [
    "TypeScript/JavaScript",
    "React/Next.js/Remix/vue/Node",
    "Redux/RTK",
    "Go/Java",
    "Elixir",
    "Docker/AWS",
    "Linux/Vim/Neovim",
    "Python/Django/flask",
    "SQL/Mongo, Typegoose",
  ],
  projects: [
    {
      title: "Riot.ml",
      techStack: ["Open-source"],
      description:
        "Riot.ml is an Ocaml library that implements BEAM into the Ocaml workflow",
      link: {
        label: "Riot.ml",
        href: "https://riot.ml",
      },
    },
    {
      title: "Polybar-weather-module",
      techStack: ["Open-source", "Python", "Open weather api"],
      description:
        "Polybar-weather-module, a addon for polybar that shows you temp, humidty and etc. at your location.",
      link: {
        label: "Polybar",
        href: "https://github.com/SushiJ/polybar-weather-module",
      },
    },
    {
      title: "Win98-paint",
      techStack: ["Side Project", "TypeScript", "React", "Vite", "RTK"],
      description:
        "A drawing application that let's you download your beautiful art pieces",
      link: {
        label: "win98-paint",
        href: "https://win98-paint.vercel.app/",
      },
    },
    {
      title: "Portfolio",
      techStack: ["Side Project", "Astro", "Vite", "Tailwind"],
      description: "My personal website. Built with Astro",
      link: {
        label: "github.com",
        href: "https://sushij.github.io/portfolio",
      },
    },
    {
      title: "Conway's game of life",
      techStack: ["React", "Pico"],
      description: "Conway's game of life on react",
      link: {
        label: "React conway",
        href: "https://react-conway.vercel.app",
      },
    },
    {
      title: "Identiek",
      techStack: ["Open-source", "Elixir", "egd"],
      description: "Identiek is an identicon generator written in Elixir",
      link: {
        label: "Identiek",
        href: "https://github.com/SushiJ/identiek",
      },
    },
    {
      title: "hop music",
      techStack: ["Side Project", "React", "Typescript", "Vanilla Extract"],
      description: "Web based music player",
      link: {
        label: "music",
        href: "https://hop-music.vercel.app",
      },
    },
    {
      title: "Work journal",
      techStack: [
        "Side Project",
        "Remix",
        "Prisma",
        "Typescript",
        "Supabase",
        "Tailwind",
      ],
      description: "An online work documenting application built with remix",
      link: {
        label: "Work journal",
        href: "https://work-journal-remix.vercel.app",
      },
    },
    {
      title: "Ecommerce store",
      techStack: [
        "Side Project",
        "React",
        "Typescript",
        "RTK",
        "Fastify",
        "Mongo",
        "Typegoose",
        "Bootstrap",
        "Vite",
        "Paypal",
      ],
      description:
        "Ecommerce store build with react & fastify, integrates paypal for payments",
      link: {
        label: "github.com",
        href: "https://github.com/SushiJ/ecom",
      },
    },
    {
      title: "Dashboard",
      techStack: [
        "React",
        "Typescript",
        "MUI",
        "Nivo",
        "RTK",
        "Express",
        "Mongo",
        "Typegoose",
      ],
      description:
        "Dashboard, a data visualizer application. Charts and data tables using MUI & Nivo-charts",
      link: {
        label: "github.com",
        href: "https://github.com/SushiJ/react-dash",
      },
    },
    {
      title: "Screen-grab",
      techStack: ["EJS", "Express", "Puppeteer"],
      description: "Screen-grab, a web screenshot taking application",
      link: {
        label: "hackervues",
        href: "https://github.com/SushiJ/Web-Screenshot",
      },
    },
    {
      title: "Celestial explorer",
      techStack: [
        "Side Project",
        "Preact",
        "TypeScript",
        "Mongo",
        "Typegoose",
        "Express",
        "Vite",
      ],
      description:
        "A web app to track/manage space launches. Stay updated on past private & SpaceX launches, and cancel launches with a click.",
      link: {
        label: "CE",
        href: "https://github.com/SushiJ/space-launches-fs",
      },
    },
    {
      title: "Hackervues",
      techStack: ["Vue", "Tailwind"],
      description: "Hackernews web client built with vue",
      link: {
        label: "hackervues",
        href: "https://hackervues.netlify.app/",
      },
    },
    {
      title: "Vue notes",
      techStack: ["Vue", "Go", "Tailwind"],
      description: "Vue notes, a note taking app built with vue & go.",
      link: {
        label: "Vue notes",
        href: "https://github.com/SushiJ/vue-notes",
      },
    },
    {
      title: "Pokedex",
      techStack: ["Svelte", "Tailwind"],
      description: "Pokedex, a web client for pokemon-api built with svelte",
      link: {
        label: "Pokedex",
        href: "https://svelte-pokedex-chi.vercel.app/",
      },
    },
    {
      title: "Snippets",
      techStack: ["Side Project", "Go", "Templ", "WIP"],
      description:
        "Snippets, a go web application that let's you share snippets of what so ever you wanna share with the world",
      link: {
        label: "TODO",
        href: "https://github.com/SushiJ/snippet-go",
      },
    },
    {
      title: "Zomato clone",
      techStack: ["React", "Express", "Mongo", "Tailwind"],
      description: "Zomato clone application built with react & express",
      link: {
        label: "Zomato",
        href: "https://github.com/SushiJ/Zomato",
      },
    },
    {
      title: "Bookmyshow clone",
      techStack: ["React", "Tailwind"],
      description: "Bookmyshow clone application built with react",
      link: {
        label: "Bookmyshow",
        href: "https://book-my-show-clone-nu.vercel.app/",
      },
    },
    {
      title: "Airbnb clone",
      techStack: ["Next", "Tailwind"],
      description: "Airbnb clone application built with react",
      link: {
        label: "TODO",
        href: "https://airbnb-c.vercel.app/",
      },
    },
    {
      title: "Hulu clone",
      techStack: ["React", "Tailwind"],
      description: "Hulu clone application built with react",
      link: {
        label: "Hulu",
        href: "https://hulu-build-sepia.vercel.app",
      },
    },
    // {
    //   title: "Monito",
    //   techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
    //   description:
    //     "Browser extension that records everything happening in a web application",
    //   logo: MonitoLogo,
    //   link: {
    //     label: "monito.dev",
    //     href: "https://monito.dev/",
    //   },
    // },
    // {
    //   title: "Minimal",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Minimalist calendars, habit trackers and planners generator",
    //   logo: Minimal,
    //   link: {
    //     label: "useminimal.com",
    //     href: "https://useminimal.com/",
    //   },
    // },
    // {
    //   title: "Barepapers",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Generates beautiful wallpapers using random shapes and gradients",
    //   logo: BarepapersLogo,
    //   link: {
    //     label: "barepapers.com",
    //     href: "https://barepapers.com/",
    //   },
    // },
    // {
    //   title: "Year progress",
    //   techStack: ["Side Project", "TypeScript", "Next.js"],
    //   description: "Tracks current year progress and displays a countdown",
    //   logo: YearProgressLogo,
    //   link: {
    //     label: "getyearprogress.com",
    //     href: "https://getyearprogress.com/",
    //   },
    // },
    // {
    //   title: "Parabol",
    //   techStack: [
    //     "Full Stack Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "The Agile meeting co-pilot that delivers better meetings with less effort",
    //   logo: ParabolLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://parabol.co/",
    //   },
    // },
    // {
    //   title: "Evercast",
    //   techStack: [
    //     "Lead Frontend Developer",
    //
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "Creative collaboration platform that combines video conferencing and HD media streaming",
    //   logo: EvercastLogo,
    //   link: {
    //     label: "evercast.us",
    //     href: "https://www.evercast.us/",
    //   },
    // },
    // {
    //   title: "Mobile Vikings",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for leading virtual mobile operator in Poland",
    //   logo: MobileVikingsLogo,
    //   link: {
    //     label: "mobilevikings.pl",
    //     href: "https://mobilevikings.pl/",
    //   },
    // },
    // {
    //   title: "Howdy",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Howdy is a place for you to join communities you care about",
    //   logo: Howdy,
    //   link: {
    //     label: "play.google.com",
    //     href: "https://howdy.co/",
    //   },
    // },
    // {
    //   title: "Tastycloud",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for managing and displaying restaurant menus in kiosk mode",
    //   logo: TastyCloudLogo,
    //   link: {
    //     label: "tastycloud.fr",
    //     href: "https://www.tastycloud.fr/",
    //   },
    // },
    // {
    //   title: "Ambit",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with sharing your contact details",
    //   logo: AmbitLogo,
    // },
    // {
    //   title: "Bim",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with booking a table in a restaurants",
    //   logo: BimLogo,
    // },
    // {
    //   title: "Canal Digital GO",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Video streaming mobile application for Canal Digital subscribers",
    //   logo: CDGOLogo,
    // },
  ],
} as const;
