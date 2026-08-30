import "./Button.css"
const Button = ({children, selected, onClick}) => {
  const className = `button ${selected ? "selected" : "outline"}`
  return (
    <button className={className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;