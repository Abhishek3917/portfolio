import { SquareTerminal,File,SquarePlay } from "lucide-react";

export const projects = [
  { slug:"archinstall",
    icons:SquareTerminal,
    title: "Arch Linux Installation Framework",
    description:"Automated Arch Linux deployment with interactive and unattended modes.",
    tech: ["System Automation","Bash", "Linux","Git"],
    iconColor: "text-cyan-500",
    features:[
      "modular automated Arch Linux installation script to streamline OS deployment on fresh systems", 
      "automated disk setup, package installation, bootloader configuration, network setup, and user environment provisioning",
      "Designed interactive and unattended installation modes for both beginner and advanced user",
      "Added logging, error handling, and configurable options to improve installation reliability and debugging",
    ],
    challenges:{
    "Scalability":[
      " Lorem ipsum dolor sit amet consectetur adipisicing elit."
    ],
    "Video Encoding":[
      "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    ],
    "Deployment":[
      "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    ]
    },
    demoLink:"Local Only",
    sourceCode:"https://github.com/Abhishek3917/arch_linux_installation.git",
    deployment:"Active Development",
    lastUpdated:"jun 22, 2026",
    status:"Open Source"
  },

  { slug:"zipdf",
    icons:SquarePlay,
    title: "ZiPDF",
    description:"Self-hosted media and file streaming platform.",
    tech: ["React", "TypeScript", "Node.js","Tailwind CSS" ],
    iconColor: "text-[#A855F7]",
    features:[
      "A responsive React + TypeScript frontend with reusable UI components", 
      "client-side file processing concepts and optimized user interactions",
      "Structured the application with scalable frontend architecture and component-based design",
      "",
    ],
    challenges:{
    "Scalability":[
      " Lorem ipsum dolor sit amet consectetur adipisicing elit."
    ],
    "Video Encoding":[
      "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    ],
    "Deployment":[
      "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    ]
    },
    demoLink:"https://demo.example.com",
    sourceCode:"https://github.com/Abhishek3917/ZiPDF.git",
    deployment:"docker",
    lastUpdated:"jun 21, 2026",
    status:"Active Development"
  },

  { slug:"zxstream",
    icons:File,
    title:"ZXstream",
    description:"Online PDF processing platform.",
    tech: ["React", "Nodejs", "Express", "JavaScript","TypeScript", "Linux"],
    iconColor: "text-[#FF4D4D]",
    features:[
      " Node.js + Express backend with REST APIs for file handling and streaming operations", 
      "Optimized file delivery using streaming-based transfer instead of loading entire files into memory.",
      "Configured Linux-based home server deployment with reverse proxy concepts and server-side security practices",
      "",
    ],
    challenges:{
    "Scalability":[
      " Lorem ipsum dolor sit amet consectetur adipisicing elit."
    ],
    "Video Encoding":[
      "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    ],
    "Deployment":[
      "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    ]
    },
    demoLink:"https://demo.example.com",
    sourceCode:"https://github.com/Abhishek3917/zxstream.git",
    deployment:"docker",
    lastUpdated:"jun 22,2026",
    status:"active"
  },
  
];



//props

export type ChallengeMap = Record<
  string,
  string[]
>;

export type ProjectDetailprops = {
  slug: string;
  icons: React.ElementType;
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

    icons:React.ElementType;
    iconColor: string;
    title:string;
    description:string;
    tech:string[];
    slug:string;

}