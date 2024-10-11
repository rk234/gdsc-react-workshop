import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [id, setId] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleClick = () => {
    setTasks([
      ...tasks,
      {id: id, value: task}
    ])
    setTask("");
    setId(id + 1);
  }

  const handleDelete = (id) => {
    setTasks(
      tasks.filter(t => t.id !== id)
    )
  }

  useEffect(() => {
    console.log(tasks);
  }, [tasks])

  return (
    <div className="content">
      <h1> Todo App </h1>

      <div id="task-bar">
        <input value={task} onChange={(e) => setTask(e.target.value)} className="task-input" type="text" />
        <button onClick={handleClick}>Add Task</button>
      </div>

      <div className="task-list">
        {tasks.map(task => (
          <div key={task.id} id="task-list-item">
            <li>{task.value}</li>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default App
