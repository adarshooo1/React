import React from "react";
import "../styles/ResumeHeader.css";

const ResumeHeader = ({name}) => {
  return (
    <div className="ResumeHeader ">
      <h1>Resume</h1>
      <h2>{name}</h2>
    </div>
  );
};

export default ResumeHeader;
