import Articles from "./components/Articles"
import Article from "./components/Article"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Subscribe from "./components/Subscribe"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react"
import { useState } from "react"

function App() {
  const [arts,setArts] = useState([])
  useEffect(()=>{
    (async function feed(){
      const url = import.meta.env.VITE_BACKEND
      const req = await fetch(url+'content')
      const res = await req.json()
      setArts(prev => res.data)
    })()
    
  },[])

  return (
    
    <div className="bg-col1">
      <Header />
      <Routes>
        <Route path="/" element={<><Hero /><Subscribe /><Articles arts={arts} /></>} />
        <Route path="article/:id" element={<><Article arts={arts} /><Subscribe /></>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
