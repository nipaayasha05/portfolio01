import React, { useEffect } from "react";
import about from "../assets/undraw_programmer_raqr__2_-removebg-preview.png";

const About = () => {
  return (
    <section className="py-10 ">
      <div className="flex items-center gap-4">
        <div className="flex-1 h-[2px] bg-slate-800"></div>
        <h2 className="text-3xl sm:text-4xl text-blue-200    text-center font-bold tracking-widest py-10">
          About Me
        </h2>
        {/* <h3 className="text-3xl sm:text-4xl text-blue-200    text-center font-bold py-2">
            My Skills{" "}
          </h3> */}
        <div className="flex-1 h-[2px] bg-slate-800"></div>
      </div>
      <div className="relative overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/70 backdrop-blur-md p-8 md:p-12 lg:p-16 shadow-2xl">
        {/* Glow */}
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"></div>

        {/* Decorative Icon */}
        <div className="hidden sm:block absolute top-14 right-10 text-blue-400/20 rotate-12">
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </div>

        <header className="mb-10">
          {/* <p className="uppercase tracking-[0.3em] text-blue-400 text-sm font-semibold">
            About Me
          </p> */}

          <h1 className="mt-3 text-4xl md:text-4xl font-bold text-white">
            Hello, I'm <span className="text-blue-400">Ayasha.</span>
          </h1>

          {/* <div className="mt-4 h-1 w-24 rounded-full bg-blue-400"></div> */}
        </header>

        <div className="space-y-6 text-white leading-9 ">
          {/* <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-blue-400 first-letter:float-left first-letter:mr-3 first-letter:leading-none"> */}
          <p>
            A passionate Frontend Developer who enjoys creating responsive,
            user-friendly, and visually appealing web applications. My journey
            into programming began with a curiosity about how websites work, and
            that curiosity quickly grew into a passion for building interactive
            digital experiences from scratch.
          </p>

          <p>
            Since 2025, I've been dedicated to learning modern web technologies
            and turning ideas into real-world projects. I primarily work with
            <span className="text-blue-300 font-medium">
              {" "}
              JavaScript, React, Tailwind CSS, Firebase, Node.js, Express.js,
              and MongoDB
            </span>
            . I enjoy building responsive user interfaces, developing full-stack
            web applications, integrating REST APIs, and writing clean, reusable
            code that delivers a smooth user experience. Through hands-on
            personal projects, including a multi-vendor e-commerce platform,
            I've strengthened my skills in authentication, responsive design,
            and modern web development practices.
          </p>

          <p>
            Beyond programming, I enjoy painting and crafting—creative hobbies
            that fuel my imagination and sharpen my attention to detail. They
            inspire my design approach and help me create applications that are
            both functional and visually engaging.
          </p>

          <p>
            I'm a curious learner who enjoys solving problems, exploring new
            technologies, and continuously improving my skills. My goal is to
            grow as a{" "}
            <span className="text-blue-300 font-semibold">
              Full Stack Developer
            </span>
            , contribute to meaningful projects, and build digital experiences
            that make a positive impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
