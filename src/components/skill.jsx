import React from "react";

const skill = ({ skill }) => {
  return (
    <div>
      <div>
        <img
          className="w-[100px] h-[100px] badge bg-gray-700"
          src={skill.logoUrl}
          alt=""
        />
      </div>
    </div>
  );
};

export default skill;
