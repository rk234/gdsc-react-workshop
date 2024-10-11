import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <div className="content">
      <h1> Todo App </h1>

      <div id="task-bar">
        <input className="task-input" type="text" />
        <button>Add Task</button>
      </div>
      <div className="task-list">

      </div>
      <div className="task-list">
      
      </div>
    </div>
  )
}

export default App
