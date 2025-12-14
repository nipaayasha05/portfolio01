import React from "react";

const skill = ({ skill }) => {
  return (
    <div className="m-5 transform transition duration-300 hover:scale-110 ">
      <div className="w-[130px]   blue-500 sm:w-[150px] h-[130px] sm:h-[150px] border border-blue-100 box-border rounded-xl flex justify-center items-center  bg-gray-800">
        <img
          className="w-[110px] sm:[120px]  h-[110px] sm:[120px] card   bg-blue-100 p-2"
          src={skill.logoUrl}
          alt=""
        />
      </div>
    </div>
  );
};

export default skill;
