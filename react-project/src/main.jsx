import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './App.jsx'

createRoot(document.getElementById('root')).render( // This line finds the root element in the index.html file and creates a React root for rendering the application.
  <StrictMode>
    <App />
  </StrictMode>,
)
