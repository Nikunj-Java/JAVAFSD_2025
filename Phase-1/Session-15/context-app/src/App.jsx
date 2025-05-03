import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeComponent from './components/ThemeComponent'
import { ThemeContext } from './context/ThemeContext'

function App() {
   
  const {theme,toogleTheme}=useContext(ThemeContext)
  return (
    <div>

      <h1>Welcome to useContext App</h1>

      <p>test {theme}</p>
      
      <button onClick={toogleTheme}>Toggle Theme</button>
      <ThemeComponent/>
    </div>
  )
}

export default App
