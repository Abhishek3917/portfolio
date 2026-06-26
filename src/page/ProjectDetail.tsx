import { useParams, Navigate } from "react-router-dom";
import { projects } from "../Data/projectdata";
import type { ProjectDetailprops } from "../Data/projectdata";
import {CalendarDays,Globe,Package,GitFork,ExternalLink} from "lucide-react";

function ProjectPage(
  {title,icons,description,tech,iconColor,features,challenges,demoLink,sourceCode,deployment,lastUpdated,status,}: ProjectDetailprops) 
{
  const Icon = icons;

  return (
<>

    <section className="bg-zinc-950/35 text-white min-h-screen px-6 py-12 project">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[2fr_1fr] gap-8 ">
        <div className=" rounded-3xl border border-green-500/20 p-10 bg-green-950/25">
          <div className="mb-12">
              <a href="/" className="text-green-400 font-semibold tracking-[0.25em] flex uppercase text-lg">home</a>
            <p className="text-green-400 font-semibold tracking-[0.25em] uppercase text-lg">
              {">_"} Project Overview 
            </p>
            
            <h1 className="text-4xl lg:text-5xl font-bold mt-6 mb-6">
              {title}
            </h1>
            
            <div className="w-32 h-1 bg-green-500 rounded-full mb-8"/>
            <p className="text-gray-300 leading-relaxed text-lg">
              {description}
            </p>
          </div>

          <hr className="border-green-500/10 mb-12" />

          <div className="mb-12 ">
            <h2 className="text-green-400 text-xl font-semibold mb-8">
              FEATURES
            </h2>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex gap-3 text-gray-300">
                  
                  <span className="text-green-400">{">"}</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <hr className="border-green-500/10 mb-12" />
          <div className="border p-3 border-green-500/30 rounded-4xl overflow-hidden">
            <h2 className="text-green-400 text-xl font-semibold mb-8 ">
              CHALLENGES FACED
            </h2>
            <div className="relative ml-4 border-l border-green-500/30">
              {Object.entries(challenges).map(([title, points]) => (
                <div
                  key={title}
                  className="relative pl-10 pb-10"
                >
                  <div className="absolute -left-2 top-2 w-3 h-3 rounded-full bg-green-400" />

                  <h3 className="text-green-400 text-xl mb-3">
                    {title}
                  </h3>

                  {points.map((point) => (
                    <p
                      key={point}
                      className="text-gray-300 leading-relaxed"
                    >
                      {point}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* rightside status */}
        <div className=" rounded-3xl border border-green-500/20 bg-black/70 backdrop-blur-sm p-8 h-fit sticky top-8 ">
    
          <div className="flex gap-5 items-center mb-10">
            <div className=" w-24 h-24 flex items-center justify-center bg-green-500/5 " >
              <Icon size={42} className={iconColor} />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-green-400">
                {title}
              </h2>

              <p className="text-gray-400 mt-1">
                {description}
              </p>

              <div className=" inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg border border-green-500/20 bg-green-500/10 text-green-400 ">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                {status}
              </div>
            </div>
          </div>
          <hr className="border-green-500/10 mb-8" />
          <div className="mb-10">
            <h3 className="text-green-400 font-semibold mb-4">
              TOOLS USED
            </h3>

            <div className="flex flex-wrap gap-3">
              {tech.map((item) => (
                <span key={item} className=" px-4 py-2 rounded-lg border border-green-500/20 bg-green-500/5">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <hr className="border-green-500/10 mb-8" />

          <div className="mb-8">
            <h3 className="text-green-400 font-semibold mb-4 flex gap-2 items-center">
              <Package size={18} />
              LIVE DEMO
            </h3>

            <a href={demoLink} target="_blank" rel="noopener noreferrer" className=" flex justify-between items-center border border-green-500/20 rounded-xl p-4 hover:bg-green-500/5 transition ">
              <div className="flex gap-3 items-center">
                <Globe size={18} />
                <span>{demoLink}</span>
              </div>
              <ExternalLink size={18} />
            </a>
          </div>

          <hr className="border-green-500/10 mb-8" />

          <div className="mb-8">
            <h3 className="text-green-400 font-semibold mb-4">
              SOURCE CODE
            </h3>

            <a href={sourceCode} target="_blank" rel="noopener noreferrer" className=" flex justify-between items-center border border-green-500/20 rounded-xl p-4 text-green-400 hover:bg-green-500/5 transition ">
              <div className="flex gap-3 items-center">
                <GitFork size={18} />
                <span>GitHub Repository</span>
              </div>
              <ExternalLink size={18} />
            </a>
          </div>

          <hr className="border-green-500/10 mb-8" />

          <div className="mb-8">
            <h3 className="text-green-400 font-semibold mb-4">
              DEPLOYMENT
            </h3>

            <div className=" inline-block px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20 ">
              {deployment}
            </div>
          </div>

          <hr className="border-green-500/10 mb-8" />

          <div>
            <h3 className="text-green-400 font-semibold mb-4">
              LAST UPDATED
            </h3>

            <div className="flex items-center gap-3 text-green-400">
              <CalendarDays size={18} />
              <span>{lastUpdated}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

</>
  );
}

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return <Navigate to="/PageNotFound" />;
  }

  return <ProjectPage {...project} />;
}