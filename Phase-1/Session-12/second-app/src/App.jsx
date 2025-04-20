import './App.css'
import Action from './components/Action'
import Conditional from './components/conditional'
import Counter from './components/counter'
import Form from './components/Form'
import Greeting from './components/greeting'
import StyleComponent from './components/StyleComponent'
import Toggle from './components/Toogle'

function App() {
   

  return (
    //JSX---> javascript extension
    //Basic Rendering
    <div>
       
      <Conditional/>
      <Action/>
      <StyleComponent/>
      <Toggle/>
      <Counter/>
      <Form/>
     
      <h1>Welcome to React</h1>
    </div>
  )
}

export default App
