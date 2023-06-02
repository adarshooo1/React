import React from 'react'
import Title from './Title';
import InnerData from './InnerData';
import '../styles/Interests.css'

const Interests = () => {
  const interests = ['Volley Ball' , "Travelling", "Interacting", "Computer Science"]

  return (
    <div className='Interests'>
      <Title title={"Interests"} />
      <InnerData items={interests}/>
    </div>
  )
}

export default Interests;