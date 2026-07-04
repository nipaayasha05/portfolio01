import React, { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { useLoaderData, useParams, useNavigate } from "react-router";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projects = useLoaderData();
  const project = projects.find((p) => p.id == id);

  useEffect(() => {
    document.title = project?.projectName || "Project Details";
    window.scrollTo(0, 0);
  }, [project]);

  if (!project)
    return (
      <div className="text-white text-center py-20">Project not found</div>
    );

  return (
    <div className="mt-16  py-10 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        {/* <button
          onClick={onClose}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition mb-8"
        >
          <FiArrowLeft /> Back to Projects
        </button> */}

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-800/40 backdrop-blur-sm p-6 md:p-10 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-200 mb-4">
                {project.projectName}
              </h1>
              <p className="text-lg text-slate-300 mb-6">
                {project.briefDescription}
              </p>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2">
                {project.mainTechnologyStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-800 text-indigo-300 text-xs font-bold rounded-full border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <img
              src={project.projectImage}
              alt={project.projectName}
              className="w-full h-[320px] object-cover rounded-2xl border border-slate-700"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Left Column: Features */}
          <div className="bg-slate-900/30 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-xl font-bold text-white mb-4">Key Features</h2>
            <ul className="space-y-3 text-slate-400">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-indigo-500">•</span> {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Challenges & Improvements */}
          <div className="space-y-8">
            <div className="bg-slate-900/30 border border-slate-800 rounded-3xl p-8">
              <h2 className="text-xl font-bold text-white mb-2">Challenges</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                {project.challengesFaced}
              </p>
            </div>
            <div className="bg-slate-900/30 border border-slate-800 rounded-3xl p-8">
              <h2 className="text-xl font-bold text-white mb-2">
                Future Improvements
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                {project.potentialImprovements}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 flex justify-center items-center gap-8 px-4">
          {[
            {
              shortLabel: "Live",
              label: "Live Preview",
              link: project.liveProjectLink,
              icon: <FiExternalLink />,
            },
            {
              shortLabel: "Client",
              label: "GitHub Client",
              link: project.githubClientLink,
              icon: <BsGithub />,
            },
            {
              shortLabel: "Server",
              label: "GitHub Server",
              link: project.githubServerLink,
              icon: <BsGithub />,
            },
          ].map((btn, i) => (
            <a
              key={i}
              href={btn.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 px-3 py-3 text-white transition duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2 font-medium">
                {/* Mobile */}
                <span className="md:hidden text-xs">{btn.shortLabel}</span>

                {/* Tablet & Desktop */}
                <span className="hidden md:inline">{btn.label}</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
                  {btn.icon}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
