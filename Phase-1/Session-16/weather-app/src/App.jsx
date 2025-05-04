import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './component/weather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Weather App</h1>
      <Weather/>
    </div>
  )
}

export default App
