import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Title from "./components/Title/Title"
import PropertyList from "./components/PropertyList/PropertyList"

const App = () => {
  return (
    <div>
      <h1>Cambridge Rentals</h1>
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
