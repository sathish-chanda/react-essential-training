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

const dishes = ['Pizza', 'Pasta', 'Risotto'];

function Main() {
  return (
    // <ul>
    //   <li>1</li>
    //   <li>2</li>
    //   <li>3</li>
    // </ul>
    <ul>
      { dishes.map((dish) => <li style = {{ listStyleType: 'none' }}>{dish}</li>)}
    </ul>
  )
}

function App() {
  return (
    <div>
      <Header name="Sathish" year={new Date().getFullYear()}/>
      <Main dishes={dishes}/>
    </div>
  )
}

export default App
