// import React from 'react' // pour un component pour 
import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"

// const name = 'Brad'
// const x = false

// component créé via une function 
function App() {
    const [tasks, setTasks] = useState( [
      {
          id: 1,
          text: 'Dr Creux',
          day: 'Feb 5th at 2:30pm',
          reminder: true
      },
      {
          id: 2,
          text: 'Meet at school',
          day: 'Feb 7th at 8:30pm',
          reminder: true
      },
      {
          id: 3,
          text: 'Manger chez loup',
          day: 'Feb 14th at 16:30pm',
          reminder: false
      }
  ])

  // Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    console.log('delete', id)
  }


  return (
    <div className='container'>
      <Header/> 
      <Tasks tasks={tasks} onDelete=
      {deleteTask} />
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
