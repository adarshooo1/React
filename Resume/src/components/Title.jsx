import React from "react";
import '../styles/Title.css'

const Title = ({ title }) => {
  return (
    <div className="Title">
      <span>
        <h3>{title}</h3>
      </span>
    </div>
  );
};

export default Title;
