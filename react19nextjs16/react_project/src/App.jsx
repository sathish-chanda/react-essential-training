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
import SpeedMessage from "./components/SpeedMessage";

import TodoList from "./components/TodoList";
import CarList from './components/CarList';


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

// Pure function : 1. Always returns the same output for the same input. 
//                 2. Does not cause any side effects (e.g., modifying variables outside its score, altering the DOM, etc).
// Pure Component
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

let counter = 0;
// Impure Component
function ImpureGreeting({ name }) {
  counter++; // Modifies a variable outside its scope.
  return <h1>Hello, {name}! Count: {counter}.</h1>;
}

const ShoppingList = ( { items }) => {
  const listStyle = {
    listStyleType: "none",
    padding: 0,
  };
  
  const itemStyle = {
    padding: "10px",
    margin: '5px 0',
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
  };

  // Directly modifying the items array to demonstrate impure behavior. This is not recommended in real applications.
  //items.push({ id: 6, label: "Butter" }); // Adding an item to the list
  const extendedItems = [...items, { id: 7, label: "Add item" }]; // Creating a new array with an additional item

  return (
    <>
      <ul style={listStyle}>
        {extendedItems.map((item) => (
          <li key={item.id} style={itemStyle}>{item.label}</li>
        ))}
      </ul>
    </>
  )
}
const App = () => {
  const items = [
    { id: 1, label: "Milk" },
    { id: 2, label: "Bread" },
    { id: 3, label: "Eggs" },
    { id: 4, label: "Cheese" },
    { id: 5, label: "Fruits" }
  ];

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

      <SpeedMessage speed={45} />
      <SpeedMessage speed={60} />
      <SpeedMessage speed={50} />
      
      <TodoList />
      <div>
        <h1>Welcome to the Car Showroom!</h1>
        <CarList />
        <CarList make="Tesla" />
      </div>

      <Greeting name="Alice" />
      <Greeting name="Alice" />
      <Greeting name="Alice" />
      <ImpureGreeting name="Bob" />
      <ImpureGreeting name="Bob" />
      <ImpureGreeting name="Bob" />
      
      <ShoppingList items={items} />
    </div>
  )
}

// Export the App component
export default App;