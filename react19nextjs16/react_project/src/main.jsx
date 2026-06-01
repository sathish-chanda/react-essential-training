import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into root element
root.render(
  // Detecting potential problems in an application, and providing additional warnings and checks in development mode.
  <React.StrictMode>
    <App />
  </React.StrictMode>
)