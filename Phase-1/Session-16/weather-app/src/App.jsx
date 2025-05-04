import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './component/weather'
import { TodoProvider } from './redux/store'; 
import Todo from './component/Todo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Weather App</h1>
      <Weather/>
      <TodoProvider>
      <div className="container mt-5">
        <h2 className="text-center mb-4">React To-Do List (useReducer + Store)</h2>
        <Todo />
      </div>
    </TodoProvider>
    </div>
  )
}

export default App
