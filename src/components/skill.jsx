import React from "react";

const skill = ({ skill }) => {
  return (
    <div className="m-5">
      <div className="w-[120px] sm:w-[150px] h-[120px] sm:h-[150px] rounded-xl flex justify-center items-center  bg-gray-700">
        <img
          className="w-[100px] h-[100px] card   bg-gray-700"
          src={skill.logoUrl}
          alt=""
        />
      </div>
    </div>
  );
};

export default skill;
