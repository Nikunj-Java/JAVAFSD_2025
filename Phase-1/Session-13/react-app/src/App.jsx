import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter'
import WelcomeMessage from './components/welcome'
import FetchData from './components/FetchData'
import WindowsWidth from './components/windows'
import FetchData1 from './components/FetchData1'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <div>
      <h1>Welcome to React Application</h1>

      <WindowsWidth/>
      <Counter/>
      <WelcomeMessage/>
      <FetchData/>
      <FetchData1/>
    </div>
  )
}

export default App
