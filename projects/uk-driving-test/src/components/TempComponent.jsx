const TempComponent = ({ state, dispatch }) => {
  return (
    <>
    <h2>Driving Test App</h2>
      <p>
        <strong>Current Question Index: </strong>
        {state.currentQuestion}
      </p>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={()=> console.log(state)}>Log State</button>
        <br />
        <button onClick={() => console.log(state.answers)}>Log Answers</button>
        <br />
        <button onClick={() => console.log(state.currentQuestion)}> Log Question Idx</button>
        <br />
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1rem"}}>
          <button onClick={() => dispatch({type:"ANSWER", payload: 0})}>Answer 0</button>
          <button onClick={() => dispatch({type:"ANSWER", payload: 1})}>Answer 1</button>
          <button onClick={() => dispatch({type:"ANSWER", payload: 2})}>Answer 2</button>
          <button onClick={() => dispatch({type:"ANSWER", payload: 3})}>Answer 3</button>
          <button onClick={() => dispatch({type: "NEXT"})}>Next</button>
          <button onClick={() => dispatch({type: "PREVIOUS"})}>Previous</button>
          <button onClick={() => dispatch({type: "SUBMIT"})}>SUBMIT</button>
          <button onClick={() => dispatch({type: "TICK"})}>TICK</button>
        </div>
      </div>
    </>
  )
} 

export default TempComponent