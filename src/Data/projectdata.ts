import { SquareTerminal,File,SquarePlay } from "lucide-react";

export const projects = [
  { slug:"archinstall",
    icons:SquareTerminal,
    title: "Arch Linux Installation Framework",
    description:"Automated Arch Linux deployment with interactive and unattended modes.",
    tech: ["Bash", "Linux", "Git"],
    iconColor: "text-cyan-500",
    features:[
      "User authentication", 
      "Continue watching",
      "Video streaming",
      "Admin dashboard",
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
    sourceCode:"https://demo.example.com",
    deployment:"docker",
    lastUpdated:"2025-07-24",
    status:"active"
  },

  { slug:"zipdf",
    icons:SquarePlay,
    title: "ZiPDF",
    description:"Self-hosted media and file streaming platform.",
    tech: ["React", "Node.js", "Express"],
    iconColor: "text-[#A855F7]",
    features:[
      "User authentication", 
      "Continue watching",
      "Video streaming",
      "Admin dashboard",
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
    sourceCode:"https://demo.example.com",
    deployment:"docker",
    lastUpdated:"May 20,2025",
    status:"active"
  },

  { slug:"zxstream",
    icons:File,
    title:"ZXstream",
    description:"Online PDF processing platform.",
    tech: ["React", "TypeScript", "Tailwind"],
    iconColor: "text-[#FF4D4D]",
    features:[
      "User authentication", 
      "Continue watching",
      "Video streaming",
      "Admin dashboard",
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
    sourceCode:"https://demo.example.com",
    deployment:"docker",
    lastUpdated:"2025-07-24",
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