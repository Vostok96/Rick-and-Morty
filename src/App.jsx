import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Location from './components/Location'
import ResidentInfo from './components/ResidentInfo'

function App() {
  const [locationId, setLocationId] = useState(null);
  const handleSearch = () => {
    setLocationId(document.getElementById('location-input').value);
  }
 
  return (
    <div className="App">
      <div>
      <input type="text" id="location-input" placeholder='Type a location id ...' onChange={() => setLocationId(null)}/>
      <button onClick={handleSearch}>Search</button>
      </div>
     <Location locationId={locationId}/>
     
    </div>
  )
}

export default App
