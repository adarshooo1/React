import React from 'react'
import ResumeHeader from './components/ResumeHeader';
import Interest from './components/Interests';
import Skills from './components/Skills';
import './App.css'
import Education from './components/Education';
import Projects from './components/Projects';

function App() {

  return (

    <div>
      <ResumeHeader name={"Adarsh"}/>
      <hr/>
      <Interest />
      <Skills />
      <Education />
      <Projects />
    </div>
  )
}

export default App
