import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './App.jsx'

const animals = ['dog', 'cat', 'hamster', 'rabbit', 'fish'];

console.log(animals[0]);

const [first, second, ...rest] = ['dog', 'cat', 'hamster', 'rabbit', 'fish'];

console.log(first);

const [,,thirdAnimal] = ['dog', 'cat', 'hamster']; 
console.log(thirdAnimal);

createRoot(document.getElementById('root')).render(<App />);
