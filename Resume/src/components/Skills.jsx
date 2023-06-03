import React from "react";
import Title from "./Title";
import InnerData from "./InnerData";
import '../styles/global.css'

const Skills = () => {
  const skills = ["Mongodb", "Express Js", "React Js", "Node Js", "Next Js"];
  return (
    <div className="Skills MgPd">
      <Title title="Skills" />
      <InnerData items={skills} />
    </div>
  );
};

export default Skills;
