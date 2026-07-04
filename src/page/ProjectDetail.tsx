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

    <section className="bg-(--bg) text-(--text) min-h-screen px-6 py-12 project">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[2fr_1fr] gap-8 ">
        <div className=" rounded-3xl border border-(--bg-project-border) p-10 bg-(--bg-project-desc)">
          <div className="mb-12">
              <a href="/" className="text-(--primary) font-semibold tracking-[0.25em] flex uppercase text-lg">home</a>
            <p className="text-(--primary) font-semibold tracking-[0.25em] uppercase text-lg">
              {">_"} Project Overview 
            </p>
            
            <h1 className="text-4xl lg:text-5xl font-bold mt-6 mb-6">
              {title}
            </h1>
            
            <div className="w-38 h-1 bg-(--primary) rounded-full mb-8"/>
            <p className="text-(--text) leading-relaxed text-lg">
              {description}
            </p>
          </div>

          <hr className="border-(--bg-project-border) mb-12" />

          <div className="mb-12 ">
            <h2 className="text-(--primary) text-xl font-semibold mb-8">
              FEATURES
            </h2>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex gap-3 text-gray-300">
                  
                  <span className="text-(--primary)">{">"}</span>
                  <span className="text-(--text) text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <hr className="border-(--bg-project-border) mb-12" />
          <div className="border p-3 border-(--bg-project-border) rounded-4xl overflow-hidden">
            <h2 className="text-(--primary) text-xl font-semibold mb-8 ">
              CHALLENGES FACED
            </h2>
            <div className="relative ml-4 border-l border-(--bg-project-border)">
              {Object.entries(challenges).map(([title, points]) => (
                <div
                  key={title}
                  className="relative pl-10 pb-10"
                >
                  <div className="absolute -left-2 top-2 w-3 h-3 rounded-full bg-(--primary)" />

                  <h3 className="text-(--primary) text-xl mb-3">
                    {title}
                  </h3>

                  {points.map((point) => (
                    <p
                      key={point}
                      className="text-(--text) leading-relaxed"
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
        <div className=" rounded-3xl border border-(--bg-project-border) bg-(--bg-project-stat) backdrop-blur-sm p-8 h-fit sticky top-8 ">
    
          <div className="flex gap-5 items-center mb-10">
            <div className=" w-24 h-24 flex items-center justify-center " >
              <Icon size={42} className={iconColor} />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-(--primary)">
                {title}
              </h2>

              <p className="text-(text) mt-1">
                {description}
              </p>

              <div className=" inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg border border-(--bg-project-border) bg-(--bg-project-desc) text-(--primary) ">
                <div className="w-2 h-2 rounded-full bg-(--primary)" />
                {status}
              </div>
            </div>
          </div>
          <hr className="border-(--bg-project-border) mb-8" />
          <div className="mb-10">
            <h3 className="text-(--text) font-semibold mb-4">
              TOOLS USED
            </h3>

            <div className="flex flex-wrap gap-3">
              {tech.map((item) => (
                <span key={item} className=" px-4 py-2 rounded-lg border border-(--bg-project-border) text-cyan-400 bg-(--bg-card-skill)">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <hr className="border-(--hr) mb-8" />

          <div className="mb-8">
            <h3 className="text-(--text) font-semibold mb-4 flex gap-2 items-center">
              <Package size={18} />
              LIVE DEMO
            </h3>

            <a href={demoLink} target="_blank" rel="noopener noreferrer" className=" flex justify-between items-center border border-(--bg-project-border) rounded-xl p-4 hover:bg-(--hover) transition text-(-text)">
              <div className="flex gap-3 items-center">
                <Globe size={18} />
                <span>{demoLink}</span>
              </div>
              <ExternalLink size={18} />
            </a>
          </div>

          <hr className="border-(--hr) mb-8" />

          <div className="mb-8">
            <h3 className="text-(--text) font-semibold mb-4">
              SOURCE CODE
            </h3>

            <a href={sourceCode} target="_blank" rel="noopener noreferrer" className=" flex justify-between items-center border border-(--bg-project-border) rounded-xl p-4 text-(--text) hover:bg-(--hover) transition ">
              <div className="flex gap-3 items-center">
                <GitFork size={18} />
                <span className="text-(--primary)">GitHub Repository</span>
              </div>
              <ExternalLink size={18} />
            </a>
          </div>

          <hr className="border-(--hr) mb-8" />

          <div className="mb-8">
            <h3 className="text-(--text) font-semibold mb-4">
              DEPLOYMENT
            </h3>

            <div className=" inline-block px-4 py-2 rounded-lg bg-green-500/10 border border-(--bg-project-border) ">
              {deployment}
            </div>
          </div>

          <hr className="border-(--hr) mb-8" />

          <div>
            <h3 className="text-(--text) font-semibold mb-4">
              LAST UPDATED
            </h3>

            <div className="flex items-center gap-3 text-(--text)">
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