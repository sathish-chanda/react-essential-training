import './App.css'

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

function Main({dishes}) {
  return (
    // <ul>
    //   <li>1</li>
    //   <li>2</li>
    //   <li>3</li>
    // </ul>
    <ul>
      { 
        // dishes.map((dish,i) => <li key={i} style = {{ listStyleType: 'none' }}>{dish}</li>) // This is not stable because the key index is computed at the rendering time.
        dishes.map((dish) => <li key={dish.id} style = {{ listStyleType: 'none' }}>{dish.name}</li>)
      }
    </ul>
  )
}

function App() {
  return (
    <div>
      <Header name="Sathish" year={new Date().getFullYear()}/>
      {/* <Main dishes={items}/> */}
      <Main dishes={dishObjects}/> {/* This is more stable then the above because the data is stable before rendering. */}
    </div>
  )
}

export default App
