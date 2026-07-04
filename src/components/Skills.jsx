// import React, { useEffect, useState } from "react";
// import Skill from "./skill";

// const Skills = () => {
//   const [skills, setSkills] = useState([]);
//   useEffect(() => {
//     fetch("/skill.json")
//       .then((res) => res.json())
//       .then((data) => setSkills(data));
//   }, []);
//   return (
//     <div className="container  mx-auto py-10">
//       <div className="flex items-center gap-4">
//         <div className=" flex-1 h-[2px] bg-slate-800"></div>
//         <h2 className="text-3xl sm:text-4xl text-blue-200    text-center font-bold tracking-widest py-10">
//           My Skills
//         </h2>
//         {/* <h3 className="text-3xl sm:text-4xl text-blue-200    text-center font-bold py-2">
//             My Skills{" "}
//           </h3> */}
//         <div className="flex-1 h-[2px] bg-slate-800"></div>
//       </div>
//       <div className="flex justify-center items-center ">
//         {" "}
//         <div className=" m-5  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
//           {skills.map((skill) => (
//             <Skill skill={skill} key={skill.id}></Skill>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

import { useEffect, useState } from "react";
import SkillCard from "./skill";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skill.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <section id="skills" className="py-10">
      <div className="container mx-auto px-">
        {/* Heading */}

        <div className="flex items-center gap-4">
          <div className="flex-1 h-[2px] bg-slate-800"></div>
          <h2 className="text-3xl sm:text-4xl text-blue-200    text-center font-bold tracking-widest py-10">
            <span className="text-white">MY</span>{" "}
            <span className="text-cyan-400">SKILLS</span>
          </h2>
          {/* <h3 className="text-3xl sm:text-4xl text-blue-200    text-center font-bold py-2">
            My Skills{" "}
          </h3> */}
          <div className="flex-1 h-[2px] bg-slate-800"></div>
        </div>

        <div
          className="grid
                        grid-cols-2
                        sm:grid-cols-3
                        lg:grid-cols-4
                        gap-8
                        justify-items-center"
        >
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
