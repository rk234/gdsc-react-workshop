import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <div className="content">
      <h1> Todo App </h1>

      <div id="task-bar">
        <input className="task-input" type="text" placeholder='Enter a task here...' />
        <button className="task-button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="plus-icn">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add Task
        </button>
      </div>
      <div className="task-list">

      </div>
      <div className="task-list">

      </div>
    </div>
  )
}

export default App
