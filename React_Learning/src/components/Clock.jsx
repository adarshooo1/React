import React from 'react'

const Clock = () => {
    const date = new Date(); 
  return (<h1>{date.toString}</h1>)
}

export default Clock