import { useState } from 'react'
import './App.css'
import Task from './components/Task';

function App() {
  // Create state variables to keep track of tasks and input.
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // handleClick() function will be called to modify tasks state array to add a new task.
  const handleClick = () => {
    //TODO: Implement
  }

  // handleCheck() function will be called to modify a task when it is checked/unchecked
  const handleCheck = (id, complete) => {
    //TODO: Implement    
  }

  return (
    <div className="content">
      <h1> Todo App </h1>

      <div id="task-bar">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="task-input"
          type="text"
          placeholder='Enter a task here...' />

        <button disabled={newTask.length == 0} onClick={handleClick} className="task-button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="plus-icn">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add Task
        </button>
      </div>

      {/* Div container that will display all of the tasks. */}
      <div className="task-list">
        {tasks.map((task, index) => (
          <Task key={index} task={task} onChange={checked => handleCheck(index, checked)}></Task>
        ))}
      </div>

    </div>
  )
}

export default App;
