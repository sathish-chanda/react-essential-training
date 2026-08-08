import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Title from "./components/Title/Title"
import PropertyList from "./components/PropertyList/PropertyList"
import "./App.css"

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Title />
        <PropertyList />
      </main>
      <Footer />
    </div>
  )
}

export default App
