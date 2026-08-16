import {useState} from "react"

const Counter = () => {
  console.log("Counter rendered");
  // This will not work because re-rendering does not happen with the normal variables. we need special state variable which re-renders after updating it values.
  // let count = 0;
  let [count,setCount] = useState(0)
  let [color, setColor] = useState('black')
  const increment = () => {
    // count++;
    const newCount = count + 1;
    // Update State, Trigger re-render
    setCount(newCount)
    console.log("Count : ",{newCount});
    if(newCount%2 === 0) {
       setColor("blue");
    } else {
      setColor("red");
    }
  }
  const decrement = () => {
    // count++;
    const newCount = count - 1;
    // Update State, Trigger re-render
    setCount(newCount)
    console.log("Count : ",{newCount});
    if(newCount%2 === 0) {
       setColor("blue");
    } else {
      setColor("red");
    }
  }
  
  return (
    <>
      <h1 style={{ color }}>Count : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default Counter;