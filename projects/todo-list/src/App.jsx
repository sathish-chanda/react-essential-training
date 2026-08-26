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
    {
      id: 4,
      text: "Read a Novel",
      priority: 2,
      done: false,
    },
    {
      id: 5,
      text: "Read a TextBook",
      priority: 1,
      done: false,
    },
  ])
  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false)
  const sortTasks = () => {
    const sortedTasks = [...tasks]
          .sort((a,b) => a.priority - b.priority)
    setTasks(sortedTasks)
  }

  const toggleTaskDone = (id) => {
    const updatedTasks = tasks.map((task) => 
      task.id === id ? { ...task, done: !task.done} : {...task}
    )
    setTasks(updatedTasks)
  }

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedTasks)
  }

  const addTask = (newTask) => {
    const allTasks = [...tasks, newTask]
    setTasks(allTasks)
  }

  return (
    <>
    <div style={{
      padding:"20px",
      fontFamily: "Arial",
      maxWidth: "800px",
      margin: "auto",
    }}> 
      <h2 style={{ textAlign: "center"}}>To-Do List</h2>
      <TaskForm addTask={addTask}/>
      <TaskControls 
        showOnlyIncomplete={showOnlyIncomplete} 
        setShowOnlyIncomplete={setShowOnlyIncomplete}
        sortTasks={sortTasks} />
      <TaskList 
        tasks={tasks}
        showOnlyIncomplete={showOnlyIncomplete}
        toggleTaskDone={toggleTaskDone}
        deleteTask={deleteTask} />
    </div>
    </>
  )
}

export default App
