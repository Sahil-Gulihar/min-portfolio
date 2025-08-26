import { Icons } from "@/components/icons";
import { HomeIcon, Folder, MessageCircle } from "lucide-react";

export const DATA = {
  name: "Sahil Gulihar",
  initials: "SG",
  url: "https://sahilgulihar.com",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description: "I build and break stuff. (Arch btw)",
  summary:
    "A Founding Engineer at Navdyut AI, I specialize in developing utility-focused projects, strategically combining open and closed source code. My expertise extends to the Linux environment, where I'm a strong advocate for terminal-centric development.",
  avatarUrl: "https://avatars.githubusercontent.com/u/112870288?v=4",

  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Prisma",
    "Bash",
    "C++",
    "Express",
    "TailwindCSS",
    "MongoDB",
    "MySQL",
    "GNU/Linux",
    "Redis",
    "Rust",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: Folder, label: "Projects" },
    {
      href: "https://chat.sahilgulihar.me",
      icon: MessageCircle,
      label: "Chat",
    },
  ],
  contact: {
    email: "sahilgulihar@gmail.com",
    tel: "+919899051826",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sahil-gulihar",
        icon: Icons.github,

        navbar: true,
      },

      X: {
        name: "X",
        url: "https://x.com/Sahil_gulihar_",
        icon: Icons.x,

        navbar: true,
      },
      Contact: {
        name: "Contact",
        url: "/contact",
        icon: Icons.Contact,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Navdyut AI",
      badges: [],
      href: "https://navdyut.ai",
      location: "Remote",
      title: "Founding Engineer",
      logoUrl: "https://i.imgur.com/dTSedJ9.png",
      start: "February 2025",
      end: "Present",
      description:
        "Working at Navdyut as a founding engineer. Building the MVP and the core features of multiple products with Research and Development. Currently working on a centralised AI finetuning platform.",
    },
    {
      company: "Innfraone Pvt Ltd",
      badges: [],
      href: "https://innfraone.com",
      location: "Remote",
      title: "Founding Engineer",
      logoUrl:
        "https://innfraone.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Funnamed.1e7eb4cc.png&w=96&q=75",
      start: "December 2024",
      end: "February 2025",
      description:
        "Launched a civil tech MVP that digitized government financial reports, preventing scams through integration with official portals.",
    },

    {
      company: "100xDevs",
      href: "https://100xdevs.com",
      badges: [],
      location: "Remote",
      title: "Community growth intern",
      logoUrl:
        "https://yt3.googleusercontent.com/COevS00sZDbVXOwMeI4JspPSfvjQTxsnC1LSTSsfI15N0P2ziQph2j4j4tNIb38BTmvPR5oB=s900-c-k-c0x00ffffff-no-rj",
      start: "July 2024",
      end: "December 2024",
      description:
        "Drove exponential community growth, mentoring 10,000+ aspiring developers in programming fundamentals. Facilitated high-impact events, resolved conflicts, and fostered a collaborative culture to maximize engagement and learning outcomes.",
    },
    {
      company: "Trabko pvt Ltd",
      href: "https://trabko.com/home",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer Intern",
      logoUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABtUlEQVR4Ae2XgYYCURiF90FGFAioF0gq9Q6hKkBAAegdAhCgIEpKBfQKUQB6gaCmJIrQWR+GdlIz27Zd2T381Nzzn/9j5s64H0iSJaktaanfFzOYZV0Ot/V62QJC0JhTG4ClzGn5IZdqtZoCgYAsy3pqkUm2W1cAGMvlsprNpmelUinKj5dMsr0BoKXBj/L5vCgfIpPsNwWwbVu9Xk/n89kLAA9eep4DsF6vlUwmxfVKpcKAmwCsVatV4aVntVr9DIAAgqLRqOr1Og+RA+EGcIbjwUuPA/E4gBO0WCyEut2uGDCbza4A5vO5WOt0OkL0OOAPAxyPRx0OB11qs9ncvAXu+77f73U6nb4H8L8Nw+EwbzeCPSsSiVC+vGSS7QkwHo9VLBaVy+XkVCaTEfTZbJb/dwsP3nQ6/eV6oVDQaDTyALihwWAgQne7nbyEB2+/35eH3hhgu926X8usvQ4gFoupVCqJPU7xO5FIvA5gMpkoFAqJwVQwGOTaywAuIZzhZh7C6XRK/bldYABgOByK0EajoVarda/w4KXneQB8ZuPxOMG+Ci89fmT+YGL+aGb6cGr6eP4JTFPrtduBtpgAAAAASUVORK5CYII=",
      start: "March 2024",
      end: "June 2024",
      description:
        "Implemented the dynamic response and UI/UX. Along with the integration of the backend API's. Responsive asf design motherfuckers",
    },
  ],
  education: [
    {
      school: "Kendriya Vidyalaya",
      href: "https://kvsangathan.nic.in/",
      degree: "High School",
      logoUrl:
        "https://cdnbbsr.s3waas.gov.in/s32d2ca7eedf739ef4c3800713ec482e1a/uploads/2023/04/2023042118.svg",
      start: "2010",
      end: "2022",
    },
    {
      school: "Gurugram University",
      href: "https://gurugramuniversity.ac.in/",
      degree: "Btech in Computer Science",
      logoUrl: "https://gurugramuniversity.ac.in/img/logo.jpg",
      start: "2022",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Virtual Background",
      href: "https://github.com/Sahil-Gulihar/virtual-background",
      dates: "Aug 3rd, 2025",
      active: true,
      description: `A virtual background application built with Python, Mediapipe, OpenCV, and Numpy. Using different masking techniques for smooth cuts, etc`,
      technologies: ["cvzone", "Mediapipe", "OpenCv", "Numpy"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Sahil-Gulihar/virtual-background",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://ik.imagekit.io/40q2r1dkl/WclYAzoFvGr7lA19.mp4?updatedAt=1756227879390",
    },
    {
      title: "Reactions - Mac Reactions ",
      href: "https://github.com/sahil-gulihar/reactions-py",
      dates: "July 30th, 2025",
      active: true,
      description: `A standalone application which brings the reactions from macOS to any desktop. It uses openCv and mediapipe to mask different animations for different reactions`,
      technologies: ["Python", "Mediapipe", "OpenCv", "Numpy"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Sahil-Gulihar/reactions-py",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://ik.imagekit.io/40q2r1dkl/Reactions.mov/ik-video.mp4?updatedAt=1753960795023",
    },
    {
      title: "ANC - Active Noise cancellation",
      href: "https://anc.sahilgulihar.com/",
      dates: "July 27th, 2025",
      active: true,
      description: `An attempt at learning technology behind active noise cancellation and how it works. It used freqeuncy phase inversion to cancel out the noise.`,
      technologies: ["Python", "Flask", "Librosa", "Matplotlib", "Railway"],
      links: [
        {
          type: "Website",
          href: "https://anc.sahilgulihar.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sahil-Gulihar/anc",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://ik.imagekit.io/40q2r1dkl/anc.mp4?updatedAt=1753960243303",
    },
    {
      title: "AI Browser",
      href: "https://github.com/Sahil-Gulihar/ai-browser",
      dates: "April 17th, 2025",
      active: false,
      description: `A browser which is controlled completely by AI. Zero human intervention. It was later found out that BrowserBase ($300 million valuation) built something similar after a few months`,
      technologies: ["Node.js", "Gemini", "Puppeteer"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Sahil-Gulihar/ai-browser",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://ik.imagekit.io/40q2r1dkl/ai-browser.mp4?updatedAt=1751962500300",
    },
    {
      title: "Serpent's tongue",
      href: "https://chat.sahilgulihar.me/",
      dates: "March 14th, 2025",
      active: true,
      description: `An uncensored AI which is achieved by jailbreaking the Gemini API. This project shows the capabilities of AI if &quot; restrictions &quot; are removed.`,
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Prisma",
        "PostgreSQL",
        "Gemini API",
      ],
      links: [
        {
          type: "Website",
          href: "https://chat.sahilgulihar.me/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://ik.imagekit.io/40q2r1dkl/Google%20Chrome%202025-07-08%2012:06:23.mp4?updatedAt=1751957776040",
    },

    {
      title: "Terminal Graph",
      href: "https://github.com/Sahil-Gulihar/terminal-graph",
      dates: "Feb 12th, 2025",
      active: true,
      description:
        "A terminal-based tool to fetch and display your GitHub contribution graph directly in the CLI. Get your github graph with the ease of terminal.",
      technologies: ["Bash", "CLI", "Fuck around", "&", "Findout"],
      links: [
        {
          type: "Source",
          href: "https://github.com/sahil-gulihar/terminal-graph",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://i.imgur.com/gXUsIhG.mp4",
    },

    {
      title: "Git a life",
      href: "https://git.sahilgulihar.me/ ",
      dates: "November 2nd, 2024",
      active: true,
      description:
        "A tool to expose the .env's you may or may not have exposed in your github. Also get roasted for your skill issues!",
      technologies: [
        "Nextjs",
        "Tailwind",
        "Typescript",
        "Github",
        "Gemini",
        "API",
        "",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sahil-gulihar/git-a-life",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://git-a-life.theshiva.xyz/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://i.imgur.com/A3jyltZ.mp4",
    },

    {
      title: "WebRTC Screensharing",
      href: "https://screenshare.sahilgulihar.me/",
      dates: "Aug 25th, 2024",
      active: true,
      description:
        "Implemented screensharing with the use of WebRTC, websockets with Cross Browser support like firefox and google chrome. Server deployed on render hence a cold start expected at start",
      technologies: [
        "Webrtc",
        "Javascript",
        "HTML",
        "CSS",
        "Websockets",
        "Vercel",
        "Node.js",
        "Render",
      ],
      links: [
        {
          type: "Website",
          href: "https://screenshare.sahilgulihar.me/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sahil-Gulihar/another-one/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://i.imgur.com/tQ7k7pl.mp4",
    },

    {
      title: "Floodrust",
      href: "https://github.com/sahil-Gulihar/floodrust",
      dates: "July 28th, 2024",
      active: true,
      description:
        "A DDos utility written in Rust which uses IPv6 to flood the url with packets. Also uses the multithreading feature of Rust to send multiple packets at once.",
      technologies: [
        "Rust",
        "Bash",
        "Concurrency",
        "Ping",
        "NFS",
        "Linux",
        "CLI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sahil-gulihar/floodrust",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://i.imgur.com/w5su9rT.mp4",
    },
    {
      title: "Imagik",
      href: "https://imagik.sahilgulihar.me/",
      dates: "July 5th, 2024",
      active: true,
      description:
        "One stop shop for Image related queries and tools that I find handy (without the use of any paid api or service such as s3 buckets).",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://imagik.sahilgulihar.me/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sahil-gulihar/imagik",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://i.imgur.com/A4MwkJB.mp4",
    },
    {
      title: "npKill",
      href: "https://github.com/sahil-Gulihar/npkill",
      dates: "May 9th, 2024",
      active: true,
      description:
        "A simple cli tool to delete all node_modules directories in your project. It's fast, it's simple, it's npkill.",
      technologies: [
        "Bash",
        "Javascript",
        "node_modules",
        "CLI",
        "Node.js",
        "Gawk",
        "File system Operations",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sahil-gulihar/npkill",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://i.imgur.com/1iQ2fU2.mp4",
    },

    {
      title: "MediaSnip",
      href: "https://github.com/sahil-Gulihar/MediaSnip",
      dates: "May 3rd, 2024",
      active: true,
      description:
        "A simple cli tool written in Golang to download, trim and convert video in video or audio format with timestamp support. All via a console.",
      technologies: [
        "Golang",
        "Bash",
        "ffmpeg",
        "yt-dlp",
        "File system",
        "Linux",
        "CLI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sahil-gulihar/MediaSnip",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://i.imgur.com/SghnroK.mp4",
    },
    {
      title: "Speech to text",
      href: "https://speech2text.sahilgulihar.me/",
      dates: "April 28th, 2024",
      active: true,
      description:
        "One day project to convert speech to text using the Deepgram SDK.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://speech2text.sahilgulihar.me/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sahil-gulihar/Speech2Text",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://i.imgur.com/5ZQCTMV.mp4",
    },
  ],
  latestProjects: [
    {
      title: "Reactions - Mac Reactions ",
      href: "https://github.com/sahil-gulihar/reactions-py",
      dates: "July 30th, 2025",
      active: true,
      description: `A standalone application which brings the reactions from macOS to any desktop. It uses openCv and mediapipe to mask different animations for different reactions`,
      technologies: ["Python", "Mediapipe", "OpenCv", "Numpy"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Sahil-Gulihar/reactions-py",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://ik.imagekit.io/40q2r1dkl/Reactions.mov/ik-video.mp4?updatedAt=1753960795023",
    },
    {
      title: "ANC - Active Noise cancellation",
      href: "https://anc.sahilgulihar.com/",
      dates: "July 27th, 2025",
      active: true,
      description: `An attempt at learning technology behind active noise cancellation and how it works. It used freqeuncy phase inversion to cancel out the noise.`,
      technologies: ["Python", "Flask", "Librosa", "Matplotlib", "Railway"],
      links: [
        {
          type: "Website",
          href: "https://anc.sahilgulihar.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sahil-Gulihar/anc",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://ik.imagekit.io/40q2r1dkl/anc.mp4?updatedAt=1753960243303",
    },
    {
      title: "AI Browser",
      href: "https://github.com/Sahil-Gulihar/ai-browser",
      dates: "April 17th, 2025",
      active: false,
      description: `A browser which is controlled completely by AI. Zero human intervention. It was later found out that BrowserBase ($300 million valuation) built something similar after a few months`,
      technologies: ["Node.js", "Gemini", "Puppeteer"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Sahil-Gulihar/ai-browser",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://ik.imagekit.io/40q2r1dkl/ai-browser.mp4?updatedAt=1751962500300",
    },
    {
      title: "Serpent's tongue",
      href: "https://chat.sahilgulihar.me/",
      dates: "March 14th, 2025",
      active: true,
      description: `An uncensored AI which is achieved by jailbreaking the Gemini API. This project shows the capabilities of AI if &quot; restrictions &quot; are removed.`,
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Prisma",
        "PostgreSQL",
        "Gemini API",
      ],
      links: [
        {
          type: "Website",
          href: "https://chat.sahilgulihar.me/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://ik.imagekit.io/40q2r1dkl/Google%20Chrome%202025-07-08%2012:06:23.mp4?updatedAt=1751957776040",
    },
  ],

  milestones: [
    {
      title: "Image Upscale",
      dates: "October 3rd, 2024",
      location: "NPX package",
      description:
        "Developed a cli tool to upscale images and enhance text content for better clarity and image quality.",
      image:
        "https://media.licdn.com/dms/image/v2/C4D0BAQEnTvXKaf45Yw/company-logo_200_200/company-logo_200_200/0/1630493189732/upscale_project_logo?e=2147483647&v=beta&t=d3pDpQUroNnbi5EzhX5e_oWQACMOq8fPRlXoApQVPuE",
      links: [
        {
          title: "NPM",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.npmjs.com/package/upscale",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://www.github.com/sahil-gulihar/npx-upscale",
        },
      ],
    },
    {
      title: "Algorithmic Arena",
      dates: "September-October 2024",
      location: "Noida, India",
      description:
        "Making a platform for competitive programming and algorithmic challenges with an in house compiler and judge.",
      image: "https://i.imgur.com/tK5Rmd5.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "WebRTC Screen Share",
      dates: "August 25th, 2024",
      location: "Remote, Freelance",
      description:
        "Developed a cross browser screen sharing application using WebRTC and websockets.",
      icon: "public",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-screen-sharing-icon-download-in-svg-png-gif-file-formats--computer-monitor-work-from-home-pack-miscellaneous-icons-2136206.png",
      links: [],
    },
    {
      title: "DDOS utility written in Rust",
      dates: "Jult 28th, 2024",
      location: "Arch Linux",
      description:
        "A pingflood DDOS tool which uses multi threading of rust to send packets of data to the target web server.",
      image:
        "https://cionews.co.in/wp-content/uploads/2024/08/Article-Main-Image-42.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sahil-gulihar/floodrust",
        },
      ],
    },
    {
      title: "Imagik",
      dates: "July 3rd - 5th, 2024",
      location: "Amazon s3, Bills",
      description:
        "One stop shop for Image related queries and tools that I find handy (without the use of any paid api or service such as s3 buckets).",
      image: "https://i.imgur.com/XWT1XSI.png",

      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://imagik.sahilgulihar.me/",
        },

        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sahil-gulihar/imagik",
        },
      ],
    },
    {
      title: "npkill",
      dates: "May 9th, 2024",
      location: "Terminal, Linux",
      description:
        "Was tired of running rm -rf node_modules, so I made a cli tool to do it for me. Nested directories and all.",
      image:
        "https://camo.githubusercontent.com/0ce867917cbb4d87067b118cb0e6754f133388dbc51d72b4e6b490851a094e8a/68747470733a2f2f6e706b696c6c2e6a732e6f72672f696d672f6e706b696c6c2d73636f70652d6d6f6e6f2e737667",
      links: [],
    },
    {
      title: "Diagofetch",
      dates: "May 25th - 26th, 2024",
      location: "Earth, Milkyway",
      description:
        "Heard the news of neofetch being deprecated, so I made a new one using bash. Custom images and ascii art as the logo since I couldn't find a good one.. Tested it in Arch only :D",
      image: "https://i.imgur.com/Mmxy0Dt.png",

      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sahil-gulihar/diagofetch",
        },
      ],
    },
    {
      title: "MediaSnip",
      dates: "May 24th, 2024",
      location: "Youtube, Terminal",
      description:
        "Download, trim and convert video in video or audio format with timestamp support. All via a console.",
      image: "https://i.imgur.com/lchM1j3.png",

      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sahil-gulihar/MediaSnip",
        },
      ],
    },
    {
      title: "Speech to text",
      dates: "April 28th, 2024",
      location: "Firefox, Chrome",
      description:
        "Realtime speech to text conversion through web using the Deepgram SDK.",
      image:
        "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/db7b24ca-02e4-4479-b992-7d3590fac768.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://speech2text.sahilgulihar.me/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sahil-gulihar/speech2text",
        },
      ],
    },
    {
      title: "GAN Vocoder - Speech Synthesis",
      dates: "March 14th - 17th, 2024",
      location: "IIIT Delhi",
      description:
        "Developed a [GAN]-based vocoder for real-time speech-to-text (S2T) using Whisper and Bark models. The system provides efficient S2T conversion by leveraging generative adversarial networks for high-quality audio processing, enabling real-time transcription and audio manipulation.",
      image:
        "https://static.vecteezy.com/system/resources/previews/002/468/372/non_2x/language-translation-icon-concept-with-speech-bubble-free-vector.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Sahil-Gulihar/GAN_vocoder",
        },
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://learnius.com/slp/9+Speech+Synthesis/2+Advanced+Topics/2+Waveform+Generation/GAN-based+vocoders",
        },
      ],
    },
    {
      title: "Arch Linux - The place where it all started",
      dates: "October 10th- Present, 2023",
      location: "Kernel",
      description:
        "Started using Arch linux in my first year of college . Bare metal arch Install with no install script   ",
      image:
        "data:image/png;base64,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",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://wiki.archlinux.org/title/Installation_guide",
        },
      ],
    },
  ],
} as const;
