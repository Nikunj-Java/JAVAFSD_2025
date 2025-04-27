import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter'
import WelcomeMessage from './components/welcome'
import FetchData from './components/FetchData'
import WindowsWidth from './components/windows'
import FetchData1 from './components/FetchData1'
import FormValidation from './components/FormValidation'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import NavBarReact from './components/NavBarReact'

function App() {
  const [count, setCount] = useState(0)


  return (
    <BrowserRouter>

     <NavBarReact/>

      <Routes>
        <Route path='/' element={<Navigate to="/home" replace />}></Route>
        <Route path='/home' element={<WelcomeMessage />}></Route>
        <Route path='/fetch' element={<FetchData />}></Route>
        <Route path='/form' element={<FormValidation />}></Route>
        <Route path='/counter' element={<Counter />}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
