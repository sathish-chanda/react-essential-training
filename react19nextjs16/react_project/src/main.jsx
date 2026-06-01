// import React from 'react' --- IGNORE --- Not required in React 17 and above
import ReactDOM from 'react-dom/client'

// Define an App component
export const App = () => {
  return <h1>React is fun!</h1>
  // return React.createElement('h1', null, 'React is fun!');
}

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into root element
root.render(<App />)