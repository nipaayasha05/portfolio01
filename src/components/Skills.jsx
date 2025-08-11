import React, { useEffect, useState } from "react";
import Skill from "./skill";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("/skill.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <div>
      <h3 className="text-3xl  text-white text-center font-bold py-5">
        Skills{" "}
      </h3>
      <div className=" flex justify-center items-center flex-wrap gap-5 ">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.id}></Skill>
        ))}
      </div>
    </div>
  );
};

export default Skills;
