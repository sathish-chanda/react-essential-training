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
