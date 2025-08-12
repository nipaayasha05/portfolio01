import React from "react";

const Education = () => {
  return (
    <div className="py-5  container mx-auto">
      <div className="m-5">
        <p className="text-3xl font-bold text-center text-sky-100 pb-5">
          Educational Qualification
        </p>
        <div className="border-2 border-violet-400 p-5 rounded-xl text-sky-100">
          <div className="space-y-2  ">
            <div>
              <p className="text-2xl font-semibold">
                Bachelor of Science in Psychology,{" "}
              </p>
              <p className="text-xl font-semibold">
                {" "}
                Eden Mohila College (Ongoing)
              </p>
            </div>
            <p>
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
