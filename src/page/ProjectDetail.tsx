import { useParams } from "react-router-dom";
import { projects } from "../Data/projectdata";
import { Navigate } from "react-router-dom";

type projectDetailprops ={
    title:string
    description:string
}

function ProjectPage({title,description}:projectDetailprops){
    return(
        <div>
            <h1>{title}</h1>
            <h1>{description}</h1>
        </div>
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
            key={project.title}
            title={project.title}
            description={project.description}
        />
    </>
  );
}

