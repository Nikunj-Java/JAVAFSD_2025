import './App.css'
import Action from './components/Action'
import Conditional from './components/conditional'
import Counter from './components/counter'
import Form from './components/Form'
import Greeting from './components/greeting'
import MyButton from './components/MyButton'
import PropCase from './components/PropeCase'
import StyleComponent from './components/StyleComponent'
import Toggle from './components/Toogle'
import UserCards from './components/UserCards'
import UserInfo from './components/UserInfo'

function App() {
   
  //object
  const user={
    name: 'Nikunj Soni',
    email:'nikunj@gmail.com',
    country:'India'
  }

  //passing a function as props
  const handleClick=()=>{
    alert('Button Clicked');
  }

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
      <PropCase name="Nikunj Soni"/>
      <PropCase name="Alice"/>

      <UserInfo name="Jhon" email="jhon@gmail.com"/>
      <UserInfo name="Bob" email="Bob@gmail.com"/>

      <UserCards user={user}/>

      <MyButton onClick={handleClick} label="Click Me"></MyButton>

     
      <h1>Welcome to React</h1>
    </div>
  )
}

export default App
