import "./Task.css"

export default function Task({ task }) {
  return <div className="task-card">
    <p className="task-title">{task.value}</p>
    <input className="task-check" type="checkbox" />
  </div>
}
