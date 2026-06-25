import { useParams } from "react-router-dom";
import { projects } from "../Data/projectdata";
import { Navigate } from "react-router-dom";
import type { ProjectDetailprops } from "../Data/projectdata";
import { CalendarDays,Globe,Package } from 'lucide-react';

function ProjectPage(
{
    slug,title,icons,description,tech,iconColor,features,challenges,demoLink,sourceCode,deployment,lastUpdated,status
        }:ProjectDetailprops)
{
  const Icon = icons;
    return(
<section className=" bg-black max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 min-h-screen text-white">
    <div className=" rounded-2xl border border-green-500/20 bg-black/30 backdrop-blur-sm p-10 " >
  {/* Overview */}

  <div className="mb-12">
    <p className="text-green-400 text-sm font-semibold tracking-widest">
      {">_"} PROJECT OVERVIEW
    </p>

    <h1 className="text-5xl font-bold mt-6 mb-6">
      {title}
    </h1>

    <div className="w-32 bg-green-500 mb-8" />

    <p className="text-gray-300 leading-relaxed text-lg">
      {description}
    </p>
  </div>

    <hr className="border-green-500/10 mb-12" />

  {/* Features */}

  <div className="mb-12">
    <h2 className="text-green-400 text-xl mb-8">
      FEATURES
    </h2>
    <div className="grid md:grid-cols-2 gap-6 text-gray-300">
       {features.map((feature)=>(
        <p>{">"} {feature} </p>
      ))} 


    </div>
  </div>

    <hr className="border-green-500/10 mb-12" />

  {/* Challenges */}

  <div>
    <h2 className="text-green-400 text-xl mb-8">
      CHALLENGES FACED
    </h2>

    <div className="space-y-10">

      <div className="relative pl-8">
        <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-green-400" />
        {/* {challenges.map((challenge)=>(
        <h3 className="text-green-400 text-lg mb-3">
            {challenge.key}
        </h3>
        ))} */}
        <h3 className="text-green-400 text-lg mb-3">
          Scalability
        </h3>

        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* <div className="relative pl-8">
        <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-green-400" />
        <h3 className="text-green-400 text-lg mb-3">
          Video Encoding
        </h3>

        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div> */}

      <div className="relative pl-8">
        <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-green-400" />
        <h3 className="text-green-400 text-lg mb-3">
          Deployment
        </h3>

        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

    </div>
  </div>
</div>
<div className=" rounded-2xl border border-green-500/20 bg-black/30 backdrop-blur-sm p-8 h-fit sticky top-8">

  {/* Header */}

  <div className="flex gap-6 items-center mb-10">

    <div className=" w-28 h-28 flex items-center justify-center text-5xl text-green-400 ">
      <Icon size={32} className={iconColor}/>
    </div>

    <div>
      <h2 className="text-4xl font-bold text-green-400">
        {title}
      </h2>

      <p className="text-gray-400 mt-2">
        {description}
      </p>

      <span className=" inline-block mt-4 px-4 py-2 rounded-lg bg-green-500/10 text-green-400 " >
        ● {status}
      </span>
    </div>

  </div>

  <hr className="border-green-500/10 mb-8" />

  {/* Tools */}

  <div className="mb-10">
    <h3 className="text-green-400 mb-4">
      TOOLS USED
    </h3>

    <div className="flex flex-wrap gap-3">

        {tech.map((items)=>(
          <h3 key={items} className="px-4 py-2 rounded-lg bg-green-500/10">
          {items}
          </h3>
        ))}
    </div>
  </div>

  <hr className="border-green-500/10 mb-8" />

  {/* Demo */}

  <div className="mb-8">

    <h3 className="text-green-400 mb-2">
      LIVE DEMO
    </h3>

    <div className=" border border-green-500/20 rounded-xl p-4 ">
      {demoLink}
    </div>

  </div>

  {/* Github */}

  <div className="mb-8">

    <h3 className="text-green-400 mb-4">
      SOURCE CODE
    </h3>

    <div className=" border border-green-500/20 rounded-xl p-4">
      {sourceCode}
    </div>

  </div>

  {/* Deployment */}

  <div>

    <h3 className="text-green-400 mb-4">
      DEPLOYMENT
    </h3>

    <div className=" inline-block px-4 py-2 rounded-lg bg-green-500/10 mb-4">
      {deployment}
    </div>

  </div>
    <div>

    <h3 className="text-green-400 mb-4">
      Last updated
    </h3>

    <div className="flex px-4 py-2 rounded-lg gap-4 text-green-600 text-lg">
      <CalendarDays size={20}/>{lastUpdated}
    </div>

  </div>

</div>
</section>
    )
}


export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find(
    url => url.slug === slug 
  );
  if (!project){
    return <Navigate to ='/PageNotFound' />
  }
  return (
    <>
        <ProjectPage 
            key={project.slug}
            {...project}
            />
    </>
  );
}

