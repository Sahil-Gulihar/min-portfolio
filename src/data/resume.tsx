import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Activity, ActivityIcon, Briefcase } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Sahil Gulihar",
  initials: "SG",
  url: "https://sahilgulihar.me",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description:
    "I build and break stuff. (Arch btw)",
  summary:
    "I’m an undergraduate student with a deep passion for Linux and open-source contributions. My GitHub is packed with projects that reflect my love for building and experimenting with low-level tools. [I’ve dived into system-level programming and efficient problem-solving](/projects), and I thrive on creating tools that are powerful and scalable.",
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
    { href: "/projects", icon: Briefcase, label: "Home" },

  ],
  contact: {
    email: "sahilgulihar@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sahil-gulihar",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Sahil_gulihar_",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
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
      company: "Trabko pvt Ltd",
      href: "https://trabko.com/home",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer Intern",
      logoUrl: "https://media.licdn.com/dms/image/v2/C560BAQE-MeOc66-lQw/company-logo_200_200/company-logo_200_200/0/1643100222593?e=1737590400&v=beta&t=vyy4tpqA35c2yF0P50sFwuzS9GslE6Vj4CWggVAX19s",
      start: "March 2024",
      end: "June 2024",
      description:
        "Implemented the dynamic response and UI/UX. Along with the integration of the backend API's. Responsive asf design motherfuckers",
    },
    {
      company: "Open Source Stuff",
      badges: [],
      href: "https://miro.medium.com/v2/resize:fit:265/1*n50-k18VJ17ZOMvcoeYydA.png",
      location: "Remote",
      title: "Linux Nerd",
      logoUrl: "https://miro.medium.com/v2/resize:fit:265/1*n50-k18VJ17ZOMvcoeYydA.png",
      start: "October 2023",
      end: "Sept 2024",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Freelancing",
      href: "https://github.com/Sahil-Gulihar",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "data:image/png;base64,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",
      start: "July 2024",
      end: "Present",
      description:
        "Implemented major features for multiple clients and projects. Worked on the frontend and backend of the projects. Tasks varying from landing pages to full-fledged web applications with some complex requests such as Websockets and pubsub severs.",
    },
   
  ],
  education: [
    {
      school: "Kendriya Vidyalaya",
      href: "https://kvsangathan.nic.in/",
      degree: "High School",
      logoUrl: "https://cdnbbsr.s3waas.gov.in/s32d2ca7eedf739ef4c3800713ec482e1a/uploads/2023/04/2023042118.svg",
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
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
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
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
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
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
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
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "NPM",
          icon: <Icons.npm className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        }
      ],
    },
    {
      title: "Algorithmic Arena",
      dates: "September-October 2024",
      location: "Noida, India",
      description:
        "Making a platform for competitive programming and algorithmic challenges with an in house compiler and judge.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
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
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DDOS utility written in Rust",
      dates: "Jult 28th, 2024",
      location: "Arch Linux",
      description:
        "A pingflood DDOS tool which uses multi threading of rust to send packets of data to the target web server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "Imagik",
      dates: "July 3rd - 5th, 2024",
      location: "Amazon s3, Bills",
      description:
        "One stop shop for Image related queries and tools that I find handy (without the use of any paid api or service such as s3 buckets).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
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
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Diagofetch",
      dates: "May 25th - 26th, 2024",
      location: "Earth, Milkyway",
      description:
        "Heard the news of neofetch being deprecated, so I made a new one using bash. Custom images and ascii art as the logo since I couldn't find a good one.. Tested it in Arch only :D",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "MediaSnipper",
      dates: "May 24th, 2024",
      location: "Youtube, Terminal",
      description:
        "Download, trim and convert video in video or audio format with timestamp support. All via a console.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
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
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "GAN Vocoder - Speech Synthesis",
      dates: "March 14th - 17th, 2024",
      location: "IIIT Delhi",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
     
  ],
} as const;
