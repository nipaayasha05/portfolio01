import React, { useEffect } from "react";

const Resume = () => {
  const pdfUrl = {};

  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  return (
    <div className="py-5 container mx-auto">
      <a href={pdfUrl} download>
        <button className="btn">Download</button>
      </a>
    </div>
  );
};

export default Resume;
