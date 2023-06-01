import React from 'react'
import './App.css'
import Video from './components/Video'


function App() {

  return (
    <div className='App'>
        <div>Welcome - Learning React</div>
        <Video title='React js Tutorial' channel='ReactBusters' views='200k' time="1 year ago"/>
        <Video title='Node js Tutorial' channel='NodeBlockers'views='100k' time="3 year ago"/>
        <Video title='Next js Tutorial' channel='NextNextAndNext'views='1.4M' time="1 month ago"/>
      </div>
  )
}

export default App
