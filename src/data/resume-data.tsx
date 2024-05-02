import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sushant Sharma",
  initials: "SS",
  location: "Bangalore, IN",
  about: "Full Stack Engineer who loves learning new things",
  summary:
    "As Full Stack Engineer, I work mostly with TypeScript, React, Node.js and dabble around with different technologies occasionally. I have about an year worth of experience in working remotely with companies",
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
      link: "",
      badges: ["Remote"],
      title: "Full-stack developer intern",
      start: "June 2021",
      end: "Jan 2022",
      description: "TODO",
    },
    {
      company: "Iventor initiative pvt. ltd.",
      link: "",
      badges: ["Remote"],
      title: "Front-end Developer intern",
      start: "Jan 2021",
      end: "April 2021",
      description: "TODO",
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "React/Next.js/Remix",
    "Vue",
    "Node.js",
    "Redux",
    "RTK",
    "Go",
    "Elixir",
    "Java",
    "Linux",
    "Vim",
  ],
  projects: [
    {
      title: "Win98-paint",
      techStack: ["Side Project", "TypeScript", "React", "Vite", "RTK"],
      description: "A platform to build and grow your online business",
      link: {
        label: "win98-paint",
        href: "https://win98-paint.vercel.app/",
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
    {
      title: "Portfolio",
      techStack: ["Side Project", "Astro", "Vite"],
      description: "My personal website. Built with Astro",
      link: {
        label: "github.com",
        href: "https://sushij.github.io/portfolio",
      },
    },
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
