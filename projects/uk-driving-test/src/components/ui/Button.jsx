import "./Button.css"
const Button = ({children, selected, onClick, disabled, variant}) => {
  var className;
  if(variant) {
    className = `button ${variant}`
  } else {
    className = `button ${selected ? "selected" : "outline"}`
  }
  return (
    <button className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button;