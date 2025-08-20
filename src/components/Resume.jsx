import React, { useEffect } from "react";

const Resume = () => {
  const pdfUrl = {};

  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  return (
    <div className="py-5 container mx-auto">
      <a href={pdfUrl} download>
        <button className="btn text-white hover:from-violet-700 hover:to-fuchsia-500  bg-gradient-to-r from-violet-500  border-none to-fuchsia-400">
          Download
        </button>
      </a>
    </div>
  );
};

export default Resume;
