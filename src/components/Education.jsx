import React from "react";

// const Education = () => {
//   return (
//     <div className="py-5  container mx-auto">
//       <div className="">
//         <p className="text-3xl sm:text-4xl text-blue-200 font-bold text-center   pb-5">
//           Educational Qualification
//         </p>
//         <div className="border-2 m-5 transform transition duration-300 hover:scale-105 border-blue-300 p-5 rounded-xl text-sky-100">
//           <div className="space-y-3 sm:text-lg rounded-xl bg-linear-to-r from-slate-900 to-slate-800  p-5 shadow-xl border border-slate-800 ">
//             <div className=" ">
//               <p className="text-2xl sm:text-3xl font-semibold mb-1">
//                 Bachelor of Science in Psychology{" "}
//               </p>
//               <p className="text-xl font-semibold">
//                 {" "}
//                 Eden Mohila College (Ongoing)
//               </p>
//             </div>
//             <p className="">
//               I am currently pursuing my Bachelor of Science in Psychology at
//               Eden Mohila College. My studies are helping me enhance analytical
//               thinking and problem-solving skills, which I integrate into my
//               work as a Frontend Developer.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Education = () => {
  return (
    <section className="py-10 ">
      <div className="">
        {/* Creative Title */}
        <div className="flex items-center gap-4">
          {/* <span className="text-indigo-500 font-mono text-lg">01.</span> */}
          <div className="flex-1 h-[2px] bg-slate-800"></div>
          <h2 className="text-3xl sm:text-4xl text-blue-200    text-center font-bold tracking-widest py-10">
            Educational Qualification
          </h2>
          {/* <h3 className="text-3xl sm:text-4xl text-blue-200    text-center font-bold py-2">
            My Skills{" "}
          </h3> */}
          <div className="flex-1 h-[2px] bg-slate-800"></div>
        </div>

        {/* Educational Qualification */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Blueprint Style Card */}
          <div className="flex-1 relative overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/70 backdrop-blur-md p-8 md:p-10 shadow-2xl h-full">
            ...
            {/* Decorative Grid Pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(#60a5fa 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>
            <div className="relative z-10">
              <div className="flex flex-row md:flex-row items-center justify-between gap-4 mb-6">
                <h3 className="text-2xl font-bold text-blue-400">
                  B.Sc. in Psychology
                </h3>
                <span className="px-3 py-1 bg-indigo-500/10 border border-sky-500/50 text-sky-300 text-xs font-mono uppercase tracking-widest rounded badge whitespace-nowrap">
                  2022 - 2026
                </span>
              </div>

              <p className="text-xl text-blue-200 font-medium mb-4 italic">
                Eden Mohila College
              </p>

              <p className="text-white leading-relaxed font-light border-l-2 border-blue-500 pl-6">
                "Studying human behavior is my cognitive framework for
                development. By analyzing psychological patterns, I architect
                user experiences that are not just functional, but inherently
                intuitive and emotionally resonant."
              </p>
            </div>
            {/* Corner accents for blueprint look */}
            <div className="flex-1 absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"></div>
          </div>
          {/* Programming Hero Card */}
          <div className="flex-1 relative overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/70 backdrop-blur-md p-8 md:p-10 shadow-2xl h-full">
            {/* Decorative Grid Pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(#60a5fa 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>

            <div className="relative z-10">
              <div className="flex flex-row md:flex-row items-center justify-between gap-4 mb-6">
                <h3 className="text-2xl font-bold text-blue-400 ">
                  Complete Web Development
                  <br />
                  Level 1
                </h3>

                <span className="px-3 py-1 bg-indigo-500/10 border border-sky-500/50 text-sky-300 text-xs font-mono uppercase tracking-widest rounded badge">
                  Completed
                </span>
              </div>

              <p className="text-xl text-blue-200 font-medium mb-4 italic">
                Programming Hero
              </p>

              <p className="text-white leading-relaxed font-light border-l-2 border-blue-500 pl-6">
                Successfully completed the Level 1 Web Development program with
                practical experience in HTML, CSS, Tailwind CSS, JavaScript,
                React, React Router, Firebase, MongoDB, and Express.js.
                Developed responsive full-stack projects and enhanced
                problem-solving skills through hands-on practice.
              </p>
            </div>

            {/* Corner accents */}
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"></div>

            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
