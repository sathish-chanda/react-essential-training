import { useReducer, useState } from "react" 
import TaskForm from "./components/TaskForm"
import TaskControls from "./components/TaskControls"
import TaskList from "./components/TaskList"
import { getStoredTasks, clearLocalStorage } from "./utils/localStorageUtils"
import { taskReducer } from "./reducer/taskReducer"
function App() {
  // const [tasks, setTasks] = useState(getStoredTasks())
  const [tasks, dispatch] = useReducer(taskReducer, getStoredTasks())
  // console.log(tasks)
  // console.log(typeof(tasks))
  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false)
  const sortTasks = () => {
    dispatch({type: "SORT"})
    // const sortedTasks = [...tasks]
    //       .sort((a,b) => a.priority - b.priority)
    // setTasks(sortedTasks)
    // updateLocalStorage(sortTasks)
  }

  const toggleTaskDone = (id) => {
    dispatch({type: "TOGGLE_DONE", payload: id})
    // const updatedTasks = tasks.map((task) => 
    //   task.id === id ? { ...task, done: !task.done} : {...task}
    // )
    // setTasks(updatedTasks)
    // updateLocalStorage(updatedTasks)
  }

  const deleteTask = (id) => {
    dispatch({type: "DELETE", payload: id})
    // const updatedTasks = tasks.filter((task) => task.id !== id)
    // setTasks(updatedTasks)
    // updateLocalStorage(updatedTasks)
  }

  const addTask = (newTask) => {
    dispatch({type: "ADD", payload: newTask})
    // const allTasks = [...tasks, newTask]
    // setTasks(allTasks)
    // updateLocalStorage(allTasks)
  }

  const updateTask = ( id, editText, editPriority) => {
      dispatch({type: "UPDATE", payload: {id,editText,editPriority}})
      // const updatedTasks = tasks.map((task) => (
      //   task.id == id ? 
      //     {...task, text: editText, priority: editPriority } : task
      // ))
      // setTasks(updatedTasks)
      // updateLocalStorage(updatedTasks)
  }

  console.log(tasks)
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
