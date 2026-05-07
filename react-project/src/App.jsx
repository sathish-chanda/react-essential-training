import './App.css'

let language = 'JavaScript';
let moon = '🌙';

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
      <p>Copyright {props.year}</p>
    </header>
  )
}
function App() {
  return (
    <div>
      <Header name="Sathish" year={new Date().getFullYear()}/>
      <main>
      <h2>We serve very delicious food {moon}</h2>
      </main>
    </div>
  )
}

export default App
