import React from "react";
import "../styles/InnerData.css";

const InnerData = ({ items }) => {
  const itemList = items.map((item, index) => <li key={index}>{item}</li>);

  return (
    <div className="InnerData">
      <ul>{itemList}</ul>
    </div>
  );
};

export default InnerData;