const SpeedMessage = ({speed}) => {
  const speedLimit = 50;
  const message = speed <= speedLimit ? (
      <p>Your speed is okay.</p>
    ) : (
      <p>Your speed is too high.</p>
    );
  
  const backgroundColor = speed <= speedLimit ? 'lightgreen' : 'lightcoral';
   
  const messageStyle = {
    backgroundColor,
    color: '#333',
    padding: "15px",
    margin:"10px 0",
    borderRadius: "8px",
    fontWeight: "bold",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };
  return (
    <div style={messageStyle}>
      <p>The speed is {speed} mph.</p> 
      {message}
    </div>
  )
}

export default SpeedMessage;