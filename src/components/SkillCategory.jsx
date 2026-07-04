import SkillCard from "./skill";

const SkillCategory = ({ title, skills }) => {
  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

        <h3 className="text-2xl font-bold text-cyan-300 uppercase tracking-[5px]">
          {title}
        </h3>

        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
