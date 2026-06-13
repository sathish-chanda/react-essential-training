// const App = () => {
//   const userName = "Alice";

//   const greetUser = (name) => `Hello, ${name}! Welcome to React!`;

//   const userInfo = { age: 30, location: "New York" };

//   const titleStyle = {
//     color: "blue",
//     fontSize: "24px",
//     textAlign: "center",
//     margin: "20px 0"
//   };

//   return (
//     <>
//       <h1>React is fun!!</h1>
//       <p>React makes building UIs easy and efficient.</p>
//       <img src="images/nature.jpeg" width="300" alt="Nature Image" />
//       <input 
//         type="text"
//         placeholder="Type your name"
//         autoComplete="off"
//       />

//       <div>
//         {/* Passing string with quotes */}
//         <img src="images/nature.jpeg" width="300" alt="Nature Image" />

//         {/* Referencing a javascript variable */}
//         <p>Your name is: {userName}!</p>

//         <p>{greetUser(userName)}</p>

//         <p>Age: {userInfo.age}, Location: {userInfo.location}.</p>

//         <h1 style={titleStyle}>Welcome to React!</h1>

//       </div>
//     </>
//   );

// }
import AppleComponent from "./components/AppleComponent";
import GoogleComponent from "./components/GoogleComponent";
import AmazonComponent from "./components/AmazonComponent";

const App = () => {
  return (
    <div>
      <AmazonComponent />
      <AppleComponent />
      <GoogleComponent />
    </div>
  )
}

// Export the App component
export default App;