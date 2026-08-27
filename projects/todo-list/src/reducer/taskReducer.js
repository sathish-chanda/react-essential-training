import { updateLocalStorage } from "../utils/localStorageUtils";
export const taskReducer = (state, action) => {
  let updatedTasks;  
  switch(action.type) {
      case "SORT":
        updatedTasks = [...state]
          .sort((a,b) => a.priority - b.priority)
          break
      case "TOGGLE_DONE":
        updatedTasks = state.map((task) => 
            task.id === action.payload ? { ...task, done: !task.done} : {...task})
        break
      case "DELETE":
        updatedTasks = state.filter((task) => task.id !== action.payload)
        break
      case "ADD":
        updatedTasks = [...state, action.payload]
        break
      case "UPDATE":
        updatedTasks = state.map((task) => (
        task.id == action.payload.id ? 
          {...task, text: action.payload.editText, priority: action.payload.editPriority } : task ))
        break
      default:
        updatedTasks = state
  }
  updateLocalStorage(updatedTasks)
  return updatedTasks
}