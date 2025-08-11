import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  return (
    <div>
      {" "}
      <div className="py-5">
        <img
          src="https://img.freepik.com/free-photo/3d-car-with-simple-background_23-2150796882.jpg?semt=ais_hybrid&w=740&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
