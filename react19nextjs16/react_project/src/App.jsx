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
import PropTypes from 'prop-types';

import AppleComponent from "./components/AppleComponent";
import GoogleComponent from "./components/GoogleComponent";
import AmazonComponent from "./components/AmazonComponent";


// Demonstration of props in React.
const BlueComponent = () => {
  return (
    <div style={{ color : "blue" }}>
      <p>This is a blue component</p>
    </div>
  )
}

const RedComponent = () => {
  return (
    <div style={{ color : "red" }}>
      <p>This is a red component</p>
    </div>
  )
}

const GreenComponent = () => {
  return (
    <div style={{ color : "green" }}>
      <p>This is a green component</p>
    </div>
  )
}
// Using Props to create a reusable ColorComponent that can display text in different colors based on the passed prop value.
// const ColorComponent = (props) => {
//   return (
//     <div style={{ color : props.color }}>
//       <p>This is a {props.color} component</p>
//     </div>
//   )
// }

const ColorComponent = ({color}) => {
  return (
    <div style={{ color : color }}>
      <p>This is a {color} component</p>
    </div>
  )
}

// PropType validation for ColorComponent
ColorComponent.propTypes = {
  color: PropTypes.string.isRequired,
};

// Reusable UserProfile component
const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
    </div>
  )
}

const userDetails = {
  name: "Alice",
  age: 30,
  location: "New York"
};

const App = () => {
  return (
    <div>
      <AmazonComponent />
      <AppleComponent />
      <GoogleComponent />
      <GreenComponent />
      <RedComponent />
      <BlueComponent />
      <ColorComponent color="purple" />
      <ColorComponent color="orange" />
      <ColorComponent color="yellow" />
      <ColorComponent color="black" />
      <ColorComponent color="pink" />
      <UserProfile {...userDetails} />
    </div>
  )
}

// Export the App component
export default App;