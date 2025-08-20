import React, { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { useLoaderData, useParams } from "react-router";
import { Features } from "tailwindcss";

const ProjectDetails = () => {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  const { id } = useParams();
  const projects = useLoaderData();
  const project = projects.find((project) => project.id == id);
  return (
    <div className="container m-5 w-10/12 mx-auto  py-10">
      {" "}
      <div className=" ">
        <div className="text-sky-100 text-lg space-y-5">
          <div>
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500  to-fuchsia-400 text-4xl font-bold">
              {project.projectName}
            </span>{" "}
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500  to-fuchsia-400">
              - {project.project}
            </span>
          </div>
          <p className="text-lg">{project.briefDescription}</p>
          <img src={project.projectImage} className="rounded-xl " alt="" />
          <div className="text-lg">
            <strong>Features : </strong>
            {project.features.map((feature) => (
              <div feature={feature} key={feature.id}>
                <p className="  "> - {feature}</p>
              </div>
            ))}
          </div>
          <div className="flex   items-center">
            <strong className="text-sky-100 text-lg">
              Main technology stack used :{" "}
            </strong>
            <div>
              {" "}
              {project.mainTechnologyStack.map((tech, index) => (
                <p
                  className="badge badge-outline ml-2 mr-2 text-sky-100 text-lg"
                  tech={tech}
                  key={index}
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
          <p className="text-lg">
            {" "}
            <strong>Challenges Faced :</strong>
            {project.challengesFaced}
          </p>
          <p>
            {" "}
            <strong>Potential Improvements :</strong>
            {project.potentialImprovements}
          </p>
          <div className="flex gap-5 ">
            <a href={project.liveProjectLink} target="_blank">
              <button className="btn hover:from-violet-700 hover:to-fuchsia-500 py-5 text-white sm:py-0 border-none bg-gradient-to-r from-violet-500  to-fuchsia-400">
                {" "}
                Live Link <FiExternalLink size={20} />
              </button>
            </a>
            <a href={project.githubClientLink} target="_blank">
              <button className="btn hover:from-violet-700 hover:to-fuchsia-500 py-5 text-white border-none sm:py-0 bg-gradient-to-r from-violet-500  to-fuchsia-400">
                Github Client <BsGithub size={20} />
              </button>
            </a>
            <a href={project.githubServerLink} target="_blank">
              <button className="btn hover:from-violet-700 hover:to-fuchsia-500 py-5 text-white border-none sm:py-0 bg-gradient-to-r from-violet-500  to-fuchsia-400">
                Github server <BsGithub size={20} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
