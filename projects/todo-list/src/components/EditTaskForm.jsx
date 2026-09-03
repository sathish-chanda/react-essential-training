import { Check } from "lucide-react"
import { useState } from "react"
import { useTaskActions } from "../context/TaskContext"
const EditTaskForm = ( {task, setEditingTaskId} ) => {
  const [editText,setEditText] = useState(task.text)
  const [editPriority, setEditPriority] = useState(task.priority)
  const {updateTask} = useTaskActions()
  const saveEdit = () => {
    if(editText.trim()) {
      updateTask(task.id, editText, editPriority)
      setEditingTaskId(null)
    }
  }
  return (
    <>
      <input type="text" 
        style={{
          flexGrow: 1,
          padding: "5px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
      />
      <input type="number"
          min="1"
          style={{
            width: "3.75rem",
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
          value={editPriority}
          onChange={(e) => setEditPriority(Number(e.target.value))}
      />
      <button style={{
        borderRadius: "50%",
        backgroundColor: "#28a745",
        color: "white",
        padding: "10px",
        border: "none",
        cursor: "pointer",
      }}
      onClick={saveEdit}
      >
        <Check size={16} />
      </button>
    </>
  )
}

export default EditTaskForm;