import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
        {tasks.map((task) => (  // aurait pu être task et task.id pour la key
        <Task key={task.id} task={task}
        onDelete={onDelete}
        onToggle={onToggle}/>
        ))}
    </>
    )
}

export default Tasks
