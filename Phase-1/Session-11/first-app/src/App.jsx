import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './componenets/Greeting'
import Header from './componenets/Header'
import Footer from './componenets/Footer'
import Slider from './componenets/Slider'

function App() {


  //this will create UI
  return (
    <div>
      <Header/>

      <Greeting/>

      <Slider/>

      <h1>Welcome to My Reat World</h1>
      <p>This is my Test React Application</p>
      <Footer/>
    </div>
  )
}

export default App
