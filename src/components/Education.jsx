import React from "react";

const Education = () => {
  return (
    <div className="py-5  container mx-auto">
      <div className="">
        <p className="text-3xl sm:text-4xl text-blue-200 font-bold text-center   pb-5">
          Educational Qualification
        </p>
        <div className="border-2 m-5 transform transition duration-300 hover:scale-105 border-blue-300 p-5 rounded-xl text-sky-100">
          <div className="space-y-3 sm:text-lg rounded-xl bg-linear-to-r from-slate-900 to-slate-800  p-5 shadow-xl border border-slate-800 ">
            <div className=" ">
              <p className="text-2xl sm:text-3xl font-semibold mb-1">
                Bachelor of Science in Psychology{" "}
              </p>
              <p className="text-xl font-semibold">
                {" "}
                Eden Mohila College (Ongoing)
              </p>
            </div>
            <p className="">
              I am currently pursuing my Bachelor of Science in Psychology at
              Eden Mohila College. My studies are helping me enhance analytical
              thinking and problem-solving skills, which I integrate into my
              work as a Frontend Developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
