import type { ElementType } from "react";
import {Turntable,SquareTerminal,FileArchive,SquarePlayIcon,Monitor,} from "lucide-react";


export type ChallengeMap = Record<string, string[]>;

export type ProjectDetailprops = {
  slug: string;
  icons: ElementType;
  title: string;
  description: string;
  tech: string[];
  iconColor: string;
  features: string[];
  challenges: ChallengeMap;
  demoLink: string;
  sourceCode: string;
  deployment: string;
  lastUpdated: string;
  status: string;
};

export type ProjectCardprops = {
  icons: ElementType;
  iconColor: string;
  title: string;
  description: string;
  tech: string[];
  slug: string;
};

export const projects: ProjectDetailprops[] = [
  {
    slug: "chat",
    icons: Turntable,
    title: "Real-Time Chat App (MERN Stack)",
    description:
      "Secure real-time messaging platform with live presence, media sharing, and persistent conversations.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Zustand",
      "JWT",
      "Cloudinary",
    ],
    iconColor: "text-sky-500",
    features: [
      "Built real-time one-to-one messaging using Socket.io and WebSockets with instant message delivery",
      "Implemented JWT authentication with HTTP-only cookies and bcryptjs password hashing for secure user authentication",
      "Added live online/offline user presence, persistent chat history, and global state management using Zustand",
      "Integrated Cloudinary for image uploads and MongoDB-backed REST APIs for storing users and conversations",
    ],
    challenges: {
      "Real-Time Communication": [
        "Managed Socket.io connections, room-based messaging, and instant synchronization between connected clients while maintaining low latency.",
      ],
      "Authentication & Security": [
        "Secured REST APIs using JWT authentication, HTTP-only cookies, password hashing with bcryptjs, and protected middleware for authenticated routes.",
      ],
      "State Management": [
        "Organized global authentication and chat state using Zustand to keep messages, selected chats, and user presence synchronized across the application.",
      ],
    },
    demoLink: "Local Only",
    sourceCode: "https://github.com/Abhishek3917/chat",
    deployment: "GitHub",
    lastUpdated: "Jul 30, 2026",
    status: "Active",
  },

  {
    slug: "arch-installer",
    icons: SquareTerminal,
    title: "Arch Linux Automated Installation Framework",
    description:
      "A modular automation framework for deploying fully configured Arch Linux systems with interactive and unattended installation modes.",
    tech: ["Bash", "Linux", "System Automation", "Git"],
    iconColor: "text-amber-500",
    features: [
      "Developed a modular installation framework to automate Arch Linux deployment on fresh systems",
      "Automated disk partitioning, package installation, bootloader configuration, networking, and user environment provisioning",
      "Implemented both interactive and unattended installation modes to support beginners and advanced users",
      "Added comprehensive logging, error handling, and configurable installation options to improve reliability and troubleshooting",
    ],
    challenges: {
      "Installation Automation": [
        "Designed the installer to automate multiple installation stages while allowing customization without sacrificing flexibility.",
      ],
      Reliability: [
        "Implemented validation, logging, and robust error handling to recover gracefully from installation failures and simplify debugging.",
      ],
      "Modular Architecture": [
        "Organized the project into reusable scripts and configurable modules, making it easier to maintain, extend, and support different installation scenarios.",
      ],
    },
    demoLink: "CLI Application",
    sourceCode: "https://github.com/Abhishek3917/arch_linux_installation",
    deployment: "GitHub",
    lastUpdated: "Jul 30, 2026",
    status: "Active",
  },

  {
    slug: "zipdf",
    icons: FileArchive,
    title: "ZIPDF – Online PDF Processing Platform",
    description:
      "A privacy-focused browser PDF toolkit that processes documents locally without uploading files to a server.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    iconColor: "text-rose-500",
    features: [
      "Built a responsive React and TypeScript application with reusable, component-based UI architecture",
      "Implemented client-side PDF processing so files remain in the user's browser without server-side uploads",
      "Designed intuitive drag-and-drop file workflows with responsive layouts for desktop and mobile devices",
      "Structured the project using a scalable architecture to simplify maintenance and future feature additions",
    ],
    challenges: {
      "Client-Side Processing": [
        "Handled PDF operations entirely in the browser while maintaining responsiveness and minimizing memory usage for large documents.",
      ],
      Performance: [
        "Optimized rendering and user interactions to provide a smooth experience during file selection and processing.",
      ],
      "Frontend Architecture": [
        "Built reusable TypeScript components and organized the codebase for scalability, maintainability, and future expansion.",
      ],
    },
    demoLink: "Local Only",
    sourceCode: "https://github.com/Abhishek3917/ZiPDF",
    deployment: "GitHub",
    lastUpdated: "Jul 30, 2026",
    status: "Archived",
  },

  {
    slug: "zxstream",
    icons: SquarePlayIcon,
    title: "ZXstream",
    description:
      "A lightweight self-hosted media streaming application using efficient HTTP range-based video delivery.",
    tech: ["React", "Node.js", "Express.js", "Linux"],
    iconColor: "text-violet-500",
    features: [
      "Built a React frontend with a custom video player for streaming locally hosted media",
      "Developed Express REST APIs to discover available videos and stream content using HTTP range requests",
      "Implemented streaming with fs.createReadStream to efficiently serve large video files without loading them entirely into memory",
      "Deployed and tested the application on a Linux server for self-hosted media streaming",
    ],
    challenges: {
      "Video Streaming": [
        "Implemented HTTP range request handling to support seeking and smooth playback while minimizing server memory usage.",
      ],
      "Frontend Integration": [
        "Integrated the React video player with the Express streaming API and handled playback behavior across different browsers.",
      ],
      Deployment: [
        "Configured and tested the application on a Linux environment while troubleshooting networking and media delivery issues.",
      ],
    },
    demoLink: "Local Only",
    sourceCode: "https://github.com/Abhishek3917/zxstream",
    deployment: "GitHub",
    lastUpdated: "Jun 22, 2026",
    status: "Active",
  },

  {
    slug: "bspwm-dotfiles",
    icons: Monitor,
    title: "bspwm Desktop Environment Configuration",
    description:
      "A customized Arch Linux desktop environment with automated setup scripts and productivity-focused workflows.",
    tech: ["Bash", "Linux", "bspwm", "sxhkd", "Polybar", "Git"],
    iconColor: "text-emerald-500",
    features: [
      "Developed and maintained a modular bspwm desktop configuration with organized, version-controlled dotfiles",
      "Automated installation of desktop components, themes, fonts, and required dependencies using Bash scripts",
      "Configured bspwm, sxhkd, Polybar, Rofi, Picom, and terminal applications for an efficient keyboard-driven workflow",
      "Provided customizable configuration files and installation scripts to simplify deployment on new Arch Linux systems",
    ],
    challenges: {
      Automation: [
        "Designed installation scripts that configure multiple desktop components while handling dependencies and minimizing manual setup.",
      ],
      "Configuration Management": [
        "Organized dotfiles into a maintainable structure, making updates, customization, and version control straightforward.",
      ],
      "Desktop Integration": [
        "Integrated multiple Linux utilities into a cohesive desktop experience with consistent theming, keybindings, and workflows.",
      ],
    },
    demoLink: "GitHub",
    sourceCode: "https://github.com/Abhishek3917/bspwm-dotfile",
    deployment: "Arch Linux",
    lastUpdated: "Jul 30, 2026",
    status: "Active",
  },
];

