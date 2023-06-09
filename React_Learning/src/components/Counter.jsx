import React, { useState } from 'react'

function Counter(){
    const [number, setNumber] = useState(0);

    function handleClick(e){
        e.stopPropagation();
        setNumber(number => number + 1);
    }

  return (
    <>
        <h1>{number}</h1>
        <button onClick={handleClick}>Count</button>
    </>
  )
}

export default Counter;