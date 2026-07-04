import ProjectDetails from "./ProjectDetails";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 md:p-6">
      <div className="relative w-full max-w-7xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-xl text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-slate-800"
        >
          ✕
        </button>

        {/* Scrollable Modal */}
        <div className="max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900">
          <ProjectDetails project={project} />
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
