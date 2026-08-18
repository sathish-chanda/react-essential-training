const AddButton = ({item, prices, color, addItem, textColor='white'}) => {
    return (
      <button style={
        {
          backgroundColor: color,
          color: textColor,
          padding: "0.5rem",
          border: "none",
          cursor: "pointer",
        }
      }
       onClick={() => addItem(item)}
      >
        Add {item} ({prices[item]*100}p)
      </button>
    )
}

export default AddButton;