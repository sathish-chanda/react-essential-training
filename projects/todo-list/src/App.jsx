import { useState } from "react" 
import TaskForm from "./components/TaskForm"
import TaskControls from "./components/TaskControls"
import TaskList from "./components/TaskList"
import { getStoredTasks, updateLocalStorage } from "./utils/localStorageUtils"
function App() {
  const [tasks, setTasks] = useState(getStoredTasks())
  console.log(tasks)
  console.log(typeof(tasks))
  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false)
  const sortTasks = () => {
    const sortedTasks = [...tasks]
          .sort((a,b) => a.priority - b.priority)
    setTasks(sortedTasks)
    updateLocalStorage(sortTasks)
  }

  const toggleTaskDone = (id) => {
    const updatedTasks = tasks.map((task) => 
      task.id === id ? { ...task, done: !task.done} : {...task}
    )
    setTasks(updatedTasks)
    updateLocalStorage(updatedTasks)
  }

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedTasks)
    updateLocalStorage(updatedTasks)
  }

  const addTask = (newTask) => {
    const allTasks = [...tasks, newTask]
    setTasks(allTasks)
    updateLocalStorage(allTasks)
  }

  const updateTask = ( id, editText, editPriority) => {
      const updatedTasks = tasks.map((task) => (
        task.id == id ? 
          {...task, text: editText, priority: editPriority } : task
      ))
      setTasks(updatedTasks)
      updateLocalStorage(updatedTasks)
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
        deleteTask={deleteTask} 
        updateTask={updateTask} />
    </div>
    </>
  )
}

export default App
