import { useEffect, useState } from 'react'
import './App.css'
import Task from './components/Task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleClick = () => {
    setTasks([
      ...tasks,
      { value: task, completed: false }
    ])
    setTask("");
  }

  const handleCheck = (id, complete) => {
    setTasks(tasks.map((t, i) => {
      if (i == id) t.completed = complete;

      return t;
    }))
  }

  return (
    <div className="content">
      <h1> Todo App </h1>

      <div id="task-bar">
        <input value={task} onChange={(e) => setTask(e.target.value)} className="task-input" type="text" placeholder='Enter a task here...' />
        <button disabled={task.length == 0} onClick={handleClick} className="task-button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="plus-icn">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add Task
        </button>
      </div>

      <div className="task-list">
        {tasks.map((task, index) => (
          <Task key={index} task={task} onChange={checked => handleCheck(index, checked)}></Task>
        ))}
      </div>

    </div>
  )
}

export default App;
