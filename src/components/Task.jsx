import "./Task.css"

export default function Task({ task, onChange }) {
  return <div className={`task-card ${task.completed ? 'task-card-complete' : ''}`}>
    <p className={`task-title ${task.completed ? 'task-title-complete' : ''}`}>{task.value}</p>
    <input onChange={(e) => onChange(e.target.checked)} className="task-check" type="checkbox" />
  </div>
}
