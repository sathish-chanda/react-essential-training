import './App.css'
import chef from './images/chef.jpg'
import { useState , useReducer, useEffect, use } from 'react';
let language = 'JavaScript';
let moon = '🌙';

function Header({name,year}) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  )
}

const items = ['Pizza', 'Pasta', 'Risotto', 'Tiramisu', 'Gelato', 'Coffee'];

const dishObjects = items.map((dish,i) => ({id: i, name: dish}));

function Main({dishes, status, updateStatus}) {
  return (
    // <ul>
    //   <li>1</li>
    //   <li>2</li>
    //   <li>3</li>
    // </ul>
      <>
        <div>
          <h2>Welcome to beautiful restaurant! Restaurent is {status}</h2>
          <button onClick={() => updateStatus('open')}>Open</button>
          <button onClick={() => updateStatus('closed')}>Close</button>
        </div>
        <main>
          <img src={chef} alt="A photo of a smiling chef owner " style={{ height: '200px' }}/> {/* alt text is useful when someone uses screen reading technology */}
          <ul>
            { 
              // dishes.map((dish,i) => <li key={i} style = {{ listStyleType: 'none' }}>{dish}</li>) // This is not stable because the key index is computed at the rendering time.
              dishes.map((dish) => <li key={dish.id} style = {{ listStyleType: 'none' }}>{dish.name}</li>)
            }
          </ul>
        </main>
      </>
  )
}
function SubSubMain({status, dispatchStatus}) {
  return (
    <>
        <div>
          <h2>SubSubMain! Welcome to beautiful restaurant! Restaurent is {status ? 'Open' : 'Closed'}</h2>
          <button onClick={dispatchStatus}>{status ? 'Close' : 'Open'} Restaurant from SubSubMain Component</button>
        </div>
      </>
  )
}
function SubMain({dishes, status, dispatchStatus}) {
  return (
    // <ul>
    //   <li>1</li>
    //   <li>2</li>
    //   <li>3</li>
    // </ul>
      <>
        <div>
          <h2>SubMain! Welcome to beautiful restaurant! Restaurent is {status ? 'Open' : 'Closed'}</h2>
          <button onClick={dispatchStatus}>{status ? 'Close' : 'Open'} Restaurant from SubMain Component</button>
        </div>
        <main>
          <img src={chef} alt="A photo of a smiling chef owner " style={{ height: '200px' }}/> {/* alt text is useful when someone uses screen reading technology */}
          <ul>
            { 
              // dishes.map((dish,i) => <li key={i} style = {{ listStyleType: 'none' }}>{dish}</li>) // This is not stable because the key index is computed at the rendering time.
              dishes.map((dish) => <li key={dish.id} style = {{ listStyleType: 'none' }}>{dish.name}</li>)
            }
          </ul>
        </main>
        <SubSubMain status={status} dispatchStatus={dispatchStatus}/>
      </>
  )
}

function App() {
  const [status, setStatus] = useState('open');
  const [reducerStatus, toggle] = useReducer( (reducerStatus) => !reducerStatus, true);

  // loading data and using animation can be benefitted from useEffect hook. We can also use it to log the status change in the console.
  useEffect(() => {
    console.log(`Status changed to ${reducerStatus ? 'Open' : 'Closed'}`);
  }, [reducerStatus]) // [] means the effect will run only once when the component first renders. [reducerStatus] means the effect will run every time the reducerStatus changes.
  return (
    <div>
      <Header name="Sathish" year={new Date().getFullYear()}/>
      {/* <Main dishes={items}/> */}
      <h3>Restaurant is {status}</h3>
      <Main dishes={dishObjects} status={status} updateStatus={setStatus}/> {/* This is more stable then the above because the data is stable before rendering. */}
      <button onClick={() => setStatus('open')}>Open From App Component</button>
      <button onClick={() => setStatus('closed')}>Close From App Component</button>
      <br />
      <h3>Restaurant Status From reducer is {reducerStatus ? 'Open' : 'Closed'}</h3>
      <SubMain dishes={dishObjects} status={reducerStatus} dispatchStatus={toggle}/> {/* This is more stable then the above because the data is stable before rendering. */}
      <button onClick={toggle}>{reducerStatus ? 'Close' : 'Open'} Restaurant From App Component</button>

    </div>
  )
}

export default App
