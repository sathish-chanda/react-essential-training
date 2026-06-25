import TodoItem from "./TodoItem";
const TodoList = () => {
  const todoListStyle = {
    listStyleType: "none",
    padding: 0,
  };
  return (
    <div>
      <h1>My Todo List</h1>
      <ul style={todoListStyle}>
        <TodoItem description="Learn React" finished={true} />
        <TodoItem description="Build a React app" finished={false} />
        <TodoItem description="Deploy the React app" finished={false} />
      </ul>
    </div>
  )
}

export default TodoList;