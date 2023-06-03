import React from 'react'
import Title from './Title'
import InnerData from './InnerData'


const Education = () => {

  const education = ["BBA - Lloyd Institute of Management and Technology" , "Higher Secondary - UMA Pulbic School (C.B.S.E)" , "Matriculation - Jai Hind Public School (C.B.S.E)"];

  return (
    <div className="Education MgPd">
    <Title title="Eduation"/>
    <InnerData items={education} />
    </div>
  )
}

export default Education