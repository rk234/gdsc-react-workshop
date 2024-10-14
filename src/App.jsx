import { useEffect, useState } from 'react'
import './App.css'
import Task from './components/Task';

function App() {
  const [id, setId] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleClick = () => {
    setTasks([
      ...tasks,
      { id: id, value: task }
    ])
    setTask("");
    setId(id + 1);
  }

  useEffect(() => {
    console.log(tasks);
  }, [tasks])

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
        {tasks.map(task => (
          <Task key={task.id} task={task}></Task>
        ))}
      </div>

    </div>
  )
}

export default App;
