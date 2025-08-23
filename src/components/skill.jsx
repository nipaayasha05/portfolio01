import React from "react";

const skill = ({ skill }) => {
  return (
    <div className="m-5 transform transition duration-300 hover:scale-110 ">
      <div className="w-[130px]  sm:w-[200px] h-[130px] sm:h-[200px] rounded-xl flex justify-center items-center  bg-gray-800">
        <img
          className="w-[120px] sm:[150px]  h-[120px] sm:[150px] card   bg-gray-700 p-2"
          src={skill.logoUrl}
          alt=""
        />
      </div>
    </div>
  );
};

export default skill;
