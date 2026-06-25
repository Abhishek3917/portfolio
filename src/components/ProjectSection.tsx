import { Link } from "react-router-dom";
import {projects} from "../Data/projectdata.ts"
import type { ProjectCardprops } from "../Data/projectdata.ts";

function ProjectCard({slug,title,description,tech,icons,iconColor}:ProjectCardprops){
    const Icon = icons;
return(
    <div className=" border border-green-500/20 rounded-xl p-6 bg-black/30 backdrop-blur-sm   hover:border-green-500/50 hover:-translate-y-1 transition-all duration-300">
              <div
        className=" w-16 h-16 flex items-center justify-center rounded-lg border border-green-500/40 mb-5
        "
      >
        <Icon size={32} className={iconColor}/>
      </div>
        <h3
        className=" text-2xl font-semibold text-green-400 mb-3">
        {title}
      </h3>

      {/* Tech */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item) => (
          <span
            key={item}
            className=" px-3 py-1 rounded-md text-sm bg-green-500/10 text-cyan-400 border border-green-500/10">
            {item}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className=" text-gray-300 leading-relaxed mb-4 ">
        {description}
      </p>

      {/* Link */}
      <Link to={`/project/${slug}`} className=" text-green-400 hover:text-green-300 transition-colors font-medium ">
        {">"} view project
      </Link>
    </div>
        
        )
        }   

export function ProjectsSection(){
    return(
        <div className="max-w-7xl mx-auto px-6 py-24">
            <h2 className=" text-4xl font-bold text-green-400 text-center mb-12  ">
                Projects
            </h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                    <ProjectCard
                       key={project.slug}
                        {...project}
                    />                  
                ))}
            </div>
         </div>
         )
}