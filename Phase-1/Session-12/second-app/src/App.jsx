import './App.css'
import Action from './components/Action'
import Conditional from './components/conditional'
import Greeting from './components/greeting'
import StyleComponent from './components/StyleComponent'

function App() {
   

  return (
    //JSX---> javascript extension
    //Basic Rendering
    <div>
      <Greeting/>
      <Conditional/>
      <Action/>
      <StyleComponent/>

      <h1>Welcome to React</h1>
    </div>
  )
}

export default App
