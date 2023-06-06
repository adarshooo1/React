import React from "react";
import "./Page.css";

function Page() {
  function handleClick(e) {
    e.preventDefault();
  }

  function handleMouseOver() {
    console.log("Mouse is over the image");
  }

  function handleMouseOut() {
    console.log("Mouse is out of the image");
  }

  function focus() {
    console.log("Focused on the text box");
  }

  function blur() {
    console.log("Blur on the text box");
  }

  const cut = (e) => {
    console.log(e.target.value);
  };

  const copy = (e) => {
    console.log(e.target.value);
  };

  const paste = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="Container">
      <form action="#">
        <div className="ImageContainer">
          <img
            src="https://loremflickr.com/420/340"
            className="Image"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </div>
        <div className="Holders">
          <input
            onCut={cut}
            onCopy={copy}
            onPaste={paste}
            onFocus={focus}
            onBlur={blur}
            type="text"
            placeholder="Enter your text"
          />
          <button onClick={handleClick} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Page;
