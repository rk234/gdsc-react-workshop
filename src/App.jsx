import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="content">
      <h1> Todo App </h1>

      <input className="task-input" type="text" />
      <div className="task-list">

      </div>
      <div className="task-list">

      </div>
    </div>
  )
}

export default App
