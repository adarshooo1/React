import React from "react";
import "./Page.css"

function Page() {
  return (
    <div className="Container">
      <form action="#">
        <div className="ImageContainer">
          <img src="https://loremflickr.com/420/340" />
        </div>
        <div className="Holders">
          <input type="text" placeholder="Enter your text" />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Page;
