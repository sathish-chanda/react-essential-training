import { useState } from "react" 
import TaskForm from "./components/TaskForm"
import TaskControls from "./components/TaskControls"
import TaskList from "./components/TaskList"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Buy Groceries",
      priority: 1,
      done: true,
    },
    {
      id: 2,
      text: "Have a walk",
      priority: 2,
      done: false,
    },
    {
      id: 3,
      text: "Read a book",
      priority: 3,
      done: false,
    },
  ])
  return (
    <>
    <div style={{
      padding:"20px",
      fontFamily: "Arial",
      maxWidth: "800px",
      margin: "auto",
    }}> 
      <h2 style={{ textAlign: "center"}}>To-Do List</h2>
      <TaskForm />
      <TaskControls />
      <TaskList tasks={tasks}/>
    </div>
    </>
  )
}

export default App
