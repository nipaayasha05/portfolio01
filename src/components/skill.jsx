// import React from "react";

// const skill = ({ skill }) => {
//   return (
//     <div className="m-5 transform transition duration-300 hover:scale-110 ">
//       <div className="w-[130px]   blue-500 sm:w-[150px] h-[130px] sm:h-[150px] border border-blue-100 box-border rounded-xl flex justify-center items-center  bg-gray-800">
//         <img
//           className="w-[110px] sm:[120px]  h-[110px] sm:[120px] card   bg-blue-100 p-2"
//           src={skill.logoUrl}
//           alt=""
//         />
//       </div>
//     </div>
//   );
// };

// export default skill;
const badgeColor = {
  Frontend: "bg-cyan-500/10 text-cyan-300 border-cyan-400/30",

  Backend: "bg-emerald-500/10 text-emerald-300 border-emerald-400/30",

  Tools: "bg-orange-500/10 text-orange-300 border-orange-400/30",
};

const SkillCard = ({ skill }) => {
  return (
    <div className="group relative w-full max-w-[180px]">
      {/* Glow */}

      <div
        className="absolute -inset-[1px]
      rounded-3xl
      bg-gradient-to-r
      from-sky-900
      via-blue-900
      to-sky-900
      opacity-0
      blur-md
      transition
      duration-500
      group-hover:opacity-100"
      ></div>

      {/* Card */}

      <div
        className="relative
      rounded-3xl
      border
      border-slate-700
      bg-slate-900/90
      backdrop-blur-xl
      p-6
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-cyan-400/40"
      >
        {/* Icon */}

        <div
          className="mx-auto
        w-20
        h-20
        rounded-2xl
        bg-slate-800
        border
        border-slate-700
        flex
        items-center
        justify-center
        group-hover:rotate-6
        transition"
        >
          <img
            src={skill.logoUrl}
            alt={skill.name}
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* Name */}

        <h3 className="text-white font-bold text-lg text-center mt-5">
          {skill.name}
        </h3>

        {/* Badge */}

        <div className="flex justify-center mt-4">
          <span
            className={`px-4 py-1 rounded-full text-xs font-semibold border ${badgeColor[skill.category]}`}
          >
            {skill.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
