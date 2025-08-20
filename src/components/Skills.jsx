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
    <div className="container  mx-auto">
      <h3 className="text-4xl   text-white text-center font-bold py-2">
        My Skills{" "}
      </h3>
      <div className="flex justify-center items-center ">
        {" "}
        <div className=" m-5  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.map((skill) => (
            <Skill skill={skill} key={skill.id}></Skill>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
