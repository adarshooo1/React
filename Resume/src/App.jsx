import React from 'react'
import ResumeHeader from './components/ResumeHeader';
import Interest from './components/Interests';
import './App.css'

function App() {

  return (

    <div>
      <ResumeHeader name={"Adarsh"}/>
      <hr/>
      <Interest />
      
    </div>
  )
}

export default App
