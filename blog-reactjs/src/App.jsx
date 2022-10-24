import Article from "./components/Article"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Subscribe from "./components/Subscribe"


function App() {
  
  return (
    <div className="bg-col1">
      <Header />
      <Hero />
      <Subscribe />
      <Article />
      <Footer />
    </div>
  )
}

export default App
