import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  return (
    <div className=" container mx-auto">
      {" "}
      <div className="py-5 m-5 space-y-3 text-sky-100">
        <p className="text-3xl font-bold text-center text-sky-100 pb-5">
          About Me
        </p>
        <div className="border-2 border-violet-400 p-5 rounded-xl">
          <p>
            Hi, I’m Ayasha — a passionate Frontend Developer with over a year of
            experience creating responsive, user-friendly, and visually
            appealing web applications. My journey into programming began with
            curiosity, exploring how websites worked, and soon developed into a
            deep passion for building things from scratch. Over time, I’ve built
            multiple personal projects, each helping me refine my skills and
            grow as a developer.
          </p>
          <br />
          <p>
            I specialize in React, HTML, CSS, Tailwind CSS, Node.js, Express.js,
            and Firebase. I enjoy working on projects that combine clean,
            maintainable code with creative, dynamic designs to deliver
            exceptional user experiences. I thrive on challenges, love solving
            problems, and am constantly seeking opportunities to learn something
            new.
          </p>
          <br />
          <p>
            Outside of programming, I’m passionate about painting and crafting,
            hobbies that fuel my creativity and sharpen my attention to detail.
            These artistic interests inspire my design sense and bring a unique
            touch to my development work. I believe in continuous improvement,
            and I’m always looking for ways to push my skills to the next level
            — both as a developer and as a creative individual.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
