import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter'
import WelcomeMessage from './components/welcome'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <div>
      <h1>Welcome to React Application</h1>
      <Counter/>
      <WelcomeMessage/>
    </div>
  )
}

export default App
