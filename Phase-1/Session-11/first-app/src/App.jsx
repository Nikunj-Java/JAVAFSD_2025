import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './componenets/Greeting'

function App() {


  //this will create UI
  return (
    <div>
      <Greeting/>
      <h1>Welcome to My Reat World</h1>
      <p>This is my Test React Application</p>
      
    </div>
  )
}

export default App
