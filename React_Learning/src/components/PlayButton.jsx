import React from "react";
import "./PlayButton.css";

function PlayButton ({name , message}){
  function handleClick() {
    console.log({message});
  }

//   return (
//     <div className="PlayButton">
//       {/* Way: 1 */}
//       {/* When ever we made a button and the button have a task then onClick it will take a callback function which will execute at the time the when we click on the button then it will execute the function and the thing we passed in the parameter in that button. Like onCLick. */}
//       {/* <button onClick={() => console.log("Play")}>Play</button> */}
//     </div>
//   );

// Way 2 (Preffered):-  
return ( <button onClick={handleClick}>{name}</button> )};
{/* Thing have to notice in the onClick always pass the outer function in normal text like (handleCllck) not the complete function (handleClick()) because it will call automatically at the time the DOM will render in the webpage then at the click it will only pass the value inside it. */}

export default PlayButton;
