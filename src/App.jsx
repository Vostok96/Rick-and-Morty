import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Location from './components/Location'
import ResidentInfo from './components/ResidentInfo'

function App() {
 
  return (
    <div className="App">
      <div>
      <input type="text" placeholder='Type a location id ...'/>
      <button>Search</button>
      </div>
     <Location/>
     
    </div>
  )
}

export default App
