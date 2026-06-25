const TodoItem = ({description, finished }) => {
  const listItemStyle = {
    border: "1px solid #ddd",
    padding: "10px",
    margin: "10px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  return (
    <li style={listItemStyle}>
      {/* <p>{description} {finished ? <span> - done. </span> : null }</p> */}
      {description}{finished && <span> ✅ </span>}
    </li>
  )
}

export default TodoItem